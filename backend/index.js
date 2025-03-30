require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const connectDB = require('./api/database/db');
const cors = require('cors');
const getProducts = require('./api/routeHandlers/getProducts');
const signup = require('./api/routeHandlers/signup');
const signin = require('./api/routeHandlers/signin');
const createOrder = require('./api/routeHandlers/createOrder');
const verifyOrder = require('./api/routeHandlers/verifyOrder');
const autoMail = require('./api/routeHandlers/autoMailing');


app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ['https://smartcart-eshop.vercel.app', 'http://localhost:5500'], credentials: true }));
connectDB()

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/products/:id', (req, res) => getProducts(req, res));

app.post('/signup', (req, res) => signup(req, res));

app.post('/signin', (req, res) => signin(req, res));

app.post('/createOrder', (req, res) => createOrder(req, res));

app.post('/verifyOrder', (req, res) => verifyOrder(req, res));

app.post('/autoMail', (req, res) => autoMail(req, res));

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT)
})

module.exports =  app;



