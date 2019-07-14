const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const convert = require('./utils/convert')

const viewsPath = path.join(__dirname, '../templates/views')
//const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
//hbs.registerPartial(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index')
})

app.get('/convert', (req, res) => {
    if (!req.query.date){
        return res.send({
            error: 'You have to enter a date'
        })
    }


    convert(req.query.date, (err, value) => {
        if (err) {
            return res.send({
                err: err
            })
        }

        return res.send({
            value
        })
    })
    
})

app.listen(port, () => {
    console.log('App is up on port ' + port)
})