const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');

  next();
});

app.get('/saludo', (req, res) => {
  res.json('hola mundo');
})

app.listen(3000, () => console.log('Ready host port 3000'))
