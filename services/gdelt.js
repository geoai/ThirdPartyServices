var axios = require('axios');

module.exports = function gdelt(query) {
  const gdeltUri = `http://api.gdeltproject.org/api/v1/gkg_geojson?QUERY=${query}`;
  return new Promise((resolve, reject) => {
    return axios.get(gdeltUri).then((res) => {
      const data = res.data;
      const responseData = data.features.map((feature) => {
        return feature.geometry.coordinates;
      });
      resolve(responseData);
    })
  });
}
