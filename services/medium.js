var axios = require('axios');
var parser = require('parse-rss')

module.exports = function medium(profile) {
  const medium = `https://medium.com/feed/@${profile}`;
  return new Promise((resolve, reject) => {
    parser(medium, (err, rss) => {
      let resolvedData = rss.map((item) => {
        return {
          title: item.title,
          pubDate: item.pubDate,
          link: item.link
        }
      });
      if(err) {
        reject(err);
      } else {
        resolve(resolvedData);
      }
    })
  });
}
