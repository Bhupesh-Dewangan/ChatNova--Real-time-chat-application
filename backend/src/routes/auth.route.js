import express from "express";
import { signup } from "../controllers/auth.controller.js";

const route = express.Router();

// Example auth route
route.post("/signup", signup);
// route.post("/login", login);
// route.get("/logout", logout);

export default route;
