
const prod = {
    env        : 'prod',
    secret     : 'admin',
    sequelize:{
        host    : process.env.MYSQL_HOST,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port    :  process.env.MYSQL_PORT,
        database: 'his',
        dialect : 'mysql',
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

module.exports = prod;