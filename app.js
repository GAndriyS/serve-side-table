const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const cors = require('cors')
const app = express();

let { data } = require('./data.js');

const port = 5000;
app.set('port', process.env.port || port);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/api/rows', (req, res) => {
  const empId = parseInt(req.query.empId);
  const employee = data.filter(
    emp => emp.empID === empId
  )[0];
  res.json(employee)
});

app.post('/api/rows', (req, res) => {
  const { startRow, endRow } = req.body;
  res.json({
    rows: data.slice(startRow, endRow),
    lastRow: endRow >= data.length ? data.length : -1
  })
});

app.delete('/api/rows', (req, res) => {
  const empId = parseInt(req.query.empId);
  data = data.filter(
    emp => emp.empID !== empId
  );
  res.status(200).end()
});

