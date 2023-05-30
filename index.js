//importação do módulo express
const express = require("express");

//instânciando o express como app
const app = express();

//Definir que o express deve lidar com conteúdos em json
/*
 * JSON -> JS(JavaScript) O(On) N(Notation) 
    é um notação em javascript, ou seja, uma forma estruturada
    de transitar com os dados, enviando para o servidor ou para
    o usuário. É uma forma de trocar dados entre cliente-servidor
    usando objetos javascript.Ex.:
        lstProdutos:[
            {
                id:51,
                nome:"Mouse"
            },
            {
                id:52,
                nome:"Sofá"
            }
        ]
 */
app.use(express.json());
app.use(coletarDados);//usando o middleware

//vamos criar a primeira rota com a solicitação get
app.get("/",(req,res)=>{
    //responder ao usuário passando o status code e a mensagem
    res.status(200).send("Olá, você está na rota Raiz");
});

app.get("/clientes/listar",(req,res)=>{
    res.status(200).send(["Marcos","Sofia","Theo"]);
});
app.post("/clientes/cadastrar",(req,res)=>{
    res.status(201).send({rs:"Veja os dados enviados",dados:req.body});
});

function coletarDados(req,res,next){
    console.log(req);
    next();
}


app.listen(5028,()=>console.log("http://127.0.0.1:5028"));
