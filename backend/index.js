const express = require("express");
const redis = require("redis");
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

 
app.use(
  session({
    store: new RedisStore({ client }),
    secret: 'R00t@123',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.json())

const login_user = async (req, res, next) => {

    //req.session.
    console.log(req.body);
    console.log(req.params);

    res.json({requestBody: req.body})
}

app.post("/login", login_user);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});