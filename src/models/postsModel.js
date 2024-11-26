import 'dotenv/config';
import { ObjectId } from "mongodb";//3-Conectando ao Mongodb pelo arquivo de config
import conectarAoBanco from "../config/dbconfig.js";
//Aula 3-Conectando ao Mongodb pelo arquivo de config
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

/*Aula 3 exercicio - Coleta dinamicamente a coleção a ser pega pela url
export async function getTodosPosts(colecao) {
    if (!colecao || typeof colecao !== 'string') {
        throw new Error("Coleção inválida");
    }
    const db = conexao.db("Thiago-ExerciciosBackEnd");
    const colecaoResgatada = db.collection(colecao);
    return colecaoResgatada.find().toArray();
} */
export async function getTodosPosts() {
     // Seleciona o banco de dados "imersao-instabytes"
     const db = conexao.db("Thiago-ExerciciosBackEnd");
      // Seleciona a coleção "posts" dentro do banco de dados
     const colecao = db.collection("posts");
     // Retorna um array com todos os documentos da coleção
     return colecao.find().toArray();
} 
export async function criarPost(novoPost) {
    const db = conexao.db("Thiago-ExerciciosBackEnd");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}
//Aula 5 PUT // Atualizando entradas
export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Thiago-ExerciciosBackEnd");
    const colecao = db.collection("posts");
    //Metodo que mongodb usa para entender o tipo id de objeto criado lá
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({ _id: new ObjectId(objID) }, { $set:novoPost});
}