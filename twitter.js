const Twitter = require('twitter');
const logger = require('./logger');

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.tweet = async (status) => {
    try {
      await twitterClient.post('statuses/update', {status: status});
      logger(`Successfully tweeted: ${status}`);
      return;
    }
    catch(error) {
      logger(`Error sending tweet: ${JSON.stringify(error)}`);
      return;
    }
  };
