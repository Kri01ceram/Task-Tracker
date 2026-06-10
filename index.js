const express = require("express");
const users = [{
    id: 1,
    username: "krishna",
    password: "123123"

} , {
    id: 2,
    username: "Aman",
    password: "123123"
}]
const organisations = [{
    id: 1,
    title: "devx",
    description: "Learnings",
    admin: 1,
    member: [2]

} , {
    id:2,
    title: "ahlele",
    description: "doing",
    admin: 1,
    member: []
}]
const boards = [{
    id: 1,
    title: "devs website (frontend)",
    organizationId: 1
}]
const isssues = [{
    id: 1,
    title: "add dark mode",
    boardId: 1,
    state: "IN_PROGRESS"
},{
    id: 2,
    title: "allow admins to create more courses",
    boardId: 1,
    state: "DONE"
}]

const app = express()

app.post("/organization")



app.listen(3005);
