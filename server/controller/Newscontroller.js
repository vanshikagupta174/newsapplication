import news from '../model/News.js';
//mongodb m call mar rhe h
//api calls m 2 arguments hote h
//find() is of mogodb and if hum iske andar empty object pass krte h toh it gives all the data present in mongodb
//hum external entity ko call lga rhe h toh vo ek asynchronous function h and for these function we have to write await
export const getnews=async(request,response)=>{
try{
    const size=Number(request.query.size);
    const skip=Number(request.query.page);
let data=await news.find({}).limit(size).skip(size*skip);
response.status(200).json(data);
}catch(error){
response.status(500).json(error);
}
}