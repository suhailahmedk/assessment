const models = require("../models");
const role = require("../models/role");
// const crypto = require("crypto");
// const sha256Hasher = crypto.createHmac("sha256", "123-h!-th!s-i!s-s$cr$t-k$y-321");

function saveUser(req, res) {
  const user = {
    user_name: req.body.user_name,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,  //sha256Hasher.update(req.body.password).digest("hex"),
    phoneNumber: req.body.phoneNumber,
    is_deleted: 0,
    role_id: req.body.role_id,
  };
  models.user
    .create(user)
    .then((result) => {
      res.status(201).json({
        message: "Post successfully",
        user: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
        error: error,
      });
    });
}

function showAllUsers(req, res) {
  models.user
    .findAll({
      include: "role",
      where: {
        is_deleted: 0,
      },
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
}

function showAllUsersByRole(req, res) {
  models.user
    .findAll({
      include: "role",
      where: {
        is_deleted: 0,
        role_id: req.body.role_id,
      },
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
      });
    });
}

function showUserByUserName(req, res) {
  models.user
    .findOne({
      where: {
        user_name: req.body.user_name,
        is_deleted: 0,
      },
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
      });
    });
}

function getUserById(req, res) {
  models.user
  .findOne({
    include: [
      {
        model: models.role,
        include: [
          {
            model: models.permission,
            where: {
              is_deleted: 0,
            },
            required: false,
          },
        ],
        required: false,
      },
    ],
    where: {
      id: req.body.id,
      is_deleted: 0,
    },
  }).then((result) => {
    res.status(200).json(result);
  })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
      });
    });
}

function updateUser(req, res) {
  models.user
    .update(
      {
        user_name: req.body.user_name,
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        role_id: req.body.role_id,
      },
      {
        where: {
          id: req.body.id,
          user_name: req.body.user_name,
          is_deleted: 0,
        },
      }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
      });
    });
}

function deleteUser(req, res) {
  models.user
    .update(
      {
        is_deleted: 1,
      },
      {
        where: {
          user_name: req.body.user_name,
        },
      }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "error occurred",
      });
    });
}

module.exports = {
  saveUser: saveUser,
  showAllUsers: showAllUsers,
  showUserByUserName: showUserByUserName,
  updateUser: updateUser,
  deleteUser: deleteUser,
  showAllUsersByRole,
  getUserById,
};
