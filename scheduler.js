const { job } = require('cron');

module.exports = (jobFunc) => job(process.env.TWEET_SCHEDULE_CRON, jobFunc, null, false, 'America/Chicago').start();