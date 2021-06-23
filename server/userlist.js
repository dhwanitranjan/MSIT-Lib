const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require("mysql")

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'msitvideo'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.get('/user/get', (req, res)=>{    
//     const sqlprint = "SELECT * FROM userlist"
//     db.query(sqlprint, (err, result)=>{
//         res.send(result)
//     });
// })
    
app.post('/user/register', (req, res)=>{

    const student = req.body.student
    const username = req.body.username
    const password = req.body.password

    const sqlInsert = "INSERT INTO userlist (student, username, password) VALUES (?,?,?)"
    db.query(sqlInsert, [student, username, password], (err, result)=>{
        console.log(result)
    })
})

app.post('/user/login', (req, res)=>{

    const username = req.body.username
    const password = req.body.password

    const sqlSelect = "SELECT * FROM userlist WHERE username = ? AND password = ?"
    db.query(sqlSelect, [username, password], (err, result)=>{
        
        if (err){
            res.send({err: err})
        }

        if (result.length>0){
            res.send({message:""});
        } else {
            res.send({message: "Wrong username or password."});
        }
    })
})


app.listen(3001, ()=>{
    console.log("Running...")
})