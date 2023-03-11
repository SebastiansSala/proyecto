const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sebastiannss1913:Cachetes123@cluster0.uhuzlpx.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa'))
.catch((err: Error) => console.log(err));







