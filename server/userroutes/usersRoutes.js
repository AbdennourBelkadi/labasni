var router = require('express').Router();
const {register,login,updateCart,deleteCart,getUser} = require("./usersController")

router.post("/login",login)
router.post("/register",register)
router.put("/cart/:user",updateCart)
router.delete("/cart/:user",deleteCart)
router.get("/getuser/:user",getUser)

module.exports = router;