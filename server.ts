import * as express from 'express';
import * as path from 'path';
import {getTotalEventList} from "./model";

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'static_resource')));

app.get('/events', (req, res) => {
   res.json(getTotalEventList());
});

const server = app.listen(8000, 'localhost', () => {
   const { address, port } = server.address();
   console.log('Listening on %s %s', address, port);
});