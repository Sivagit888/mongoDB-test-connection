
//Step 1) Import libraries
const mongoose = require('mongoose')
const dotenv = require('dotenv')

//Step 2) Declare environment(env) variables 
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;

//Step 3) Connect to MongoDB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((con) => console.log('DATABASE connections seccessful!'));


//Step 4) Create mongo0 schema 
const phoneSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    brand:{
        type:String
    },
    battery:{
        type:Number,  
    },
    camera:{
        type:String,
    }
})

//Step 5) Declare folder name associated with respective schema 
const Mobile = mongoose.model('Mobile', phoneSchema)

//Step 6) Create data  
const createData = async (req, res, next) => {
    const newUser = await Mobile.create({
      name: 'iPhone',
      brand: 'apple',
      battery: 2750,
      camera: '48mp',
    });
    console.log(newUser);
  };

// Step 7) Invoke the fuction to create a data in database
  createData(); 