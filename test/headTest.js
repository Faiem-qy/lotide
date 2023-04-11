

const assertEqual = require('../0.assertEqual');
const head = require('../head');


assertEqual(head([5, 6, 7]), 5);

assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = assertEqual;