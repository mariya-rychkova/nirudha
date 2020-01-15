const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoURI)
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.log('Unable to connect to Database');
    console.error(error);
  });

/*
CORS-errors prevention headers
*/

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.post('/api/mindmaps', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Mindmap created successfully'
  });
});
app.use('/api/mindmaps', (req, res, next) => {
  const mindMap = [
    {
      id: 'fdfdfsd',
      name: 'My first mind map',
      description: 'Hot to build full stack projects',
      image: 'https://pin.it/nr7t5odrkp6zdo'
    },
    {
      id: 'ytfdsf',
      name: 'My second mind map',
      description: 'Prose and poems',
      image: 'https://pin.it/yd6gatjh2qwmj3'
    }
  ];
  res.status(200).json(mindMap);
});

module.exports = app;
