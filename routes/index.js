const routes = require('express').Router();
const express = require('express');

// const emb = require('./emb');
// const five = require('./five');
// const prepro = require('./prepro');
const login =require('./login');


// routes.use('/emb',emb);
// routes.use('/five',five);
// routes.use('/prepro',prepro);
routes.use('/login',login);

routes.use(express.json());
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;