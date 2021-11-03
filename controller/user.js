const mongoose = require("mongoose");
const User = require("../model/user");

exports.userRegister = (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    userName: req.body.userName,
    password: req.body.password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        success: 1,
        message: "User created successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: 0,
        message: "User creation failed! (or) User name occupied ",
      });
    });
};

exports.getUser = (req, res, next) => {
  User.findOne({ userName: req.params.userName })
    .then((result) => {
      if (result === null) {
        res.status(404).json({
          success: 0,
          message: "User not found!",
        });
      }
      console.log(result);
      res.status(200).json({
        success: 1,
        message: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: 0,
        message: "Failed to get the document.",
      });
    });
};

exports.update = (req, res, next) => {
  User.updateMany(
    { userName: req.params.userName },
    {
      name: req.body.name,
      userName: req.body.userName,
    },
    function (err, user) {
      if (err) throw err;
      res.status(200).json({
        success: 1,
        message: "User updated successfully!",
      });
    }
  );
};

exports.delete = (req, res, next) => {
  User.deleteOne({ userName: req.params.userName })
    .then((result) => {
      res.status(200).json({
        success: 1,
        message: "User deleted successfully!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: 0,
        message: "User deleted failed!",
      });
    });
};
