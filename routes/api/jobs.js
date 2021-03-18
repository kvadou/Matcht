const router = require("express").Router();
const jobsController = require("../../controllers/Controller");

router
  .route("/jobpage")
  .get(jobsController.findAll)
  .post(jobsController.create);

router.route("/:id").get(jobsController.findById).delete(jobsController.remove);

module.exports = router;
