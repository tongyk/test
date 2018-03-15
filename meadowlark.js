var express=require('express');
var app=express();
var fortunes=[
    "1",
    "2",
    "3",
    "4",
    "5",
];
    app.set('port',process.env.PORT || 3000);

    app.get('/',function(req,res){
        res.render('home');
})
    app.get('/about',function(req,res){
        var randomFortune=
           fortunes[Math.floor(Math.random()*fortunes.length)];
        res.render('about',{fortune:randomFortune });
})

//设置视图引擎
    var handlebars=require ('express3-handlebars').create({
        defaultLayout:'main'});
    app.engine('handlebars',handlebars.engine);
    app.set('view engine','handlebars');

//加载静态资源
app.use(express.static(__dirname+'/public'));

//404 catch-all处理器（中间件）
app.use(function(req,res){
    res.status(404);
    res.render('404');
}) 



//500错误处理器（中间件）
app.use(function(req,res){
    console.error(err.stack);
    res.status(500);
    res.render('500');
})
//监听：3000
    app.listen(app.get('port'),function(){
    console.log('Express started on http://localhost:'+
    app.get('port')+';press Ctrl-C to terminate.');
})