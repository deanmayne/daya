const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

// Create User 
router.post("/register", (req, res) => {

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      return res.status(400).json({username: "User already exists"});
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

// Login User 
router.post('/login', (req, res) => {
    // const {errors, isValid } = validateLoginInput(req.body);

    // if(!isValid) {
    //     return res.status(400).json(errors)
    // }
    
    const username = req.body.username;
    const password = req.body.password; 

    User.findOne({username})
        .then(user => {
            if(!user){
                // errors.username = 'user not found';
                // return res.status(400).json(errors);
                return res.status(400).json('user doesnt exist')
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id: user.id, username: user.username};

                        jwt.sign(
                            payload, 
                            keys.secretOrKey, 
                            {expiresIn: 3600}, 
                            (err, token) => {
                                res.json({
                                    success: true, 
                                    token: 'Bearer ' + token
                                });
                            });
                    } else {
                        // errors.password = "Incorrect Password";
                        // return res.status(400).json(errors);
                        return res.status(400).json('wrong password')
                    }
                });
        });

});


module.exports = router;