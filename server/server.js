const express = require('express');
const app = express();
const path = require('path');
const { default: App } = require('../src/App');
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.get('/', (req, res) => res.send('This is server')); //TEST


app.use(express.static(path.join(__dirname, '../dist'))); 

app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, 'index.html')));

App.get()



app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

module.exports = app;