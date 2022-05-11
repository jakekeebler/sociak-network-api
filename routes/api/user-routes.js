const router = require('express').Router();

// set requirements from users-controller.js
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

// directs to: /api/users <GET, POST>
router.route('/').get(getAllUsers).post(createUsers);

// directs to: /api/users/:id <GET, PUT, DELETE>
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// directs to: /api/users/:userId/friends/:friendId <POST, DELETE>
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router; 