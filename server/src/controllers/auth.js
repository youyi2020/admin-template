const jsonWebToken = require('jsonwebtoken');
const {secret} = require('./../config');
const bcrypt = require('bcryptjs')
const authModel = require('./../models/auth.js');

async function authLoginController(ctx){
    const data = ctx.request.body || {};
    const userAccount   = data.userAccount;
    const userPassword  = data.userPassword;
    const userRemember  = data.userRemember || false;
    if(!userAccount || !userPassword){
        ctx.body = responseBody(400,'账号或密码不能为空'); return;
    }
    const userInfo = await authModel.getUserByUserAccount(userAccount);

    const day = userRemember ? 7 : 1;
    if(userInfo != null){
        if(!bcrypt.compareSync(userPassword,userInfo.user_password)){
            ctx.body = responseBody(400,'密码错误');
        }else{ 
            const exp = Math.floor(Date.now() / 1000) + (day * 12 * 60 * 60);
            let preload = {userAccount, exp};
            const token = jsonWebToken.sign(preload,secret);
            ctx.body = responseBody(200,'登录成功',{token,exp});
        }
    }else {
        ctx.body = responseBody(400,'用户不存在');
    }
}

async function authRegisterController(ctx){
    const data = ctx.request.body;
    const userAccount   = data.userAccount;
    const userPassword  = data.userPassword;
    const userName      = data.userName || '';

    if(!userAccount || !userPassword){
        ctx.body = responseBody(400,'账号或密码不能为空'); return;
    }

    const userInfo = await authModel.getUserByUserAccount(userAccount);
    if(userInfo != null){
        ctx.body = responseBody(400,'用户已存在'); return;
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(userPassword, salt);
    const newUserPassword = hash;

    const register = await authModel.getUserRegister(userAccount,newUserPassword,userName);
    if(register.id){
        ctx.body = responseBody(200,'注册成功');
    }else {
        ctx.body = responseBody(400,'注册失败');
    }
}

function responseBody(code,msg,result={}) {
    return {
        code,
        msg,
        result,
    }
}

module.exports = {
    authLoginController,
    authRegisterController
};