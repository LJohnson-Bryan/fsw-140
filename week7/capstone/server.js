const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'cffwOki7',
        database: 'login_app'
    }
);

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Database Connection Established Successfully!');
});

app.get('/accounts', (req, res) => {
    let sql = `SELECT * FROM accounts`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})

app.get('/account/:username', (req, res) => {
    let sql = `SELECT * FROM accounts WHERE username = '${req.params.username}'`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})

app.get('/account/id/:id', (req, res) => {
    let sql = `SELECT * FROM accounts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})



app.post('/account', (req, res) => {
    let sql = 'INSERT INTO accounts SET ?';
    db.query(sql, req.body, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})

app.put('/account/:AccID', (req, res) => {
    let sql = `UPDATE accounts SET ? WHERE id = ${req.params.AccID}`;
    db.query(sql, req.body, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})

app.delete('/account/:AccID', (req, res) => {
    let sql = `DELETE FROM accounts WHERE id = ${req.params.AccID}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    })
})



// Error Handling
app.use((err, req, res, next) => {
    if(err.name === "Unauthorized Error") {
        res.status(err.status);
    }
    return res.send({errMsg: err.message});
});

// Listen to port 9000
app.listen(9000, () => {
    console.log('Server listening to port 9000');
});

