import express from "express";//servidor
import multer from "multer";//criador de pastas
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

//sistema proprio do multer para criar pastas e armazenar
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ dest: "./uploads" , storage})
//sistema de armazenamento do multer para criar pastas. caminho / configuração
//linux ou mac usa apenas o destino até final de .uploads Necessário apenas no windows para storage config.

function routes(app) {
  //Aula 3 exercicio - pegando o nome da coleção dinamicamente na url
  app.use(express.json());
  //app.get("/:colecao", listarPosts); // `:colecao` será o nome da coleção passado na URL
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  //Usando um postador" como o postman usando na aula, usa o tipo "imagem" na key e tipo from-data file
  app.post("/upload", upload.single("imagem"), uploadImagem);
}
//export { routes, routesExercicio3 };
export default routes;
