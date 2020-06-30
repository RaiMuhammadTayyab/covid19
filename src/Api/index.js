import axios from 'axios'

const url='https://api.covid19api.com/summary'

export const fetchdata = async ()=> {
try {
    const {data:{TotalConfirmed,TotalRecovered,TotalDeaths,latestdate}}= await axios.get(url)
      
    const modifieddata={
        TotalConfirmed:Global.TotalConfirmed,
        TotalRecovered:Global.TotalRecovered,
        TotalDeaths:Global.TotalDeaths,
        latestdate: Date,
    }
 


    
 return modifieddata}

    
catch(error) {

}}
