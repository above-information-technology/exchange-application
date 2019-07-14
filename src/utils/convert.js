const request = require('request')

const convert = (date, callback) => {
    request({url: 'https://api.ratesapi.io/api/' + date + '?base=EUR', json: true}, (err, { body }) => {
        if (err){
            console.log('There is an error')
            callback('You have an error', undefined)
        } else {
            console.log(body.rates.RON)
            callback(undefined, body.rates.RON)
        }
    })
}

module.exports = convert

// convert('2019-07-08', (err, value) => {
//     if (!err)
//         console.log(value)
    
// })