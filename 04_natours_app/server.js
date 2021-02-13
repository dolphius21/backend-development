const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const DB = process.env.CONN_STRING;

mongoose
   .connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
   })
   .then(() => console.log('DB connection successful'));

const port = process.env.PORT;
app.listen(port, () => console.log(`App running on port ${port}...`));
