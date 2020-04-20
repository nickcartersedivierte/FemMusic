const {Schema, model} = require('mongoose');

const MusicianSchema= new Schema({

    Name: {
        type: String,
        required: true
    },
    
    Instrument: {
        type: String,
        required: true

    }

})


module.exports= model('musician', MusicianSchema);