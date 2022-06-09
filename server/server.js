const express = require('express');
const app = express();
const path = require('path');
const authController = require('./controllers/authController');
// const { default: App } = require('../client/App.jsx');
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.get('/', (req, res) => res.send('This is server')); //TEST


app.use(express.static(path.join(__dirname, '../dist'))); 

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')));

app.post()


app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

module.exports = app;