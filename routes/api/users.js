const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// Create User 
router.post("/register", (req, res) => {

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({username: "A user has already registered with this address"});
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


module.exports = router;