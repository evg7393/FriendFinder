var path = require("path");

/* routes to tell router what to deliver based on url
in the export pass parameter app -Express, when user selects url, deliver server file*/

module.exports = function (app) {

    app.get("/..public/survey.html", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));

    });

    //homepage route
    app.use(function(req, res){
        res.sendFile(path.join)(__dirname + "/..public/home.html");

    });
}