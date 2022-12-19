const express=require('express');
const userController=require("../Controller/user.controller");
const router=express.Router();

router.post("/saveUser",userController.saveUser);
router.post("/updateUser",userController.updateUser);
router.post("/deleteUser",userController.deleteUser);
router.post("/showUserByUserName",userController.showUserByUserName);
router.get("/showAllUsers",userController.showAllUsers);
router.post("/getUserById",userController.getUserById);
router.post("/showAllUsersByRole",userController.showAllUsersByRole);

module.exports=router;