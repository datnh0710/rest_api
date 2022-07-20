if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 3000;



mongoose.connect(mongoString);
const database = mongoose.connection

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})