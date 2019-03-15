const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/3e4a19815f25fea396aaf75833d6c86b/${lat},${long}?units=si&lang=es`

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,`${body.daily.data[0].summary} Actualmente la temperatura es de ${body.currently.temperature} grados.La temperatura mas alta es de ${body.daily.data[0].temperatureHigh} y la mas baja es ${body.daily.data[0].temperatureLow}. Existe una posibilidad del  ${body.currently.precipProbability}% de lluvia`)
        }    
    })
}

module.exports = forecast

