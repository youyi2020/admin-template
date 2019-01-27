const local = {
    env        : 'dev',
    secret     : 'admin',
    sequelize:{
        host: '127.0.0.1',
        username: 'root',
        password: '123456',
        database: 'user',
        dialect: 'mysql',
        logging : false,
        timestamps : true,      // create_at
        pool: {
            max: 300,
            min: 2,
            acquire: 30000,
            idle: 10000
        },
        define: {
            underscored: true,  // 下划线
            timestamps: false,
            paranoid : false    // delete_at
        }
    }
};

module.exports = local;