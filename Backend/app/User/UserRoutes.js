import express from "express"
import {
    getUser,getUserFriends,addRemoveFriends
}from "./UserController.js"
import { verifyToken } from "../../Middleware/auth.js"


const router = express.Router()


// Function Read
router.get("/:id",verifyToken,getUser)
router.get("/:id",verifyToken,getUserFriends)

// Function Update
router.patch("/:id/:friendId",verifyToken,addRemoveFriends)



export default router