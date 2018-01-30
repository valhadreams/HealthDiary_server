import * as express from 'express';

const router = express.Router();
const user = require('./user/index');
const events = require('./events/index');

const controller = require('./auth.controller');

router.use('/user', user);
router.use('/events', events);

router.post('/signup', controller.signup);
router.post('/login', controller.login);

module.exports = router;