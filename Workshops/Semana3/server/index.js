const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");

const db = mongoose.connect("mongodb+srv://Fernando:Rambito27@exploratoriocluster.kiqo16u.mongodb.net/prograweb2?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const {
  teacherPatch,
  teacherPost,
  teacherGet,
  teacherDelete
} = require("./controllers/teacherController.js");

const {
  coursePatch,coursePost, courseGet,courseDelete
} = require("./controllers/courseController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request
app.get("/api/teachers", teacherGet);
app.post("/api/teachers", teacherPost);
app.patch("/api/teachers", teacherPatch);
app.put("/api/teachers", teacherPatch);
app.delete("/api/teachers", teacherDelete);

// course
app.get("/api/courses", courseGet);
app.post("/api/courses", coursePost);
app.put("/api/courses/:id", coursePatch);
app.delete("/api/courses/:id", courseDelete);

app.listen(3001, () => console.log(`Example app listening on port 3001!`))
