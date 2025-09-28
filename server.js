const express = require('express')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'signUp.html'));
});

app.listen(3000, () => {
    console.log("Server is running")
})