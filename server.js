// usei o express para criar e configurar o servidor

const express = require("express");
const server = express();

const ideas = [
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/2833/2833169.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/2833/2833257.svg",
        title: "Uso da Máscara",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/2833/2833175.svg",
        title: "Importância dos Profissionais da Saúde",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/svg/static/icons/svg/3930/3930531.svg",
        title: "Composição do Salmão",
        category: "Alimentação",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque",
        url: "https://rocketseat.com.br"
    }
]

// prepara o server para usar arquivos estáticos(css, script, imagens)
server.use(express.static("public"))

//criando nunjucks

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
})
//criando rota / 
// captura pedido do front-end
server.get("/", function(req, res){

    const lastIdeas = []
    for ( idea of ideas.reverse()){
        if( lastIdeas.length < 2){
            lastIdeas.push(idea);
        }
    }
    return res.render("index.html", { ideas: lastIdeas});
})
server.get("/ideias", function(req, res){
    return res.render("ideias.html", { ideas: ideas.reverse()});
})
//ligando server na porta 3000
server.listen(3000);