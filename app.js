const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please Provide address')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error ', error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                console.log('Error ', error)
            }
            console.log('Location: ', location)
            console.log(forecastData)
        })
    })
}
