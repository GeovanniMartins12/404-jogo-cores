// let numero = Math.round(2.4); //arredonda para o mais próximo

// numero = Math.floor(5.5); //arredonda para baixo

// numero = Math.ceil(12.1); //arredonda para cima

// numero = Math.pow(5, 5); //número e expoente

// numero = Math.sqrt(25); //raíz

// numero = Math.PI; //valor de PI

// numero = Math.cos(0*matchMedia.PI / 2); //sin SENO ou cos COSSENO


// console.log(numero);

// let numero = Math.random(); //números aleatórios

// console.log(numero);


let quadradinhos = document.querySelectorAll("div");
let resposta = document.querySelector("h2");
let botao = document.querySelector("button");

let cores = ["red", "blue", "yellow", "brown", "aquamarine", "white", "silver", "black"];

function gerarCor(){
    let aleatorio = Math.floor(Math.random()* cores.length);
    
    this.style.backgroundColor = cores[aleatorio];
    verificarFinal();
}

for(let quadrado of quadradinhos){
    quadrado.onclick = gerarCor;
}

function verificarFinal(){
    if(quadradinhos[0].style.backgroundColor == quadradinhos[1].style.backgroundColor && quadradinhos[1].style.backgroundColor == quadradinhos[2].style.backgroundColor && quadradinhos[2].style.backgroundColor == quadradinhos[3].style.backgroundColor){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";

        for(let quadrado of quadradinhos){
            quadrado.onclick = null;
            quadrado.classList.add("virarQuadradinho");
        }  
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}

function resetarJogo(){
    for(let quadrado of quadradinhos){
        quadrado.style.backgroundColor = "unset";
    }
    resposta.innerHTML = "Jogo resetado !";
}

botao.ondblclick = resetarJogo;