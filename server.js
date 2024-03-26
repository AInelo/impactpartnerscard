const express = require('express');
require('dotenv').config();

const path = require("path");

let initial_path = path.join(__dirname, 'frontend');

const app = express();

app.use(express.static(initial_path));

const port = 4000;

app.listen(port, () => {
    console.log(`The server is running on: http://localhost:${port}`)
})