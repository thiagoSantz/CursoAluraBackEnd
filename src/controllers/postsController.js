import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../servicesGoogle/geminiService.js";

/* export async function listarPosts(req, res)
{
    //Aula 3 - Usando rota do db importado. Usar async nos parametros para usar o db
    //usar async para nao bloquear o restante do codigo, em caso de execução em varios ambientes
    //Exericico aula 3 - recebendo o nome da colecao dinamicamente pela requisição de url
    const nomeColecao = req.params.colecao;
    try {
        const documentos = await getTodosPosts(nomeColecao);
        res.status(200).json(documentos);
    } catch (error) {
        console.error(error); // Logando o erro no servidor para análise
        res.status(500).json({ erro: "Erro ao acessar a coleção", detalhes: error.message });
    }  
} */
export async function listarPosts(req, res)
{
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
export async function postarNovoPost(req, res)
{
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
export async function uploadImagem(req, res)
{
    console.log("Arquivo recebido:", req.file);
    if (!req.file) {
        return res.status(400).json({ erro: "Nenhuma imagem foi enviada." });
    }
    //const novoPost = req.body;
    // Criando o novo post com informações da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    console.log("Objeto a ser salvo no banco:", novoPost);
    try {
        const postCriado = await criarPost(novoPost);
        //no do arquivo na pasta imagem com seu id em vez de nome original
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        // fs é uma bib, para sincronizar arquivos entre servidor e sistema de armazenamentos.
        fs.renameSync(req.file.path, imagemAtualizada);

        console.log("Resultado do banco:", postCriado);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error("Erro ao fazer upload da imagem:",erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
//Aula 5 //Usando put, atualizando entradas de objetos no BD
export async function atualizarNovoPost(req, res)
{
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        //criando descricao do objeto com o gemini
        //Nao esquecer de instalar a dependencia npm i @google/generative-ai
        const descricao = await gerarDescricaoComGemini(imgBuffer);
        
        const postAtualizado = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id, postAtualizado);
        
        res.status(200).json(postCriado);

    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}