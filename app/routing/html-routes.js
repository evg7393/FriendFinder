var path = require("path");

/* routes to tell router what page to deliver based on url
in the export pass parameter app -Express.. when user selects url, deliver survey file*/

module.exports = function (app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));

    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    


}
