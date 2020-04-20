const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Anacct:ana@cluster0-mmo49.mongodb.net/test?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(()=> console.log('DB is connected'))
    .catch(e => console.log(e));