const db = require('./../db');
const userDb = db.user;

async function getUserRegister(user_account,user_password,user_name){
    return await userDb.create({
        user_account,
        user_password,
        user_name
    });
}

async function getUserByUserAccount(user_account){
    return await userDb.findOne({where: {user_account : user_account}});
}

module.exports = {
    getUserRegister,
    getUserByUserAccount
};