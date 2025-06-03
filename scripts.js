const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", function () {
    inputUpload.click();
})

function lerConteudoDoArquivo (arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name});
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`);
        }

        leitor.readAsDataURL(arquivo) 
    });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async function (event) {
    const arquivo = event.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch (erro) {
            console.error("Erro na leitura do arquivo.");
        }
    }
})

const inputTags = document.getElementById("categoria");
const listaTags = document.getElementById("lista-tags");


listaTags.addEventListener("click", function(event) {
    if (event.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = event.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover);
    }
})

const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "Javascript", "Java", "Python", "Kotlin", "C#", "C++"];

async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000);
    })
}

inputTags.addEventListener("keypress", async function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                if (tagExiste) {
                const tagNova = document.createElement("li");
                tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                listaTags.appendChild(tagNova);
                inputTags.value = "";
            } else {
                alert("Essa tag não existe.");
            }  
        } catch (erro) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag, verifique o console.");
                
            }
        } 
    }
})

const botaoPublicar = document.querySelector(".botao-publicar");


async function publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;

            if (deuCerto) {
                resolve("Projeto publicado com sucesso!");
            } else {
                reject("Erro ao publicar o projeto");
            }
        }, 2000);
    })
}

botaoPublicar.addEventListener("click", async function (event) {
    event.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent)

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Deu tudo certo!");
    } catch (erro) {
        console.log("Deu errado: ", erro);
        alert("Deu errado!");
    }
})

const botaoDescartar = document.querySelector(".botao-descartar");

botaoDescartar.addEventListener("click", function(event) {
    event.preventDefault();

    const formulario = document.querySelector("form");
    formulario.reset();

    imagemPrincipal.src = "./img/imagem1.png";
    nomeDaImagem.textContent = "image-projeto.png";

    listaTags.innerHTML = "";
})