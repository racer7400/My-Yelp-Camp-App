var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Grand Canyon",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvcmm8OlHbgvYarjLA9cbp93vvvlwBl7NfXbqI2IK1snm3t8-Rw",
        description: "Come visit he Grand Canyon! The veiw is one of a kind!"
//        comment: "whatever goes here"
    },
    {
        name: "Sequoia National Park",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbH2yAS7w2ZY0DGGYDe09E1n54C8EJFK9NhbHrR1c9A3F7ugU",
        description: "Stunning campground with tons of great scenerey ! Come visit."
//        comment: "whatever goes here"
    },
    {
        name: "Yellowstone National Park",
        image: "http://d1njyp8tsu122i.cloudfront.net/wp-content/uploads/YS-Pebble-Creek-Campsite_NPSNealHerbert_680-612x353.jpg",
        description: "Georgeous, geysers stunning vistas what more do you need! Come visit."
//        comment: "whatever goes here"
    },
];

function seedDB(){
    //REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                  console.log(err);
                } else {
                    console.log("added a campground");
                    //create a comment
                    //Comment.create(
                    //    {
                    //        text: "This is the best place ever!",
                    //        author: "Mordy"
                    //    },  function (err, comment){
                    //        if (err){
                    //          console.log(err);
                    //      } else {
                    //            campground.comments.push(comment);
                    //            campground.save();
                    //            console.log("Created a new comment");
                    //        }
                    //    });
                }
            });
        });
    });  
    //add a few comments
}
module.exports = seedDB;