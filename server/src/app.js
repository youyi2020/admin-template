const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const logger = require('koa-logger');
const json = require('koa-json');
const router = require('./router/index.js');
const cors = require('koa-cors');
const db = require('./db');

app.use(json());
app.use(logger());
app.use(cors());
app.use(bodyParser());
app.use(static(path.join( __dirname, './public')));
app.use(router.routes());
app.use(router.allowedMethods());

db.sequelize.sync({force: false}).then(function() {
    console.log("sequelize Server successed to start");
}).catch((err)=>{
    console.log("Server failed to start due to error: %s", err.message);
});

app.use(async (ctx, next) => {
    await next();
});

app.on('error',(err) => {
    console.log('server error', err)
    console.log('server error', err.name)
    console.log('server error', err.message)
});

app.listen(9000);
console.log('server start at port 9000');