var axios = require('axios');
var DOMParser = require('xmldom').DOMParser;

module.exports = function medium(profile) {
  const medium = `https://medium.com/feed/@${profile}`;
  return new Promise((resolve, reject) => {
    return axios.get(medium).then((res) => {
      const data = res.data;
      const doc = new DOMParser().parseFromString(data);
      let items = doc.getElementsByTagName('item');

      for(let i = 0; i < items.length; i++) {
        let item = items[i];
        for(let j = 0; j < item.childNodes.length; j++) {
            console.log(item.childNodes[j].nodeValue);
        }
        // console.log(item.childNodes[0].data);
      }
      resolve(items);
    })
  });
}
