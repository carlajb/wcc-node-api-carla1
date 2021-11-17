const express = require ("express");
const app = express();
const port = 8080;

//GET- obter algo
//POST -criar algo
// PUT - atualizar algo
// DELETE - deletar algo
// npm install --save -dev nodemon

app.use(express.json());

app.get("/", function(req,res){
    res.send("minha primeirac requisicao");
});

app.get("/segunda-req", function(req,res){
    res.send("minha segunda requisicao");
});

app.get("/com-param", function(req,res){
    res.send("requisicao com param!!! " + req.query.nome);
});

app.post("/meu-primeiro-post", function (req,res){
    console.log(req.body);
    res.send("Meu post funcionou");
});

app.put("/meu-primeiro-put/:id", function (req, res){
       console.log(req.body, req.params.id);
        res.send("meu put funciona");
});

app.delete("/meu-primeiro-delete/:id", function (req,res){
    console.log(req.params.id);
    res.send("Meu delete funciona" + req.params.id);
});



app.listen(port, function(){
    console.log("ouvindo a porta 8080", port);
});

