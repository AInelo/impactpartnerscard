/* CONSTANT OF SERVEUR*/
const express = require('express');
require('dotenv').config();

const path = require("path");

let initial_path = path.join(__dirname, 'frontend');

const app = express();






/* ROUTES USING */
app.use(express.static(initial_path));

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`The server is running on: http://localhost:${port}`)
})