const express=requir('express');
const expressStatic=requir('express-static');

var server=express();
server.listn(8080);

//用户数据
var users={
    'zcm':'123',
    'zcmad':'456',
};

server.get('/login',function(reg,res){
    var user=req.query['user'];
    var pass=req.query['pass'];
     
    if(users[user]==null){
        res.send({ok:false,msg:"密码错误"});
    }else{
        res.send({ok:true,msg:'成功了'});
    }
})