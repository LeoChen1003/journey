//app.js 服务器端程序
//1:下载三个模块 
//  cors            完成跨域处理
//  express-session session对象
//  mysql           数据库驱动
//  express         web服务器
//下载命令在线  
//npm i cors express-session express  mysql
//2:将以上四个模块引入到当程序
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
//3.创建数据库连接池(提高效率)
var pool = mysql.createPool({
    host:"127.0.0.1", //数据库地址
    user:"root",      //数据库用户名
    password:"",      //数据库密码
    port:3306,      //数据库端口
    database:"wuyuan",//库名
    connectionLimit:15//15连接
})
var server = express();
server.use(cors({
    //允许程序列表
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true//每次请求需要验证
}))
//5:配置session模块?????????
server.use(session({
    secret:"128位字符串",//安全字符串
    resave:true,//请求时更新数据
    saveUninitialized:true//保存初始数据
 }))
//6:配置项目静态目录 public
//7:创建express对象绑定4000端口
server.listen(4000);

//游客登录
server.get('/login',(req,res)=>{
    //获取脚手架参数
    var phone = req.query.phone;
    var upwd = req.query.upwd;
    //创建sql语句查询
    var sql = "SELECT id FROM user WHERE phone = ? AND upwd = ?";
    //执行sql语句
    pool.query(sql,[phone,upwd],(err,result)=>{
        if(err)  throw err;
        //判断是否查询成功  result.length
        if(result.length == 0){
            res.send({code:-1,msg:"手机号或密码错误"})
        }else{
            res.send({code:1,msg:"登录成功"})
        }
        //将结果返回脚手架
    })
})

//管理员登录
server.get('/adminLogin',(req,res)=>{
    //获取脚手架参数
    var phone = req.query.phone;
    var pwd = req.query.upwd;
    //创建sql语句查询
    var sql = "SELECT id FROM admininfo WHERE phone = ? AND upwd = ?";
    //执行sql语句
    pool.query(sql,[phone,pwd],(err,result)=>{
        if(err)  throw err;
        //判断是否查询成功  result.length
        if(result.length == 0){
            res.send({code:-1,msg:"手机号或密码错误"})
        }else{
            res.send({code:1,msg:"登录成功"})
        }
        //将结果返回脚手架
    })
})

//游客注册
server.get('/register',(req,res)=>{
    //创建脚手架参数
    var name = req.query.uname
    var phone = req.query.phone
    var pwd = req.query.upwd
    //sql语句
    var sql = `INSERT INTO user(uname,phone,upwd) VALUES('${name}','${phone}','${pwd}')`
    pool.query(sql,[name,phone,pwd],(err,result)=>{
        if (err)  throw err
        if(result.affectedRows==1){
            res.send({code:1,msg:"注册成功"});
        }else{
            res.send({code:-1,msg:"注册失败"});
        }
    })
})

//获取景点信息
server.get('/spotInfo',(req,res)=>{
    //sql语句
    var sql = "SELECT * FROM spotinfo"
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length===0){
            res.send({code:-1,message:'查找失败'})
        }else {
            res.send(result)
        }
    })
})

//获取用户信息
server.get('/userInfo',(req,res)=>{
    //sql语句
    var sql = "SELECT * from user";
    pool.query(sql,(err,result)=>{
        if(err)  throw err;
        if(result.length===0){
            res.send({code:-1,message:'查找失败'})
        }else {
            res.send(result)
        }
    })
})

//获取酒店信息
server.get('/hotelInfo',(req,res) => {
    var city = req.query.city;
    var name = req.query.hotelName;
    if(city === '' && name === ''){
        var sql = "SELECT * FROM hotelinfo";
    }else if(city !== '' && name === ''){
        var sql = "SELECT * FROM hotelinfo WHERE city = ?";
    }else if(name !== '' && city === ''){
        var sql = "SELECT * FROM hotelinfo WHERE hName = ?";
    }else{
        var sql = "SELECT * FROM hotelinfo WHERE city = ? AND hName = ?";
    }
    pool.query(sql,[city,name],(err,result)=>{
        if(err)  throw err;
        if(result.length===0){
            res.send({code:-1,message:'查找失败'})
        }else {
            res.send(result)
        }
    })
})