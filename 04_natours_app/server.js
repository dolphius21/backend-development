const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const connString = process.env.CONN_STRING;

mongoose.connect(connString, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connection successful!'));

const port = process.env.PORT;
app.listen(port, () => console.log(`App running on port ${port}...`));
