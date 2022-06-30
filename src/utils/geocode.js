const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text='+ encodeURIComponent(address) +'&apiKey=394fd79a39f948eab5c21886e20fcd82&limit=1'
  
    request({ url: url, json: true }, (error, { body }) => {
      if (error) {
        callback('Unable to connect to location service!', undefined)
      } else if (body.features.length === 0) {
        callback('Unable to find location. Try another search.', undefined)
      } else {
        callback(undefined, {
          latitude: body.features[0].properties.lat,
          longitude: body.features[0].properties.lon,
          location: body.features[0].properties.formatted
        })
      }
    })
  }

  module.exports = geocode