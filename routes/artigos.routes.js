//rotas de sistemas de artigos 

/*
GET

-obter todos os artigos 
-obter um artigo especifico
-obter todos os artigos publicos 

POST
 
-criar um novo artigo

PUT

-publicar meu artigo 

DELETE

-deletar um artigo 
*/

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    router.post("/", artigosController.create);

    router.get("/", artigosController.findAll);

    app.use("/artigos", router);
};