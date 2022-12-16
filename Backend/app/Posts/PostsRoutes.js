import express from "express";
import { getFeedPosts, getUserPosts, likePosts } from "./PostsController.js";
import { verifyToken } from "../../Middleware/auth.js";

const router = express.Router();

//Read

router.get("/", verifyToken, getFeedPosts);

router.get("/:userId/posts", verifyToken, getUserPosts);


// Update

router.patch("/:id/like",verifyToken,likePosts)


export default router
