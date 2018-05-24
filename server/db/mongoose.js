const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.eng.MONGODB_URI);

module.exports = { mongoose };
