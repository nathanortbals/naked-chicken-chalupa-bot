const Twitter = require('twitter');

const twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports.tweet = async (status) => {
    try {
      await twitterClient.post('statuses/update', {status: status});
      console.log(`Successfully tweeted: ${status}`);
      return;
    }
    catch(error) {
      console.log(`Error sending tweet: ${JSON.stringify(error)}`);
      return;
    }
  };
