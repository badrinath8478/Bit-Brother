const express = require("express");
const router = express.Router();
const Controller = require("../controller/user");






router.get("/read/:userName", Controller.getUser);


router.post("/register",Controller.userRegister);


router.put("/update/:userName", Controller.update);


router.delete("/delete/:userName", Controller.delete);



module.exports = router;



