import express from "express";//servidor
import multer from "multer";//criador de pastas
import cors from "cors";//ultimos passos para o backend npm i cors
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost} from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}
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
  app.use(express.json());
  //chegando requisicoes de 8000 possivelmente front
  app.use(cors(corsOptions));
  //Aula 3 exercicio - pegando o nome da coleção dinamicamente na url
  //app.get("/:colecao", listarPosts); // `:colecao` será o nome da coleção passado na URL
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  //Usando um postador" como o postman usando na aula, usa o tipo "imagem" na key e tipo from-data file
  app.post("/upload", upload.single("imagem"), uploadImagem);
  //Aula 5 - metodo put// atualizando entradas
  app.put("/upload/:id", atualizarNovoPost);
}
//export { routes, routesExercicio3 };
export default routes;
