//require data from other file

var friends = require("../data/friends");

module.exports = function (app) {

//route of friends

app.get("/api/friends", function(res, res){
    res.jason(friends);
})
}