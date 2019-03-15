const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/3e4a19815f25fea396aaf75833d6c86b/${lat},${long}?units=si&lang=es`

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. there is a ${body.currently.precipProbability}% chance of rain`)
        }    
    })
}

module.exports = forecast

