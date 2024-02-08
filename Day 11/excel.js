const xlsx = require('xlsx');

const processEmployee= async (pathFile)=> {

    try {
        if (pathFile.split('.')[1]==="xlsx") {

        const woorkBk = await xlsx.readFile(pathFile);

        const woork_sheet = woorkBk.SheetNames[0];
        //console.log(woork_sheet);
        const sheet = woorkBk.Sheets[woork_sheet];
        //console.log(sheet);

        const data = xlsx.utils.sheet_to_json(sheet);
        //console.log(data);
        const newData = calc_bonus_employee(data);
        updateFile(newData);
    //return data;
        }else{
            console.log("the extension is not .xlsx , please give a valid file !");
        }
    } catch (error) {
        console.log("Error Happen : "+error);
    }
    
}

const calc_bonus_employee = (obj)=>{

    for (let i = 0; i < obj.length; i++) {
        
        if (obj[i].AnnualSalary<50000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.05;
            obj[i].bonusPercentage = "%5";
        }else if (obj[i].AnnualSalary >= 50000 || obj[i].AnnualSalary <= 100000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.07;
            obj[i].bonusPercentage = "7%";
        }else if (obj[i].AnnualSalary>100000) {
            obj[i].bonusAmount = obj[i].AnnualSalary * 0.1;
            obj[i].bonusPercentage = "10%";
        } else {
            obj[i].bonusAmount = 0;
            obj[i].bonusPercentage = "0%";
        }
    }
    //console.log(obj);  
    return obj;
}

const updateFile = async (newData) =>{
    const new_workbook = await xlsx.utils.book_new();
    const new_worksheet = xlsx.utils.json_to_sheet(newData);
    xlsx.utils.book_append_sheet(new_workbook, new_worksheet, "new_data");
    xlsx.writeFile(new_workbook, "modified_employee_data.xlsx");
    //console.log(newData);
}

//updateFile(calc_bonus_employee(processEmployee("employeeData.xlsx")));
processEmployee("employeeData.xlsx");