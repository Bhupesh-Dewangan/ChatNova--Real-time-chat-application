import express from "express";
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.get("/logout", logout);

route.put("/update-profile", protectRoute, updateProfile);

route.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default route;
