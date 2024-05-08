const express = require('express');
const app = express();
const port = 3001;
const path = require('path');

const dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});