const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Event = require('../../models/Event')
const validateEventInput = require('../../validation/events');


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
        user_id: req.user.id,
        username: req.body.username,
        date: req.body.date
      });

      
  
      newEvent.save().then(event => res.json(event));
    }
  );

// Update Event
  router.patch('/:event_id',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
      const { errors, isValid } = validateEventInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const updatedEvent = await Event.findByIdAndUpdate(
        req.params.event_id,
        {
          title: req.body.title,
          category: req.body.category,
          user_id: req.user.id,
          username: req.body.username,
          date: req.body.date,
        },
        { new: true }
      );


      updatedEvent.save().then(event => res.send(event))
    }
  );

  router.delete('/:event_id', passport.authenticate('jwt', { session: false }), 
    (req, res) => {
      Event.deleteOne({_id: req.params.event_id})
        .then(event => res.json(event))
        .catch(err => res.status(404).json({ noeventfound: 'No Event Found' }))
  })


// A Single Users Events (upcoming events page) 
  router.get('/:username', (req, res) => {
    Event.find({username: req.params.username})
        .sort({ date: 1})
        .then(events => res.json(events))
        .catch(err =>
            res.status(404).json({ noeventsfound: 'No Events Found' }
        )
    );
});

// Get All Events: 

router.get('/', (req, res) => {
    Event.find()
        .sort({date: 1 })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ noEventsFound: 'No Events found'}));
});

module.exports = router;