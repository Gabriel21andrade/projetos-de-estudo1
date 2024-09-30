let listaCarros = [ 
    {
        "nome": "Dodge Challenger",
        "img": "img/chalenger.jpg",
        "descricao": "O Challenger é um dos mais famosos muscle cars."
    },
    {
        "nome": "carrs",
        "img": "img/carrs.jpg",
        "descricao": "A ram rebel é um carro muito especial."
    },
    {
        "nome": "Dodge Charger",
        "img": "img/charger.jpg",
        "descricao": "O Charger é um carro potente."
    },
    {
        "nome": "Civic Type R",
        "img": "img/civic-type.jpg",
        "descricao": "O Civic Type R é um hatch esportivo."
    },
    {
        "nome": "Pagani Zonda",
        "img": "img/pagani.jpg",
        "descricao": "O Zonda é um supercarro de luxo."
    },
    {
        "nome": "Ram TRX",
        "img": "img/ram-1500.jpg",
        "descricao": "A Ram TRX é uma caminhonete poderosa."
    }
];

let cardCarro = document.getElementById("cards");

listaCarros.map((carro, posicao) => {
    cardCarro.innerHTML += `
    <div class="col-md-4">
        <div class="m-2">
            <img src="${carro.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-secondary" onclick ="zoomImg('${posicao}')"><i class= "bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    `;
    
});

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];
    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal(document.getElementById('zoomImg')).show();
}
function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
}

