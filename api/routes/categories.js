const express = require("express");
const router = express.Router();

const auth = false;

router.all("*", (req, res, next) => {
    if(auth){
        next()
    }else{
        res.json({success: false, error: "Not Authentication"});
    }
});

router.get("/", (req, res, next) => {
     res.json({
        success: true,
     });
})

module.exports= router