const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Usuarios = require('./models/Usuarios')
const Cliente = require('./models/clientes');
const Motorista = require('./models/motoristas')
const Viagem = require('./models/viagems')

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
        Usuarios.create({
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
            console.log("ocorreu o seguinte erro: "+erro)
        })
    })
    app.get('/cadastrar', function(req,res){
        res.render('formulario')
    })
    app.get('/cadUser', function(req,res){
        res.render('cadUser')
    })
    app.get('/cadClient', function(req,res){
        res.render('cadClient')
    })
    app.post('/addClient', function(req,res){
        Cliente.create({
            c_cpf:req.body.cpf
        }).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            res.render('mensagemDeErroCliente')
        })
    }) 
    app.get('/cadMoto', function(req,res){
        res.render('cadMotorista')
    })
    
    app.post('/addMoto', function(req,res){
        Motorista.create({
            m_cpf:req.body.cpf,
            Qt_viagem:req.body.qt_viagens,
            Taxa_aceitacao:req.body.taxa_aceitacao,
            Taxa_cancelamento:req.body.taxa_rejeicao,
        }).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            res.render('mensagemDeErroMotorista')
        })
    })

    app.get('/cadViagems', function(req,res){
        res.render('cadViagems')
    })
    app.post('/addViagem', function(req,res){
        Viagem.create({
            id_cliente:req.body.c_cpf,
            id_motorista:req.body.m_cpf,
            avaliacao_motorista:req.body.m_avl,
            avaliacao_cliente:req.body.c_avl,
            destino:req.body.destino,
            origem:req.body.origem,
            valor:req.body.valor,
            tipo_viagem:req.body.tipo_viagem

        }).then(function()
        {
           res.redirect('/')
        }).catch(function(erro)
        {
            res.render('mensagemDeErroViagem')
            
        })
    })
    app.get('/busca/:id',function(req,res){ 
        Usuarios.findByPk(req.params.id).then(function(usuario){
            console.log(usuario)
            res.render('busca',{usuario:usuario})
        })
    })

app.listen(12000, function(){
    console.log("Servidor rodando na url http://localhost:12000");
})