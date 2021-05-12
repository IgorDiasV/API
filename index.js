const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body Parser
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())
        
//Rotas
    app.get('/', function(req,res){
        res.render('home')
    })
    app.post('/addUser',function(req,res){
        Post.create({
            CPF:req.body.cpf,
            p_nome:req.body.p_nome,
            sobrenome:req.body.s_nome,
            email:req.body.email,
            Avaliacao:req.body.avaliacao
        }).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            console("ocorreu o seguinte erro: "+erro)
        })
    })
    app.get('/cadastrar', function(req,res){
        res.render('formulario')
    })
    app.get('/cadUser', function(req,res){
        res.render('cadUser')
    })

app.listen(12000, function(){
    console.log("Servidor rodando na url http://localhost:12000");
})