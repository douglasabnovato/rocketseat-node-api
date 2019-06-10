# NodeJS e API

## Atualização: 07 de Junho de 2019 - 18:08
## Criação: 08 de fevereiro de 2019
## Prática : @douglasabnovato

## Ferramentas : 

![Rocketseat](/images/logo-rocketseat.png)
![Docker](/images/logo-docker.png)
![Nodejs](/images/nodejs.png)
![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)


### Aula 1 . O que é API e NodeJS
- javascript para Frondend e Backend

### Aula 2 . Instalando NodeJS
- node -v, npm -v, mkdir node-api, cd node-api
- npm init
- npm install express

### Aula 3 . Criando a estrtura

### Aula 4 . Criando a primeira rota
- utilizando o **express**
- server.js
- `node server.js`
- http://localhost:3001/

### Aula 5 . Utilizando Nodemon
- npm install -D nodemon
- node server.js
- npm run dev
- abre : http://localhost:3001/
- package.json/dependencies:
```json
"dependencies": {
    "express": "^4.16.4",
    "mongoose": "^5.4.9",
    "mongose": "0.0.2-security"
  }
```

### Aula 6 . Instalando MongoDB
- docker : máquina de conteinerização
- windows 10 home não possui "Hyper -v", por isso, problema com virtualização.
- máquina virtual , docker tools, prompt
- utilizando virtualbox + docker tools
- ```docker``` 
- ```docker run --name mongodbrs -p 27017:27017 -d mongo```
- ```docker ps```
- Robot 3T
- depois de fechar o notebook :
1. ```docker ps -a``` : saber imagens que estão pausadas
2. ```docker start mongodb``` : ou mongodbrs : nome das minhas conexões
3. ```docker ps``` : para verificar qual conexão está rodando
- abre : http://localhost:27017/

### Aula 7 . Conectando Database
- ```npm install mongoose``` : código javascript para usar bd, ao invés de SQL.

### Aula 8 . Criando Model de produto
- Model de produto : www.producthunt.com
- biblioteca require-dir : `require('./src/models/Product');` : com isso, não há necessidade desse require em todos os models do projeto.

### Aula 9 . Reestruturação de arquivos

### Aula 10 . Utilizando Insomnia

### Aula 11 . Criaçaõ de registro

### Aula 12 . CRUD

### Aula 13 . Paginação de Lista

### Aula 14 . Adicionando CORS


:. Do curso `NodeJS`. <br/>
Por Diego Fernandes - Rocketseat : https://rocketseat.com.br/