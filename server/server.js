var express = require("express");
var bodyParser = require("body-parser");
let cors = require("cors");
var getrooms = require("./routes/rooms");
var getroom = require("./routes/singleroom");
var addroom = require("./routes/addroom");
var getusers = require("./routes/users");
var adduser = require("./routes/adduser");
var getmessages = require("./routes/messages");
var addmessage = require("./routes/addmessage");
// var getnews = require("./routes/singlenews");
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
router.get("/", function (req, res) {
    res.send({ message: "welcome to our upload module apis" });
});
router.all("/rooms",cors(), getrooms.display);
router.all("/singleroom",cors(), getroom.display);
router.all("/addroom"  ,cors(), addroom.display);
router.all("/users",cors(), getusers.display);
router.all("/adduser"  ,cors(), adduser.display);
router.all("/messages",cors(), getmessages.display);
router.all("/addmessage"  ,cors(), addmessage.display);
// router.all("/news/:id",cors(), getnews.display);

app.use("/chatapp", router);
app.listen(4000);
console.log("server is listening...");