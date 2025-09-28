const express = require('express')
const app = express()

const users = []

app.get('/signUp.html', (req, res) => {
    res.json(users)
})

app.listen(3000)