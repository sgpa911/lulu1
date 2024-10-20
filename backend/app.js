const express = require("express");
const app = new express();
const cors = require('cors');
const PORT = 4000;
require('./connection');

app.use(express.json());
app.use(cors());
app.listen(4000, () => {
console.log('The server is running on Port 4000');
});
