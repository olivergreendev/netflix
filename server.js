// Required External Modules
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
// App Variables
const app = express();
const port = "8080" || "8000"; // process.env.PORT
// App Configuration
app.set("views", path.join(__dirname, "views/pages"));
app.set("view engine", "ejs");
// App Middleware
app.use(express.static(path.join(__dirname, "public")));
// app.use('/css', express.static(__dirname, + '/public/css'));
// app.use('/img', express.static(__dirname, + '/public/img'));
// app.use('/js', express.static(__dirname, + '/public/js'));

app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));
// Route Definitions
app.get("/", (req, res) => {
    res.render("index", { title: "Netflix" });
});
app.get("/library", (req, res) => {
    res.render("library", { title: "Library" });
});
app.get("/profile", (req, res) => {
    res.render("profile", { title: "Profile" });
});
// Server Activation
app.listen(port, () => {
    console.log(`Listening on https:/localhost:${port}`);
});