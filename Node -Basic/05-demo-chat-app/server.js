
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // setting a varible app to the instance of express

//starting the express server  and listing for the request  in some port
app.use(express.static(__dirname));

app.use(bodyParser.json());

const messages = [
    {
        name: 'Sachin',
        message: 'Hi',
    },
    {
        name: 'Sameer',
        message: 'Hello',
    },
];

app.get('/messages', (req, res) => {
    //first parameter messages as we appling list of messages
    res.send(messages); //second parameter is callback funciton to handle the request and respond to the request
});

app.post('/messages', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

const server = app.listen(3000, () => {
    console.log('Server is listening on port', server.address().port);
});
