var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    passport   = require("passport"),
    flash      = require("connect-flash"),
    methodOverride = require("method-override"),
    Campground = require("./models/campground"),
    Comment    = require("./models/comment"),
    User       = require("./models/user"),
//    seedDB     = require("./seeds"),
//    passportLocalMongoose = ("passport-local-mongoose"),
    LocalStrategy = require("passport-local");


var commentRoutes = require("./routes/comments"),
   campgroundRoutes = require("./routes/campgrounds"),
   indexRoutes = require("./routes/index");

mongoose.connect("mongodb://racer7400:46sacramento@ds143362.mlab.com:43362/yelpcampapp");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

//PASSPORT CONFIGURATION


app.use(require("express-session")({
   secret: "Colt Steele is very crazy",
   resave: false,
   saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

//Server Start
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp server is listening!!!"); 
});


//var campgrounds = [
//    {
//        name: "Grand Canyon",
//        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvcmm8OlHbgvYarjLA9cbp93vvvlwBl7NfXbqI2IK1snm3t8-Rw",
//        description: "Come visit he Grand Canyon! The view is one of a kind!",
//        comment: "whatever goes here"
//    },
//    {
//        name: "Sequoia National Park",
//        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbH2yAS7w2ZY0DGGYDe09E1n54C8EJFK9NhbHrR1c9A3F7ugU",
//        description: "Stunning campground with tons of great scenery ! Come visit.",
//        comment: "whatever goes here"
//    },
//    {
//        name: "Yellowstone National Park",
//        image: "http://d1njyp8tsu122i.cloudfront.net/wp-content/uploads/YS-Pebble-Creek-Campsite_NPSNealHerbert_680-612x353.jpg",
//        description: "Gorgeous, geysers stunning vistas what more do you need! Come visit.",
//        comment: "whatever goes here"
//    },
//    {
//        name: "Surf & Stream Campground",
//        image: "https://yt3.ggpht.com/-Yib9FCjB2AE/AAAAAAAAAAI/AAAAAAAAAAA/OCJ4Uj7btso/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
//        description: "Gorgeous campground with a lot of beautiful streams and lakes! Come visit.",
//        comment: "This place is great!"
//    },
//    {
//        name: "Turkey Swamp Parkl",
//        image: "http://1.bp.blogspot.com/-tN7EfUwAE9w/URvn_brVhEI/AAAAAAAAOA8/nguZKJTqr7A/s1600/IMG_5746+(1024x622).jpg",
//        description: "Georgeous campground with tons of wild turkeys! Come visit.",
//        comment: "This place is great!"
//    },
//    {
//        name: "Henry Kaufmann Campgrounds - Staten Island",
//        image: "http://old.camphkc.org/hkc/images/slides/690x320/19_SI1.jpg",
//        description: "Georgeous campground with tons of wild turkeys! Come visit.",
//        comment: "This place is great!"
//    }
//];