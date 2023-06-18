require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my website</h1>');
})

app.listen(PORT, (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

module.exports = app;
