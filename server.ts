import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const router = require('./routes/api/index');
const config = require('./config');

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'front')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', router);

app.set('jwt-secret', config.secret);

const server = app.listen(8000, 'localhost', () => {
   const { address, port } = server.address();
   console.log('Listening on %s %s', address, port);
});

mongoose.connect(config.mongodbUri);
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
   console.log('connected to mongodb server');
});