const express = require('express')
const app= express()

app.use(express.json())

let students=[
    {'id':1, 'name':'abc'},
    {'id':2, 'name': 'def'}
]

test("GET", async(req,res)=>{
    let res= await app.get('/students')
    expect(res.statusCode).toMatch(200);
})

test("POST", async(req,res)=>{
    let res= await app.post('/students').body({'id':3, 'name':'ghi'})
    expect(res.statusCode).toMatch(201);
})

app.listen(3000, ()=>{
    console.log("Server listening on Port 3000");
})

module.exports = app;