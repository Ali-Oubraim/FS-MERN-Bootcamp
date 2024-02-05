async function fetchUsersData(){
    try {
        const response = await fetch('https://dummyjson.com/users')
        if(!response.ok){
            console.log("Fetch faild !!");
        }else{
        
            const data = await response.json();
            const userData = data.users;

            const processData = await processUserData(userData);
            const summarizeMaleAge = await summarizeAge(userData);
            
            console.log(processData);
            console.log("Total Male Age : "+summarizeMaleAge);
        }
    } catch (error) {
        console.log("Error happen : "+error);
    }
}

const processUserData = async (usersArr)=>{
    
    const filtredMale =()=>{

        return usersArr.filter(({gender})=>gender!=='male');
    }

    const usersStrings =()=>{
        return filtredMale().map(({firstName ,age})=>`Name : ${firstName} , Age : ${age}`)
    } 
    
    return usersStrings();
}

const summarizeAge = async (usersData) =>{
 
    const ageSum = usersData.reduce((sum,user)=>{
            if (user.gender === 'male') {
                return sum + user.age
            }else{
                return sum;
            }
        },0)

    return ageSum;
}

fetchUsersData();
