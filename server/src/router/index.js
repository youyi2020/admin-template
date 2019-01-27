const Router = require('koa-router');
const router = new Router();
const koajwt = require('koa-jwt');
const auth = require('./auth.js');
const api = require('./permission.js');
const {secret} = require('./../config');

router.use('/api/auth', auth.routes());                         // 不需要登录的
router.use('/api/permission',koajwt({secret}), api.routes());   // 需要登录的

module.exports = router;