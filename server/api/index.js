const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/series", require("./series"));
router.use("/movies", require("./movies"));

module.exports = router;
