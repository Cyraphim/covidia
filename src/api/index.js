import axios from 'axios';
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    
    let changeableUrl = url;
    if(country)
    {
        changeableUrl =  `${url}/countries/${country}`
    }

    
    try{
        
        const {data: confirmed, recovered, deaths, lastUpdate} = await axios.get(changeableUrl);
        return {confirmed, recovered, deaths, lastUpdate};    
    
        
    } catch(error) {
        console.log("something went wrong! || " + error);
    }
}

export const fetchDailyData = async () => {
    try{
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({confirmed: dailyData.confirmed.total, deaths: dailyData.deaths.total, date: dailyData.reportDate}));

        return modifiedData;    
    } catch(error) {
        console.log("something went wrong! || " + error);
    }
}

export const fetchCountries = async () => {
    try{
          const {data: countryNames}= await axios.get(
            "http://ec2-3-7-91-51.ap-south-1.compute.amazonaws.com/dev/adeviser-api/rest/api/country/enum/country",
            {
             headers: {
                "Content-Type": "application/json",
                "x-api-key": "aGXfHjUR3RfD2FqaBVKA9crSXb4YaqF7",
                Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2MDMzODY1OTcsInVzZXJfbmFtZSI6ImRhc2VyaWFsZ2VuaXVzIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwiZXhwIjoxNjAzMzkwMTk3LCJhdXRob3JpdGllcyI6WyJST0xFX0NPUlBfVVNFUiJdLCJqdGkiOiIxMjY0MWRiMy1iZTI3LTQ2MWQtOTFkNi00ZWY4NzU1ODQxMGUiLCJjbGllbnRfaWQiOiJhZGV2aXNlci11aSJ9.OVWamlH2jMmJgq3md7OFnY2HXJSxUyhDj6phHsbdKw4yMqNsNWXyBAVIGS5Jo8gszMwiU2CtzJrY6L0NP7QP4XPLSfQq9bvh6W72CBj1zM7qd4IP-2OH_CGLe1YCWJ4TlzJeJ8GbezS3-XTNSOdcBKN870QYmIzMjn7AkpRaCuRFe0yS46uqVaICo-6Kt_idTQhOe0pBhOWwSIYyJ5O-EDSA8z73BR7EkzGq8BoOF7FZggNypU7BKBOxUyhulQNtc7dMft6n282fiTGe_qfzq-xPEkFJ11LRb6bjU8i03xvj0tWc7A6ekOawF_8vVx6SsA02zSSqyzdHt5UJwGppTw"
            }
            }
          );
        return countryNames.map((country) => country.countryName);
    } catch (error) {

    }
}