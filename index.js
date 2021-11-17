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
    res.send("Dasa Educa - Artigos");
});


app.listen(port, function(){
    console.log("ouvindo a porta", port);
});

