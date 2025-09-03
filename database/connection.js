const mongoose =require('mongoose')
require('dotenv').config();

mongoose.connect(process.env.mongodb_url).then((res)=>{
  console.log('connection  established');
  
}).catch(()=>{
  console.log('connection error');
  
})