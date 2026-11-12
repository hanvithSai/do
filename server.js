const express = require('express')
const app= express()

app.use(express.json())

let students=[
    {'id':1, 'name':'abc'},
    {'id':2, 'name': 'def'}
]

app.get('/students', (req,res)=>{
    res.json(students)
})

app.get('/students/:id', (req,res)=>{
    let index=students.findIndex(Number(req.params.id));
    res.json(students[index])
})

app.post('/students', (req,res)=>{
    let student={'id':students.length + 1, ...req.body}
    students.push(student);
})

app.put('/students/:id', (req,res)=>{
    let index = students.findIndex(req.params.id);
    students[index]=req.body
})

app.delete('/students/;id', (req,res)=>{
    let index=students.findIndex(Number(req.parms.id));
    students.splice(index, 1)
})

app.listen(3000, ()=>{
    console.log("Server listening on Port 3000");
})

module.exports = app;