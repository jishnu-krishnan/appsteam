const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mysql = require('mysql')
const path = require('path')

dotenv.config({ path: './config/config.env' });

const app = express();

const route = require('./routes/route');

app.use(cors());

// Set Static Floder
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())

app.use('/api',route)
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log(`server is running on port:${port}`);
});