import 'dotenv/config'
import { app } from './app.js';
import connectDB from "./db/index.js";


const PORT = process.env.PORT || 8004;
const uri = process.env.MONGO_URI;


connectDB(uri)
.then(()=> {
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`); 
    })
})
.catch((err)=> {
    console.log(`MongoDB connection error. ${err}`);
})


console.log("Sb chl rha hehehehe!!! ky yaar");
