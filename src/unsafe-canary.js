'use strict';
// Deliberately unsafe sample for the code-scanning rule canary. Never deployed; the PR is closed unmerged.
const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/run', (req, res) => {
  exec(req.query.cmd); // intentional js/command-line-injection (canary only)
  res.send('ok');
});
module.exports = app;
