const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

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

// Read JSON file
const tours = JSON.parse(
   fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// Import data to database
const importData = async () => {
   try {
      await Tour.create(tours);
      console.log('Data successfully loaded!');
   } catch (err) {
      console.log(err);
   }
   process.exit();
};

// Delete all existing data from database
const deleteData = async () => {
   try {
      await Tour.deleteMany();
      console.log('Data successfully deleted!');
   } catch (err) {
      console.log(err);
   }
   process.exit();
};

if (process.argv[2] === '--import') {
   importData();
} else if (process.argv[2] === '--delete') {
   deleteData();
}
