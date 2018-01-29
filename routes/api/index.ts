import * as express from 'express';

const auth = require('./auth/index');
const router = express.Router();

router.use('/auth', auth);

module.exports = router;