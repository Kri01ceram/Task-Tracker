const express = require("express");

let USER_ID = 1
let ORGANIZATION_ID = 1
let BOARD_ID = 1
let ISSUE_ID = 1

const USERS = [{
    id: 1,
    username: "krishna",
    password: "123123"

}]
const ORGANIZATIONS = [{
    id: 1,
    title: "devx",
    description: "Learnings",
    admin: 1,
    member: [2]

}]
const BOARDS = [{
    id: 1,
    title: "devs website (frontend)",
    organizationId: 1
}]
const ISSUES = [{
    id: 1,
    title: "add dark mode",
    boardId: 1,
    state: "IN_PROGRESS"
}]

const app = express()

app.post("/signup",(req,req)=>{
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u => u.username === username);
    if(userExists){
        res.status(411).json({
            message: "User witht his username already exists"
        })
        return;
    }
    USERS.PUSH({
        username,
        password,
        id: USER_ID++
    })
})

app.post("/signin" ,(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = USERS.find(u=>u.username === username && u.password === password) ;
    if(!userExists){
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
    
})



app.listen(3005);
