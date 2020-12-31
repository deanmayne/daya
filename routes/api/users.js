const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Private Auth Route
router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
    id: req.user.id,
    username: req.user.username
  });
})

// Create User 
router.post("/register", (req, res) => {
 const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
        errors.username = 'Username already exists';
        return res.status(400).json(errors);
    //   return res.status(400).json({username: "User already exists"});
    } else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
            const payload = {id: user.id, username: user.username, following: user.following};
            // const payload = {id: user.id, username: user.username};

            

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// Login User 
router.post('/login', (req, res) => {
  
  const {errors, isValid } = validateLoginInput(req.body);
  
  if(!isValid) {
    return res.status(400).json(errors)
  }
  
  const username = req.body.username;
  const password = req.body.password; 
  
  User.findOne({username})
  .then(user => {
    if(!user){
      errors.username = 'user not found';
      return res.status(400).json(errors);
      // return res.status(400).json('user doesnt exist')
    }
    
    ; 
    bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {
                        const payload = {id: user.id, username: user.username, following: user.following};
                        // const payload = {id: user.id, username: user.username};

                        // const payload = user
                        
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
                        errors.password = "Incorrect Password";
                        return res.status(400).json(errors);
                        // return res.status(400).json('wrong password')
                    }
                });
        });

});


// all users 
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({users: "No Users Found"}))
})


// following route 
router.post('/:username/follow', passport.authenticate('jwt', {session: false}), (req, res) => {


  let currentUser = req.user
  User.findOne({ username: req.params.username })
    .then((user) => currentUser.follow(user.id))
    .then((user) => res.json({
                          id: user.id,
                          username: user.username,
                          following: user.following,
                        }))

                     


    // .then((user) => res.json({ follows: user.following }));

})

router.delete('/:username/unfollow', passport.authenticate('jwt', {session: false}), (req, res) => {

  let currentUser = req.user

    User.findOne({ username: req.params.username })
      .then((user) => currentUser.unfollow(user.id))
      .then((user) =>
        res.json({
          id: user.id,
          username: user.username,
          following: user.following,
        })
      );
})





module.exports = router;