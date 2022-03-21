//validation of data is done by help of schema
import mongoose from 'mongoose';
const newsSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    timestamp:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    }
});
//here first argument contains the name of database
const news=mongoose.model('News', newsSchema);
export default news;
