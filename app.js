const express = require('express');
const figlet = require('figlet')
const app = express();
require('dotenv').config();

const port = process.env.APP_PORT;

app.get('/', (req, res) =>{
    res.render('index')
})

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
    figlet('Notchtify', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });
    console.log(`-> Notchtify listening on port ${port}, have fun :) URL: http://localhost:${port}. Made by Don_oso005`)
})
