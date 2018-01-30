import * as express from 'express';

const router = express.Router();
const controller = require('./user.controller');
const authMiddleware = require('../../../../middlewares/auth');

router.use('/', authMiddleware);
router.get('/', controller.getUserInfo);
router.put('/', controller.updateUserInfo);
router.delete('/', controller.deleteUserInfo);

module.exports = router;