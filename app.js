const express = require('express');
const pug = require('pug');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
    'purple'
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render("card", {prompt: "Who is buried in Grants tomb", colors});
});

app.listen(3000, () => {
    console.log('The application is running on port 3000');
});