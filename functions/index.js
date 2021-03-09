const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HxB4FJ7mDdD68sMEU2fr0R2ZI5hGfODvbW22n5fK3K7Lh6jrSEAWoBkb2Wp9YBHl9wlFcateaC2AnKCu8f5rtz200jP7L8DAb"
);

//API

//-App config
const app = express();

//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json()); //to send data in json format

//-API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //we can use request.params also
  console.log("Payment Request Received Yes!!!for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });
  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//-Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-1e098/us-central1/api
