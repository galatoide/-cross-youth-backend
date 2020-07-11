
const express = require('express');
const cloudinaryRoutes = express.Router();
const uploadCloud = require('../configs/cloudinary.js');
const User = require('../models/user-model.js');

cloudinaryRoutes.get('/images', (req, res, next) => {
  User.find()
    .then(imagesFromDB => res.status(200).json(imagesFromDB))
    .catch(err => next(err));
});

cloudinaryRoutes.post('/images/create', (req, res, next) => {
  
  User.create(req.body)
    .then(newImage => {
      res.status(200).json(newImage);
    })
    .catch(err => next(err));
});

 
cloudinaryRoutes.post('/upload', uploadCloud.single("profileImageUrl"), (req, res, next) => {
  res.json({ profileImageUrl: req.file.secure_url });
})

// cloudinaryRoutes.post("/user/edit", uploadCloud.single('profileImageUrl'), (req, res, next) => {
//   const profileImageUrl = req.file.url;
//   const profileImageName = req.file.originalname;

//   console.log(User)
//   const userID = {
//     _id: loggedInUser._id
//   };
// })

module.exports = cloudinaryRoutes;