# Gerenciador de Posts com Node.js e MongoDB

Este projeto é um servidor Node.js que permite gerenciar posts, incluindo upload de imagens, utilizando MongoDB como banco de dados. Ele é ideal para aprender conceitos de backend e APIs RESTful.

## Tecnologias Utilizadas
- **Node.js** com [Express](https://expressjs.com/)
- **MongoDB** para armazenamento de dados
- **Multer** para upload de arquivos
- **JavaScript** ES6 (módulos e async/await)

## Funcionalidades
- Listar todos os posts
- Criar novos posts com texto ou imagem
- Upload de imagens para o servidor e armazenamento organizado
- Persistência de dados em um banco MongoDB

## Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (versão 14 ou superior)
- **MongoDB** (local ou MongoDB Atlas)
- Um editor de código, como [Visual Studio Code](https://code.visualstudio.com/)

## Como Configurar
Clone este repositório:
Use o seguinte comando no terminal para clonar o repositório:

bash
Copiar código
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>

## Instale as dependências:
Rode o comando abaixo para instalar todas as bibliotecas necessárias:

bash
Copiar código
npm install

## Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e insira sua string de conexão com o MongoDB:

env
Copiar código

STRING_CONEXAO=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome_do_banco>

## Inicie o servidor:
Utilize o comando a seguir para iniciar o servidor em modo de desenvolvimento:

bash
Copiar código
npm run dev

## Acesse o servidor:
Abra o navegador e vá para o endereço:
http://localhost:3000.

Rotas da API

Listar Posts
GET /posts
Descrição: Retorna todos os posts do banco de dados.
Criar Novo Post
POST /posts
Body (JSON)
{
  "descricao": "Exemplo de descrição",
  "imgUrl": "caminho/para/imagem.png",
  "alt": "Texto alternativo"
}

Upload de Imagem
POST /upload
Formato do Body: FormData com uma chave imagem contendo o arquivo.

Estrutura do Projeto
.
├── server.js             # Arquivo principal do servidor
├── src/
│   ├── routes/           # Configuração das rotas
│   ├── controllers/      # Lógica de negócios (controladores)
│   ├── models/           # Modelos e integração com MongoDB
│   ├── config/           # Configuração do banco de dados
├── uploads/              # Diretório para uploads de imagens
├── package.json          # Configuração do Node.js
└── .env                  # Variáveis de ambiente
