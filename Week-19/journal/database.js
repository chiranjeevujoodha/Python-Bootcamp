const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ashwinujoodha:5Zqy0NWnma5gevOK@bootcamp.xnczjd1.mongodb.net/?retryWrites=true&w=majority&appName=bootcamp";


// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'bootcamp'
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
    
  module.exports = mongoose