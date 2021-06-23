const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors")
const app = express()
const mysql = require("mysql")
const cookieParser = require('cookie-parser')
const session = require('express-session')

const bcrypt = require('bcrypt')
const saltRounds = 10

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'msitvideo'
})

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))

// app.use(cors())
app.use(express.json())

app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: true}))

// app.use(session({
//     key: "userId",
//     secret: "msitvideolib",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         expires: 60, // Session is 1 min. For 1 day 60 * 60 * 24.
//     }
// }))

// ITW
app.get('/itw', (req, res)=>{    
    const sqlprint = "SELECT * FROM itvideolib"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/itw/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO itvideolib (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})


// CSPP
app.get('/cspp', (req, res)=>{    
    const sqlprint = "SELECT * FROM cspp"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/cspp/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO cspp (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})


// IDS
app.get('/ids', (req, res)=>{    
    const sqlprint = "SELECT * FROM idsvideo"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/ids/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO idsvideo (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})


// PSC
app.get('/psc', (req, res)=>{    
    const sqlprint = "SELECT * FROM psc"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/psc/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO psc (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})

// ADS
app.get('/ads', (req, res)=>{    
    const sqlprint = "SELECT * FROM ads"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/ads/insert', (req, res)=>{

    const Videourl = req.body.url
    const student = req.body.student
    const course = req.body.course
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO ads (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})


// CNF
app.get('/cnf', (req, res)=>{    
    const sqlprint = "SELECT * FROM cnvideolib"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/cnf/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO cnvideolib (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})


// DBMS
app.get('/dbms', (req, res)=>{    
    const sqlprint = "SELECT * FROM dbms"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        console.log(result)
    });
})

app.post('/dbms/insert', (req, res)=>{

    const student = req.body.student
    const course = req.body.course
    const Videourl = req.body.url
    const durationmints = req.body.duration
    const module = req.body.module
    const Description = req.body.description

    const sqlInsert = "INSERT INTO dbms (student, CourseID, Videourl, durationmints, module, Description) VALUES (?,?,?,?,?,?)"
    db.query(sqlInsert, [student, course, Videourl, durationmints, module, Description], (err, result)=>{
        console.log(result)
    })
})

// Search page
app.get('/search', (req, res)=>{    

    const sqlprint = "SELECT * FROM dbms UNION SELECT * FROM cspp UNION SELECT * FROM ads UNION SELECT * FROM cnvideolib UNION SELECT * FROM psc UNION SELECT * FROM idsvideo UNION SELECT * FROM itvideolib"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
        // console.log(result)
    });
})

// Feedback

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

// Sign Up

app.post('/user/register', (req, res)=>{

    const student = req.body.student
    const username = req.body.username
    const password = req.body.password
    const sqlInsert = "INSERT INTO userlist (student, username, password) VALUES (?,?,?)"

    bcrypt.hash(password, saltRounds, (err, hash) =>{
        if(err){
            console.log(err)
        }
        
        db.query(sqlInsert, [student, username, hash], (err, result)=>{
            console.log(result)
        })
    })

})

app.get('/user/username', (req, res)=>{    
    const sqlprint = "SELECT * FROM userlist"
    db.query(sqlprint, (err, result)=>{
        res.send(result)
    });
})

// Check if logged in.

app.get("/login"), (req, res)=>{
    if (req.session.user){
        res.send({loggedIn: true, user: req.session.user})
        console.log({loggedIn: true, user: req.session.user})
    } else {
        res.send({loggedIn: false})
        console.log({loggedIn: false})
    }
}

// Sign In

app.post('/user/login', (req, res)=>{

    const username = req.body.username
    const password = req.body.password

    const sqlSelect = "SELECT * FROM userlist WHERE username = ?"
    db.query(sqlSelect, username, (err, result)=>{
        
        if (err){
            res.send({err: err})
        }

        if (result.length>0){
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response){
                    console.log(result[0])
                    res.send(result)
                } else {
                    res.send({message: "Check your password."});

                }
            })
        } else {
            res.send({message: "This user does not exist."});
        }
    })
})

// Edit Profile

app.put('/update/name', (req, res)=>{
    const student = req.body.student;
    const new_name = req.body.new_name;
    const sqlUpdate = "UPDATE userlist SET student = ? WHERE student = ?";

    db.query(sqlUpdate, [new_name, student], (err, result)=>{
        console.log(err);
    })
})

app.put('/update/username', (req, res)=>{
    const student = req.body.student;
    const new_username = req.body.new_username;
    const sqlUpdate = "UPDATE userlist SET username = ? WHERE student = ?";

    db.query(sqlUpdate, [new_username, student], (err, result)=>{
        console.log(err);
    })
})


app.listen(3001, ()=>{
    console.log("Running...")
})