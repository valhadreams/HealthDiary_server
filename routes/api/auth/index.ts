import * as express from 'express';

const router = express.Router();
const controller = require('./auth.controller');
const authMiddleware = require('../../../middlewares/auth');

router.post('/signup', controller.signup);
router.post('/login', controller.login);

router.use('/events', authMiddleware);
router.get('/events', controller.getEvents);
router.post('/events', controller.addEvents);
router.put('/events', controller.updateEvents);

router.use('/check', authMiddleware);
router.get('/check', controller.check);

module.exports = router;