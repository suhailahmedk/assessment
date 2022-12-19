const express=require('express');
const staticController=require("../Controller/static.controller");
const router=express.Router();

router.get("/getAllStatics",staticController.getAllStatics);
router.get("/getAllYearlyStatics",staticController.getAllYearlyStatics);

module.exports=router;