const models = require("../models");

function getAllStatics(req, res) {
  models.statics.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
}

function getAllYearlyStatics(req, res) {
    models.yearlystatics.findAll()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
  }



module.exports = {
    getAllStatics,
    getAllYearlyStatics
  
};
