import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS

if(!MONGODB_CS){
    throw new Error('connection string not found')
}

const DbConnection = async()=>{
    
    if(mongoose.connection.readyState === 1){
        console.log('Database already connected')
        return;
    }
    try{
        await mongoose.connect(MONGODB_CS)
        console.log('Database connected Successfully')
    }catch(error){
        console.log('Database connection failed', error)
    }
}

export default DbConnection;