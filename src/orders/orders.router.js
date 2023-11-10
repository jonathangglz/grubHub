const router = require("express").Router();
const { list, create, read, update, destroy } = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass
router
	.route("/")
	.get(list)
	.post(create)
	.all(methodNotAllowed);

router
	.route("/:orderId")
	.get(read)
	.put(update)
	.delete(destroy)
	.all(methodNotAllowed);

module.exports = router;