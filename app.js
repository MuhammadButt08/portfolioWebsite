// importing of modules

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const { urlencoded } = require('body-parser');
const exp = require('constants');
const { dirname } = require('path');
const { connect } = require('http2');

// connection for mongooes in order to save data from data base 


const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/portfolioform'); // portfolioform is the name of data base so when you'll wish to see the data base in powershell then type use portfolioform 

    // then type show collections + enter and you'll see the collections name same as that of model and just appear in plural form 

    // then type db.contacts.find() + enter and you'll see the all values 

    // and before this process start mongod which is host process and then start mongo and type commands in mongo shell 
}

// schema formation 

const contactSchema = new mongoose.Schema({
    fullName: String,
    eMail: String,
    pass: String,
    cellNo: String,
    messageForMe: String
});

// compiling into model 

const contact = mongoose.model('contact', contactSchema);

// static files serving 

app.use('/static', express.static('static'));
app.use(urlencoded());

// seting template engine 
app.set('view engine', 'pug');

// seting of data directory
app.set('views', path.join(__dirname, 'views'));
app.set('images', path.join(__dirname, 'images'))

// ROUTING
app.get('/', (req, res) => {
    res.status(200).render('index.pug');
});


app.post('/contact', (req, res) => {
    // ye contact model ka name ha 
    // aur data save karain ga to wo hamain ek promise return krta hai aur us promise ko handel krna k liya ap ko .then wala method use krna pary ga
    let contactUs = new contact(req.body);
    contactUs.save().then(() => {
        res.status(200).send("form has been submitted successfull");
    }).catch(() => {
        res.status(404).send('not submitted')
    });
});

app.get('/other', (req, res) => {
    res.status(404).render("<h1 style='text-align:center;font-size:50px;color:blue;width:500px;height:89px;margin:auto auto'>" + "Page 404 NOT FOUND" + "</h1>");
});



app.listen(3000, '127.0.0.1', () => {
    console.log("server is listening on 3000 port and the local host of 127.0.0.1");
})



// always place your images folder in the static folder