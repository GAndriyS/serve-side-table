const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors')
const app = express();
const { data } = require('./data.js');

const port = 5000;
app.set('port', process.env.port || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.post('/api/getRows', (req, res) => {
  const { startRow, endRow } = req.body;
  res.json({
    rows: data.slice(startRow, endRow),
    lastRow: endRow >= data.length ? data.length : -1
  })
});

