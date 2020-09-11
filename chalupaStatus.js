const date = require('date-and-time');

const chalupaAvailable = process.env.CHALUPA_AVAILABLE === 'true';

const lastChalupaDate = date.parse(process.env.LAST_CHALUPA_DATE, 'YYYY-MM-DD');
if (isNaN(lastChalupaDate)) {
  console.log('Error: Cannot parse LAST_CHALUPA_DATE environment variable')
}

const daysSinceChalupa = () => {
  const today = new Date();
  const days = date.subtract(today, lastChalupaDate).toDays();
  return Math.trunc(days);
};

module.exports = () => {
  if(chalupaAvailable) {
    return 'The #NakedChickenChalupa is currently on the menu. We did it boys! 😋😋😋';
  }

  return `It has been ${daysSinceChalupa()} days since the #NakedChickenChalupa ` +
    `was on the Taco Bell menu. Bring back that crispy boy! ✊✊✊`
};
