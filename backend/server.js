const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'task_manager',
    password: '123456789',
    port: 5432,
})

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', async (req,res)=>{
    try{
        const result = await pool.query('select * from tasks');
        res.json(result.rows);
    }catch (err){
        res.status(500).send(err.message)
    }
});

app.post('/tasks',async(req,res)=>{
    const{title, category,due_date}=req.body;
    try{
        const result = await pool.query(
            'insert into tasks (title,category,due_date) values ($1,$2,$3) returning *',
            [title, category, due_date]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        res.status(500).send(err.message);
    }
});

app.put('/tasks/:id',async(req,res)=>{
    const {id}=req.params;
    try{
        const result = await pool.query(
            'update tasks set completed = not completed where id=$1 returning *',[id]
        );
        res.json(result.rows[0]);
    }catch(err){
        res.status(500).send(err.message);
    }
});

app.delete('/tasks/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        pool.query('delete from tasks where id=$1',[id]);
        res.status(204).send();
    }catch(err){
        res.status(500).send(err.message);
    }
});

app.get('/',(req,res)=>{
    res.send('welcome to the Express.js blabla...')
})

app.listen(3000 ,()=> {
    console.log('Server running on http://localhost:3000');
});