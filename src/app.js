'use strict';
// Benign sample so the JavaScript analysis has source to scan.
function greet(name) {
  return `hello, ${String(name).slice(0, 40)}`;
}
module.exports = { greet };
