var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://gabrielcaldeira7001:<db_password>@cluster0.skpgloe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, { useNewUrlParser: true });
var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");


var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
    resposta.redirect('cadastro.html')
    })
    
    
app.get('/cadastro',function (requisicao, resposta){
    var nome = requisicao.query.nome;
    var sobrenome = requisicao.query.sobrenome;
    var x =  requisicao.query.x  || 'Conteúdo não informado';
    
resposta.render('blog', { nome, sobrenome, x });
})


app.post("/cadastrar_post", function(req, resp) {
    var data = { db_titulo: req.body.nome, db_resumo: req.body.sobrenome, db_conteudo: req.body.x };

    usuarios.insertOne(data, function (err) {
      if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário cadastrado com sucesso!"})        
      };
    });
   
  });
app.post("/cadastrar_post", function(req, resp) {
    var data = {db_titulo: req.body.nome, db_resumo: req.body.sobrenome, db_conteudo: req.body.x }; 

    usuarios.find(data).toArray(function(err, items) {
      console.log(items);
      if (items.length == 0) {
        resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado!"})
      }else if (err) {
        resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
      }else {
        resp.render('resposta_usuario', {resposta: "Usuário logado com sucesso!"})        
      };
    });
});