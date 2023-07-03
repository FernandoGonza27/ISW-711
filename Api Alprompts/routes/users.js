import express from "express";
import {
    updateUser,
    getUser,
    deleteUser,
    getUsers
} from "../controllers/user.js";

const router =  express.Router();


router.put("/:id", updateUser)
//DELETE\
router.delete("/:id", deleteUser)
//GET
router.get("/:id", getUser)

router.get("/",getUsers)


export default router;