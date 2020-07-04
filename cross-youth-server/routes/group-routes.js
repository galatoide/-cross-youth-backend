const express = require('express');
const groupRoutes = express.Router();
const mongoose = require('mongoose');
const Group = require('../models/groups-model');


//GET route => to get all the groups
groupRoutes.get('/groups', (req, res) => {
  // Gets data from mongoDB
  Group.find()
    .then(allGroups => {
      // will do something with the result
      res.json(allGroups);
    })
    .catch(err => {
      // will do something else
      res.json(err);
    })
});


//POST route => to create a new group
groupRoutes.post('/groups', (req, res) => {
  const { title, initials, description, activities } = req.body;
  Group.create({
    title,
    initials,
    description,
    activities,
    posts: []
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});


//GET route => get a specific group using the id
groupRoutes.get('/groups/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: 'id is not valid'});
    return;
  }
  
  Group.findById(req.params.id)
    // getting all the posts for this group
    .populate('posts')
    .then(group => {
      res.json(group);
    })
    .catch(error => {
      res.json(error);
    })
});

// PUT route => to update a specific group
groupRoutes.put('/groups/:id', (req, res) => {
  Group.findByIdAndUpdate(req.params.id, req.body)
      .then((response) => {
        console.log('response', response);
        res.json({ message: `group ${response} was updated succesfully`});
      })
      .catch(error => {
        res.json(error);
      }) 
});


// DELETE route => to delete a specific group
groupRoutes.delete('/groups/:id', (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid'});
  }

  Group.findByIdAndDelete(req.params.id)
    .then((response) => {
      res.json({ message: response})
    })
    .catch(error => {
      res.status(500).json({ message: `Error occurred: ${error}`});
    });
});

module.exports = groupRoutes;