const express = require ('express');
const app = express();

const Musician = require ('./db/musicians');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', async (req, res) => {

    const musicians = await Musician.find();
    res.render('index', {musicians});

})

app.post('/create', async (req,res)=>{

    const newMusician= new Musician ({
        Name:req.body.Name, 
        Instrument: req.body.Instrument
    });
await newMusician.save();    
res.redirect('/');


})
app.use(express.static(__dirname + '/public'));

module.exports= app;
