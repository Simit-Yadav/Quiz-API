const express = require("express");
const router = express.Router();
const {getAllLanguage,getOneLanguage,createQuestion} = require("../controllers/main");

router.route("/").get(getAllLanguage);
router.route("/:language").get(getOneLanguage);
router.route("/add").post(createQuestion);

module.exports = router;




