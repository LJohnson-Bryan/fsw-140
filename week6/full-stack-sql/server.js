const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'SNIPPED',
        database: 'todoApp'
    }
);

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Database Connection Established Successfully!');
});

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE todoApp';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('todoApp Database Created Successfully!');

    })
})

app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE todos (id INT auto_increment, title VARCHAR(50), description VARCHAR(250), imageURL VARCHAR(250), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('todoApp table Created Successfully!');

    })
})

app.get('/inserttodo1', (req, res) => {
    let todo = {title: 'Goto the beach', description: 'Explore and pickup sea shells', imageURL: 'https://images.unsplash.com/photo-1614357235247-99fabbee67f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'};
    let sql = 'INSERT INTO todos SET ?'
    db.query(sql, todo, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('todoApp inserted 1 Successfully!');

    })
})

app.get('/inserttodo2', (req, res) => {
    let todo = {title: 'Clean the dishes', description: 'The dishes need done', imageURL: 'https://images.unsplash.com/photo-1514852451047-f8e1d1cd9b64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2012&q=80'};
    let sql = 'INSERT INTO todos SET ?'
    db.query(sql, todo, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('todoApp inserted 2 Successfully!');

    })
})

app.get('/gettodos', (req, res) => {
    let sql = 'SELECT * FROM todos';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send(result);

    })
})

app.get('/gettodos/:id', (req, res) => {
    let sql = `SELECT * FROM todos WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('SELECT Command With WHERE Clause Executed Successfully');

    })
})

app.get('/updatetodostitle/:id', (req, res) => {
    const newTitle = 'Changed!';
    let sql = `UPDATE todos SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('Update Command Executed Successfully');

    })
})

app.get('/updatetodosdescription/:id', (req, res) => {
    const newdescription = 'Changed!';
    let sql = `UPDATE todos SET description = '${newdescription}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('Update Command Executed Successfully');

    })
})

app.get('/deletetodo/:id', (req, res) => {
    let sql = `DELETE FROM todos WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }

        console.log(result);
        res.send('Delete Command Executed Successfully');

    })
})

// Error Handling
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message});
});

// Listen to port 9000
app.listen(9000, () => {
    console.log('Server listening to port 9000');
});
