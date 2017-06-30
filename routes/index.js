var express    = require("express");
var router     = express.Router();
var passport   = require("passport");
var User       = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

//Show register form
router.get("/register", function(req, res){
    res.render("register");
});

//register logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Yelp Camp " + user.username);
            res.redirect("/campgrounds");
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login");
});

//login logic
router.post("/login",passport.authenticate("local",
    {
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Succesfully logged in"
   }), function(req, res){
});

//logout
router.get("/logout", function(req, res){
   req.logout();
   req.flash( "success", "You Logged Out!");
   res.redirect("/campgrounds");
});


module.exports = router;