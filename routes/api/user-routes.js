const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//TODO: add route for adding and deleting friends(need function in requirement above)

router.route("/:id/friends/:friendsId").post(addFriend).delete(deleteFriend);

module.exports = router;
