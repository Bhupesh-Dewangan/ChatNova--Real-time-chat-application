import express from "express";

const route = express.Router();

// Example auth route
route.get("/signup", (req, res) => {
  res.send("Signup route");
});

route.get("/login", (req, res) => {
  res.send("Login route");
});

route.get("/logout", (req, res) => {
  res.send("Logout route");
});

export default route;
