const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

module.exports.checkID = (req, res, next, val) => {
   console.log(`Tour Id is: ${val}`);
   if (+req.params.id > tours.length) {
      return res.status(404).json({
         status: 'fail',
         message: 'Invalid ID',
      });
   }
   next();
};

module.exports.checkBody = (req, res, next) => {
   console.log(req.body.name);
   if (!req.body.name || !req.body.price) {
      return res.status(404).json({
         status: 'fail',
         message: 'Missing name or price',
      });
   }
   next();
};

module.exports.getAllTours = (req, res) => {
   console.log(req.requestTime);
   res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
         tours,
      },
   });
};

module.exports.getTour = (req, res) => {
   const id = +req.params.id;
   const tour = tours.find((item) => item.id === id);

   res.status(200).json({
      status: 'success',
      data: {
         tour,
      },
   });
};

module.exports.createTour = (req, res) => {
   const newId = tours[tours.length - 1].id + 1;
   const newTour = Object.assign({ id: newId }, req.body);

   tours.push(newTour);

   fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
      res.status(201).json({
         status: 'success',
         data: {
            tour: newTour,
         },
      });
   });
};

module.exports.updateTour = (req, res) => {
   res.status(200).json({
      status: 'success',
      data: {
         tour: '<Updated tour here...>',
      },
   });
};

module.exports.deleteTour = (req, res) => {
   res.status(204).json({
      status: 'success',
      data: null,
   });
};
