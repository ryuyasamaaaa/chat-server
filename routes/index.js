var express = require('express');
var router = express.Router();

router.use('/messages', require('./message.js'));
router.use('/users', require('./user.js'));
router.use('/rooms', require('./room.js'));
router.use('/friends', require('./friend.js'));

module.exports = router;
