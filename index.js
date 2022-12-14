const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/api/env', async (req, res) => {

    const jsonText = JSON.stringify(process.env)
    const connStr = process.env.CUSTOMCONNSTR_connStr || 'connection string'

    res.send(connStr)
})

app.get('/api/hello', async (req, res) => {

    res.send('Hello World')
})

app.get('/api/merhaba', (req, res) => {

    res.send('Merhaba Dünya')
})

app.post('/api/name', (req, res) => {

    const body = _.pick(req.body, ['firstName','lastName'])
    console.log(body)
    res.send('Hello '+body.firstName+' '+body.lastName)
})

app.listen(8080, () => {
    console.log('app server is running')
})