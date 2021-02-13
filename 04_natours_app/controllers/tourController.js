const Tour = require('../models/tourModel');

module.exports.getAllTours = (req, res) => {
   console.log(req.requestTime);
   res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      // results: tours.length,
      // data: {
      //    tours,
      // },
   });
};

module.exports.getTour = (req, res) => {
   const id = +req.params.id;
   // const tour = tours.find((item) => item.id === id);

   // res.status(200).json({
   //    status: 'success',
   //    data: {
   //       tour,
   //    },
   // });
};

module.exports.createTour = async (req, res) => {
   try {
      const newTour = await Tour.create(req.body);

      res.status(201).json({
         status: 'success',
         data: {
            tour: newTour,
         },
      });
   } catch (err) {
      res.status(400).json({
         status: 'fail',
         message: 'Invalid data sent!',
      });
   }
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
