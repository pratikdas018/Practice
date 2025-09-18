require('dotenv').config()
const express = require("express");
const app = express();
const port = 4000;


const githubData = 
    {
        "login": "pratikdas018",
        "id": 178085148,
        "node_id": "U_kgDOCp1dHA",
        "avatar_url": "https://avatars.githubusercontent.com/u/178085148?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/pratikdas018",
        "html_url": "https://github.com/pratikdas018",
        "followers_url": "https://api.github.com/users/pratikdas018/followers",
        "following_url": "https://api.github.com/users/pratikdas018/following{/other_user}",
        "gists_url": "https://api.github.com/users/pratikdas018/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/pratikdas018/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/pratikdas018/subscriptions",
        "organizations_url": "https://api.github.com/users/pratikdas018/orgs",
        "repos_url": "https://api.github.com/users/pratikdas018/repos",
        "events_url": "https://api.github.com/users/pratikdas018/events{/privacy}",
        "received_events_url": "https://api.github.com/users/pratikdas018/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 4,
        "public_gists": 0,
        "followers": 0,
        "following": 1,
        "created_at": "2024-08-11T12:42:26Z",
        "updated_at": "2024-09-03T06:49:06Z"
      }

app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.get("/",(req,res)=>{
    res.send("hello this pratik");
});

app.get("/insta",(req,res)=>{
    res.send("Welcome to Instagram");
})

app.get("/login",(req,res)=>{
    res.send("<h1>please login</h1>");
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Welcome to YouTube page</h2>");
})

app.get("/x", (req,res) => {
     res.send("<h2> Login or Signup X</h2>");
});

app.get("/facebook",(req,res) =>{
res.send("<h2>Login to Facebook<h2>"):
});

app.get("/linkdin",(req,res) =>{
res.send("<h2>Login to LinkedIn<h2>"):
});

app.get("/vite", (req, res) => {
 res.send( " This is the react component.And it render the vite from react " );
})

app.listen(process.env.PORT,()=>{
    console.log(`port is listing on ${port}`);
})