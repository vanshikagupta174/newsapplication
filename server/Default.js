import News from './model/News.js';
import { data} from './constants/Data.js';

const Defaultdata=async()=>{
    try{
        await News.deleteMany({})
await News.insertMany(data);
console.log('data imported successfully');
    }catch(error){
        console.log('error ',error.message);
    }
}
export default Defaultdata;