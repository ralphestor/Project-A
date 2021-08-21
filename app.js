const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO FROM PROJECT A');
});

const port = 8000;
app.listen(port, () => {
    console.log(`Listening to ${port}`);
});