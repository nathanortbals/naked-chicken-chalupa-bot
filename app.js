require('dotenv').config();

const chalupaStatus = require('./chalupaStatus');
const scheduler = require('./scheduler');
const { tweet } = require('./twitter');

console.log('🌮 Starting the Chalupa Bot 🌮');

scheduler(() => tweet(chalupaStatus()));
