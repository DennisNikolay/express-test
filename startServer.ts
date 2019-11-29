
import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import TestApp from './src/TestApp';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config = require('./src/config/config.json');
TestApp.create(config, app);

server.listen(process.env.PORT || 8999, () => {
    console.log(`Server is running`);
});