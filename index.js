const express = require ("express");
const app = express();
const port = 8080;

app.get("/", function(req,res){
    res.send("minha primeirac requisicao");
});

app.get("/segunda-req", function(req,res){
    res.send("minha segunda requisicao");
});

app.get("/com-param", function(req,res){
    res.send("requisicao com param!!! " + req.query.nome);
});


app.listen(port, function(){
    console.log("ouvindo a porta 8080", port);
});

