import * as express from 'express';

const router = express.Router();
const controller = require('./events.controller');
const authMiddleware = require('../../../../middlewares/auth');

router.use('/', authMiddleware);
router.get('/', controller.getEvents);
router.post('/', controller.addEvents);
router.put('/', controller.updateEvents);

module.exports = router;