const fs = require('fs').promises;

const cities = [
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
    { name: 'Sydney', lat: -33.8651, lng: 151.2099 },
    { name: 'Rome', lat: 41.9028, lng: 12.4964 },
    { name: 'Cairo', lat: 30.0444, lng: 31.2357 },
    { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708 }, 
    { name: 'Rabat', lat: 34.0209, lng: -6.8416 }
];

const fetchData = async (lat,lng)=>{
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
        if (!response.ok) {
            throw new Error('Error happen while fetching data');
        }
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        const temperature_unit = data.current_weather_units.temperature;

        const cityTemperatur = `${temperature} ${temperature_unit}`;

        return cityTemperatur;
    } catch (error) {
        console.log(error);
    }
}
const readInputFile =async ()=>{
    const data = await fs.readFile('input.txt','utf8')
    return data;
}

const createCityFile= async (cityName,content)=>{
    try {
        const dir = await fs.readdir(__dirname);
        const fileName = cityName + '.txt';
        
        if(dir.find(f=>f===fileName)){
           await fs.unlink(fileName);
        }
        await fs.writeFile(fileName,content);

        console.log(`${fileName} Temperator File Created  Successfuly !`);
    } catch (error) {
        console.log(error);
    }
}

//createCityFile("Agadir","This is Agadir my beautiful city");
const getCityInfo = async ()=>{
    try {
        const cityNames = await readInputFile();
        const citiesNames = cityNames.split(', ');
        const randomIndex = Math.floor(Math.random() * citiesNames.length);
        const foundCity = cities.find(c=>c.name===citiesNames[randomIndex]);
        if (foundCity) {
            //console.log("City Found !",foundCity);
            const{lat,lng}=foundCity;
            const content = await fetchData(lat,lng);
            console.log(lat,lng);
            const cityInfo = `Current Weather for ${foundCity.name} is ${content}`;
            await createCityFile(foundCity.name,cityInfo);
            // console.log(cityInfo);
        }
        else{
            console.log("City Not Found In Database : ",citiesNames[randomIndex]);
        }
    } catch (error) {
        console.log(error);
    }
}

getCityInfo();



