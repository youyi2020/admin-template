module.exports = function(sequelize,DataTypes){
    const user = sequelize.define('user',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true,
        },
        user_account:{
            type:DataTypes.CHAR(128)
        },
        user_password:{
            type:DataTypes.CHAR(128)
        },
        user_name:{
            type:DataTypes.CHAR(128)
        },
    },{
        timestamps : true,
        freezeTableName: true
    });
    return user;
};
