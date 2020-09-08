const date = require('date-and-time');
const logger = require('./logger');

const chalupaAvailable = process.env.CHALUPA_AVAILABLE === 'true';

const lastChalupaDate = date.parse(process.env.LAST_CHALUPA_DATE, 'YYYY-MM-DD');
if (isNaN(lastChalupaDate)) {
  logger('Error: Cannot parse LAST_CHALUPA_DATE environment variable')
}

const daysSinceChalupa = () => {
  const today = new Date();
  const days = date.subtract(today, lastChalupaDate).toDays();
  return Math.trunc(days);
};

module.exports = () => {
  if(chalupaAvailable) {
    return 'The Naked Chicken Chalupa is currently on the menu. We did it boys! 😋😋😋';
  }

  return `It has been ${daysSinceChalupa()} days since the Naked Chicken Chalupa ` +
    `was on the Taco Bell menu. Bring back that crispy boy! ✊✊✊`
};
