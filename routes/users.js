const express = require("express")
const router = express.Router()
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser());
const cors = require('cors');
router.use(logger)
app.use(cors());

// app.set('view engine', 'jade');
app.listen((3000), ()=>{
    console.log("listening")
})

app.get("/", (req, res) => {
  console.log(req.query.name)
  res.send(users)
})

app.get("/new", (req, res) => {
  res.sendFile("C:/Users/user/Desktop/Personal Projects/express-crash-course/views/users/new.html")
})

app.post("/users", (req, res) => {
  // const isValid = false
  // if (isValid) {
    console.log(req.body)
    users.push({ name: req.body.firstName })
    res.redirect(`/users/${users.length - 1}`)
  // } else {
  //   console.log("Error")
  //   res.render("users/new", { firstName: req.body.firstName })
  // }
})
app.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})
app.get("/users/:id",(req, res) => {
    console.log(req.user.name)
    res.send(`Get User With ID ${req.params.id} Name is ${req.user.name}`)
  })
  .put("/users/:id",(req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete("/users/:id",(req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

const users = [{ name: "Kyle" }, { name: "Sally" }]


function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
