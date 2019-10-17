// CONFIG ===============================================
// Dependancies
var express = require("express");
var path = require("path");
var reservations = require("./reservations");
var waitList = require("./waitlist");

// Express app config
var app = express();
var port = 3000;

// data parsing config
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// POSTS ================================================
app.post("/api/tables", function(req, res) {
    var newReservation = req.body;

    reservations.push(newReservation)

    res.json(newReservation);
})

app.post("/api/waitlist", function(req, res) {
    var newReservation = req.body;

    reservations.push(newReservation)

    res.json(newReservation);
})



// ROUTES ===============================================
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
})

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
})


// LISTENING ============================================
app.listen(port, function () {
    console.log("App listening on PORT: " + port);
})