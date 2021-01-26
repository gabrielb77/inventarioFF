'use strict';

// Constants
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const { exec } = require('child_process');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Inventario\n');
});

//app.get('/inv/:id', function (req, res, next) {
//  res.send("User Info " + req.params.id + '\n');
//});

app.get('/inv/atos', function (req, res) {
  exec('/usr/bin/ansible-inventory -i ./inventario.txt --list', (error, stdout, stderr) => {
    res.send(stdout);
  });
});

app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);
