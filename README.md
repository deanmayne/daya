## DAYA 

DAYA is a social planner. Inspired by the desire to stay up to date on your friends calendars, DAYA allows for users to create, edit, or delete their own events, follow their friends events and view friends calendars.

Live Site: [DAYA](http://daya-mern.herokuapp.com/#/)

![text](images/splash.png)

## Technologies Used 
* MongoDB
* Express
* React
* Redux
* Node

### Sign In/Sign Up
 * Users are able to sign in to an existing acctount, create a new account, or use demo user log in feature

![text](images/login.png)


### Newsfeed 
* View your friends events sorted by most recent upcoming event

![text](images/newsfeed.png)

### Follow/Unfollow 
* Ability fo follow and unfollow other DAYA users 
* Custom association on Mongoose Model 


```
UserSchema.methods.follow = function(id) {
  if(this.following.indexOf(id) === -1){
    this.following.push(id)
  }
  return this.save();
}
```
* Express post request
```
router.post('/:username/follow', passport.authenticate('jwt', {session: false}), (req, res) => {
  let currentUser = req.user
  User.findOne({ username: req.params.username })
    .then((user) => currentUser.follow(user.id))
    .then((user) => res.json({
                          id: user.id,
                          username: user.username,
                          following: user.following,
                        }))
})
```

![text](images/follow.gif)

### Personal Calendar 
* Personal events 
* Ability to edit, delete or create events 

![text](images/personal_calendar.png)

### Event CRUD 
* If logged in, ability to add, edit or delete personal events 

![text](images/createevent.png)


### Suggested Follows 
* List of all users on DAYA, including how many people they follow and how 
many events they have 

![text](images/suggested_follows.png)



