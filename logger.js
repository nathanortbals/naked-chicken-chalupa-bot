const date = require('date-and-time');

const currentTimestamp = () => date.format(new Date(), 'YYYY/MM/DD hh:mm A [GMT]Z');

module.exports = (message) => console.log(`${currentTimestamp()} ${message}`);
