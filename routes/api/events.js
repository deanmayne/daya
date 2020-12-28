const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require ('../../models/Event')
const validateEventInput = require('../../validation/events');

//   do the get requests need to be protected? how to deal with following situation


// Create Event 
router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newEvent = new Event({
        title: req.body.title,
        category: req.body.category,
        user: req.user.id
      });
  
      newEvent.save().then(event => res.json(event));
    }
  );

// Update Event
  router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const updatedEvent = await Event.findByIdAndUpdate(req.params.id,
        {
            title: title || req.body.title, 
            category: category || req.body.category
        }, { new: true}
        );


      updatedEvent.save().then(event => res.send(event))
    }
  
  );


