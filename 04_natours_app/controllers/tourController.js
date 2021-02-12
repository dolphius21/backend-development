const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

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
   const tour = tours.find((item) => item.id === +req.params.id);
   if (!tour) {
      return res.status(404).json({
         status: 'fail',
         message: 'Invalid ID',
      });
   }

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

   fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
      res.status(201).json({
         status: 'success',
         data: {
            tour: newTour,
         },
      });
   });
};

module.exports.updateTour = (req, res) => {
   if (+req.params.id > tours.length) {
      return res.status(404).json({
         status: 'fail',
         message: 'Invalid ID',
      });
   }

   res.status(200).json({
      status: 'success',
      data: {
         tour: '<Updated tour here...>',
      },
   });
};

module.exports.deleteTour = (req, res) => {
   if (+req.params.id > tours.length) {
      return res.status(404).json({
         status: 'fail',
         message: 'Invalid ID',
      });
   }

   res.status(204).json({
      status: 'success',
      data: null,
   });
};
