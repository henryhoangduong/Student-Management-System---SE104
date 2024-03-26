const { expressjwt: expressjwt }  = require("express-jwt");
const user                        = require("./controller/user");
const bodyParser                  = require("body-parser");
const express                     = require("express");
const app                         = express();
const port                        = 3000;
const teacher = require('./controller/teacher')
const authorize=require('./middleware/authorize')

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//public route
app.post("/student/signin", user.studentSignin);
app.post("/teacher/signin", user.teacherSignin);

//protected route
app.get("/student/profile",expressjwt({
  secret: process.env.JWT_KEY,
  algorithms: ["HS256"],
}),)
app.get("/teacher/profile", expressjwt({
  secret: process.env.JWT_KEY,
  algorithms: ["HS256"],
}),teacher.read);

app.get("/test", authorize.authorize('teacher'), () => {
  console.log('done')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
