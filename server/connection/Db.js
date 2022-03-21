import mongoose from 'mongoose';

const Connection = async () => {
    try {
        const URL = `mongodb://vipul:vanshika@clone-inshorts-shard-00-00.idm5b.mongodb.net:27017,clone-inshorts-shard-00-01.idm5b.mongodb.net:27017,clone-inshorts-shard-00-02.idm5b.mongodb.net:27017/INSHORT-CLONE?ssl=true&replicaSet=atlas-386ddh-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('database connected successfully');
    } catch (error) {
        console.log(`error while connecting with database `, error);
    }
}

export default Connection;