// const express=require("express");
// const app=express();
// const cors=require("cors");
// const pool=require("./db");
// const logger = require('morgan');
// app.use(cors());
// app.use(express.json());//req.body
// app.use(logger('dev')) //status color change


// app.get('/', (req, res) => res.send("Welcome to setting up Node.js project tutorial!"))


// app.get("/searchemail" , async(req,res) =>{
//     var email=req.body.email;
//     var searchText =  email+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  email ilike $1
//     ORDER BY email ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// })
// });

// app.get("/searchcompany" , async(req,res) => {
//     var company=req.body.company;
//     var searchText =  company+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  company ilike $1
//     ORDER BY company ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// });

// app.get("/searchdepartment" , async(req,res) => {
//     var department=req.body.department;
//     var searchText =  department+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  department ilike $1
//     ORDER BY department ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// });

// app.get("/searchname" , async(req,res) => {
//     var name=req.body.name;
//     var searchText =  name+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  name ilike $1
//     ORDER BY name ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// });

// app.get("/searchdesignation" , async(req,res) => {
//     var designation=req.body.designation;
//     var searchText =  designation+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  designation ilike $1
//     ORDER BY designation ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// });

// app.get("/searchcontact" , async(req,res) => {
//     var contact=req.body.contact;
//     var searchText =  contact+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 
//      where  contact ilike $1
//     ORDER BY contact ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// });
// app.get("/searchid" , async(req,res) => {
//     var id=req.body.id;
//     var searchText =  id+ '%';
                     
//     pool.query(
//      `SELECT id,name,company,department,designation,contact,email FROM users1 where id like $1 ORDER BY id ASC`, [searchText], (error, results) => {
//         if(error) {
//         } else {
//             if(results.rows !=0){
//         res.status(200).json({ msg: "SUCCESS", res: results.rows });
//         }
//         else{
//             res.status(200).json({msg:"no such fields"});
//         }
//     }    
// }
//     )
// }

// )

// app.listen(5000,()=>{
//     console.log("server has started on port 5000");

// });

const express = require('express');
const view = require('./view');
const app = express();
const cors = require('cors');

var corsOption = {
    Allow: '*'
};

app.use(cors(corsOption));

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.get('/search/:search_text', view); 

app.listen(5000, () => console.log('Server @ 5000'));