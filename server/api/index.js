const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/series", require("./series"));
router.use("/movies", require("./movies"));

router.use((req, res, next) => {
  const err = new Error("api route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
