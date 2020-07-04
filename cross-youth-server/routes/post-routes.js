const express = require('express');
const postRoutes = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/groups-model');
const Post = require('../models/posts-model');

// GET route => to retrieve a specific route
postRoutes.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(task => {
      res.json(task)
    })
});


// POST route => to create a new task
postRoutes.post('/posts', (req, res) => {
  Post.create({
    title: req.body.title,
    description: req.body.description,
    group: req.body.group
  })
  .then(response => {
    Group.findByIdAndUpdate(req.body.group, {
      $push: { posts: response._id }
    })
    .then((response) => {
      res.json(response);
    })
  })
});

module.exports = postRoutes