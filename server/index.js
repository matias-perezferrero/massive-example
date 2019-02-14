require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const ctrl = require('./controller')

const app = express();

app.use(bodyParser.json());

const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
    app.listen(8080, () => {
        console.log('8080 ducks marching on Rome.')
    })
})

app.get('/api/all', ctrl.getAll)

app.get('/api/account/:id', ctrl.getOneAccount)

app.post('/api/account', ctrl.newAccount)

app.put('/api/account/:id', ctrl.updateAccount)

app.delete('/api/account/:id', ctrl.deleteAccount)





