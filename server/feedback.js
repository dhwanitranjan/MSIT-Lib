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

// Feedback Form.

app.get('/feedback/get', (req, res)=>{    
    const sqlprint = "SELECT * FROM feedback"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

app.post('/feedback/insert', (req, res)=>{

    const user = req.body.user
    const roll = req.body.roll
    const about = req.body.about
    const fb = req.body.fb

    const sqlInsert = "INSERT INTO feedback (user, roll, about, fb) VALUES (?,?,?,?)"
    db.query(sqlInsert, [user, roll, about, fb], (err, result)=>{
        console.log(result)
    })
})

app.delete('/api/delete/:fb', (req, res)=>{
    const cmt = req.params.fb;
    const sqlDel = "DELETE FROM feedback WHERE fb = ?";

    db.query(sqlDel, cmt, (err, result)=>{
        console.log(err);
    })
})

app.listen(3001, ()=>{
    console.log("Running...")
})