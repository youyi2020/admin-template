const Router = require('koa-router');
const router = new Router();
const util = require('util');
const jsonwebtoken = require('jsonwebtoken');
const verify = util.promisify(jsonwebtoken.verify);
const {secret} = require('./../config');

router.post('/user',async (ctx) => {
    const token = ctx.header.authorization;
    const payload = await verify(token.split(' ')[1], secret);
    ctx.body = {
        result : '测试成功',
        payload
    }
});

module.exports = router;