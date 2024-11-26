# Gerenciador de Posts com Node.js e MongoDB

Este projeto **Servidor Node.js com Express e MongoDB**

Este é um servidor básico criado com Node.js, Express e MongoDB. Ele permite criar, listar e armazenar posts no banco de dados, além de fazer upload de imagens.

---

## **Descrição**
Este projeto utiliza o Express para construir a API RESTful e o MongoDB para armazenar dados. O servidor fornece rotas para listar posts, criar novos posts e fazer upload de imagens associadas a esses posts.

---

## **Rotas da API**

### **Listar Posts**
- **Método**: `GET`  
- **Endpoint**: `/posts`  
- **Descrição**: Retorna todos os posts armazenados no banco de dados.

### **Criar Novo Post**
- **Método**: `POST`  
- **Endpoint**: `/posts`  
- **Body (JSON)**:
  ```json
  {
    "descricao": "Exemplo de descrição",
    "imgUrl": "caminho/para/imagem.png",
    "alt": "Texto alternativo"
  }
  
### **Upload de Imagem**
- **Método**: `POST`  
- **Endpoint**: `/upload`  
- **Formato do Body**: FormData com uma chave `imagem` contendo o arquivo.

---

## Estrutura do Projeto

- `server.js`: Arquivo principal do servidor
- `src/`
  - `routes/`: Configuração das rotas
  - `controllers/`: Lógica de negócios (controladores)
  - `models/`: Modelos e integração com MongoDB
  - `config/`: Configuração do banco de dados
- `uploads/`: Diretório para uploads de imagens
- `package.json`: Configuração do Node.js
- `.env`: Variáveis de ambiente

---

## **Dependências**
As principais dependências deste projeto incluem:
- **Express**: Framework para Node.js.
- **MongoDB**: Biblioteca para conectar e interagir com o banco de dados MongoDB.
- **Multer**: Middleware para lidar com upload de arquivos.

---

## **Licença**
Este projeto está licenciado sob a [AGPL-3.0](https://opensource.org/licenses/AGPL-3.0).

---

## **Contribuições**
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

