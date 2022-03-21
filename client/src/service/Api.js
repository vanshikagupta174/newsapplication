import axios from 'axios';
const URL='http://localhost:8000'
export const getnews=async(page,size=5)=>{
    try{
return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    }catch(error){
        console.log('error while calling getnews api', error);
    }
}