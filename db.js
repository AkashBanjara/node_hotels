// const mongoose =  require('mongoose')


// //define the  MongoDB  URL

// const mongoURL= 'mongodb://localhost:27017/hotels'


// //set up mongodb connection
// mongoose.connect(mongoURL, {
//     // useNewUrlParser:true,
//     // useUnifiedTopology: true
// })


// //get the default connections
// //mongoose maintains a default connection object representing the mongodb connection.
// const db = mongoose.connection;
 

// // define event listenres of dataase connections
// db.on('connected', ()=>{
//     console.log('connected to mongodb server')
// })

// db.on('error',(err)=>{
//     console.error('mongodb connection error: '. err)
// })
// db.on('disconnected', ()=>{
//     console.log('mongodb disconnected')
// })

// module.exports = db;  

const mongoose = require('mongoose');

module.exports = async()=>{
    const mongoURL = 'mongodb://localhost:27017/hotels'

    try {
        mongoose.connect(mongoURL)
        console.log('connected to mongoDb server')
    } catch (error) {
        
        console.log(error)
        process.exit(1)
    }
};