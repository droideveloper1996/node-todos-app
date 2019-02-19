const express=require('express');
const bodyParser=require('body-parser');

const {moongoose}=require('../server/db/mongoose');
const {Todos}=require('../server/models/todos');
const {User}=require('../server/models/user');


var port=3300;

var app=express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    var todo=new Todos({
            text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos',(req,res)=>{
    Todos.find().then((docs)=>{
            res.send({docs});
    },(err)=>{

    });
});
app.listen(port,()=>{
    console.log(`Server Started on port ${port}`);
});