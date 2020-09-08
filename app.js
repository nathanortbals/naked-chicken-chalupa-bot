require('dotenv').config();

const chalupaStatus = require('./chalupaStatus');
const logger = require('./logger');
const scheduler = require('./scheduler');
const { tweet } = require('./twitter');

logger('🌮 Starting the Chalupa Bot 🌮');

scheduler(() => tweet(chalupaStatus()));
