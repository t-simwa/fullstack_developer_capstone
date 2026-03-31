const mongoose = require('mongoose');
const origConnect = mongoose.connect.bind(mongoose);
mongoose.connect = (url, opts) => origConnect('mongodb://172.17.0.2:27017/', opts);
require('./app.js');
