const Router = require('koa-router');
const router = new Router();
const {authLoginController,authRegisterController} = require('../controllers/auth');


router.post('/login',authLoginController);
router.post('/register',authRegisterController);

module.exports = router;