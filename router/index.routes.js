const express = require("express");
const router = express.Router();

const linkController = require("../controller/add.link");

router.get("/", 
    linkController.linkPageRender
);


module.exports = router;