const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// URI do MongoDB
const uri = "mongodb+srv://gabrielcaldeira7001:gabriel.caldeira@cluster1.js7itms.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Configurações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs'); // importante para usar res.render
app.set('views', path.join(__dirname, 'views')); // garante que a pasta views será usada

// Função principal
async function main() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log("✅ Conectado ao MongoDB");

        const db = client.db("meu_banco");
        const usuarios = db.collection("usuarios");

        // Rota de cadastro
        app.post('/cadastro', async (req, res) => {
            try {
                const { titulo, resumo, conteudo } = req.body;

                if (!titulo || !resumo || !conteudo) {
                    return res.status(400).send("Campos obrigatórios faltando.");
                }

                await usuarios.insertOne({
                    db_titulo: titulo,
                    db_resumo: resumo,
                    db_conteudo: conteudo
                });

                res.render('resposta', {
                    status: "Post cadastrado com sucesso!",
                    titulo,
                    resumo,
                    conteudo
                });
                
            } catch (err) {
                console.error("Erro ao salvar no banco:", err);
                res.status(500).send("Erro interno ao cadastrar.");
            }
        });

        // Rota para listar posts
        app.get('/posts', async (req, res) => {
            try {
                const posts = await usuarios.find().toArray();
                res.render('posts', { posts }); // renderiza a view 'posts.ejs'
            } catch (err) {
                console.error("Erro ao buscar posts:", err);
                res.status(500).send("Erro ao buscar posts.");
            }
        });

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (err) {
        console.error("Erro ao conectar ao MongoDB:", err);
    }
}

main();