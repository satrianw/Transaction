const express = require('express');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/usersRoute');
const customerRoute = require('./routes/customerRoute');
const productRoute = require('./routes/productRoute');
const productPurchaseRoute = require('./routes/productPurchaseRoute');
const reportRoute = require('./routes/reportRoute');
const transactionRoute = require('./routes/transactionRoute');

// create express app
const app = express()

// setup the server port
const port = process.env.PORT || 3001;

//parser request data content type
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// listen to the port
app.listen(port, () => {
    console.log(`Server app listening at http://localhost:${port}`)
});

// define root route
app.get('/', function (req, res) {
    res.json(`Hello, World!`)
});

// create chatapp routes
app.use('/auth', usersRoute)
app.use('/customer', customerRoute)
app.use('/product', productRoute)
app.use('/purchase', productPurchaseRoute)
app.use('/report', reportRoute)
app.use('/transaction', transactionRoute)

