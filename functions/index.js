const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51J0fKoBrTmGzVxTmoxK9zI2nVz0zDLqRbtvRuyaoAJrQcFT8RvP8U0O9tHgEXd2CpryTXzOUIdewJQ5p5jbi7ynj00KjEvt4gv');

// app config
const app = express();

// middlewares
app.use(express.json());
app.use(cors({origin: true}));

// api routes
app.get('/', (req, res) => {
  res.status(200).send('hello mathews its the express server');
});

app.post('/payment/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment request recieved >>>ttoal ${total}');

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    id: paymentIntent.created,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
