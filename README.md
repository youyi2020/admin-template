## admin-template
nodejs + React + Redux + koa2 + webpack4+ mysql  + sequelize + jwt  + 前端全栈通用模板
### 使用步骤

#### 1.安装msyql
默认你在本地安装了mysql，没有安装的同学请自行百度谷歌

#### 2.下载项目
```
git clone https://github.com/youyi2020/admin-template.git     // 下载项目

cd admin-template                                             // 进入项目根目录

cd server                                                     // 进入服务端项目工作目录
npm install                                                   // 下载依赖包
npm run local                                                 // 启动服务 启动端口是9000

cd..                                                          // 退回项目根目录

cd admin                                                      // 进入web端项目工作目录
npm install                                                   // 下载依赖包
npm run build                                                 // 注意webpack配置的output直接打包到服务端的静态目public下

浏览器打开地址：http://localhost:9000 

```

#### 3.技术栈说明
前端：react + antdesighn + axios + redux + less
后端: koa2 + koa-cors + jwt + koa-router + sequelize + koa-static + cross-env + nodemon
打包：webapck4



