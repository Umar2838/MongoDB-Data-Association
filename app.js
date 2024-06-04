const express = require("express")
const app = express()
const userModel = require("./models/user")
const postModel = require("./models/post")

app.get("/", function(req, res) {
    res.send('hey')
})

app.get("/create", async function(req, res) {
  let user = await userModel.create({
    username : "Umar",
    age: 19,
    email: "umar@gmail.com",
    posts:[]
   })
   res.send(user)
})

app.get("/post/create", async function(req, res) {
 let post = await  postModel.create({
  postdata: "hello logo",
  user: "665f7fa88c08ade71b5e94c5",
 })

 let user = await userModel.findOne({_id:"665f7fa88c08ade71b5e94c5"})
 user.posts.push(post._id)
 await user.save()

 res.send({post,user})

})



app.listen(3000)