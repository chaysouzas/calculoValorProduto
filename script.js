let interacaoComprar = document.querySelector('input', comprar);

interacaoComprar.addEventListener('click', mostrarCondicoes);

function mostrarCondicoes(){

    let condicoes = document.getElementById("condicoesPagamento");

    if(condicoes.style.display === "none" || condicoes.style.display === ""){
        condicoes.style.display = "block"; // Mostra condições 
    } else condicoes.style.display = "none"; //Esconde condições se clicado novamente
}

//Calculo VALOR DEBITO

let pagDebito = document.querySelector('input', debito);
pagDebito.addEventListener('click', debito);

function calcularDebito(){

    let valorTotal = 169.90;
    let desconto = 10;
    let valorComDesconto = valorTotal - (valorTotal * 0.1);

    let resultadoDebito = document.getElementById('valorPagoNoDebito');

    resultadoDebito.innerHTML = `<p>Valor Total: R$ ${valorComDesconto.toFixed(2)}</p>`

}

//Calculo VALOR DINHEIRO

let pagDinheiro = document.querySelector('input', dinheiro);
pagDinheiro.addEventListener('click', dinheiro);

function calcularDinheiro(){

    let valorTotal = 169.90;
    let desconto = 15;
    let valorComDesconto = valorTotal - (valorTotal * 0.15);

    let resultadoDinheiro = document.getElementById('valorPagoDinheiro');

    resultadoDinheiro.innerHTML = `<p> Valor Total: R$ ${valorComDesconto.toFixed(2)} </p> `

}

//Calculo VALOR PIX

let pagPix = document.querySelector('input', pix);
pagPix.addEventListener('click', pix);

function calcularPix(){

    let valorTotal = 169.90;
    let desconto = 15;
    let valorComDesconto = valorTotal - (valorTotal * 0.15);

    let resultadoPix = document.getElementById('valorPagoPix');

    resultadoPix.innerHTML = `<p> Valor Total: R$ ${valorComDesconto.toFixed(2)}</p>`

}

//Calculo VALOR Credito

let pagCredito = document.querySelector('input', credito);
pagCredito.addEventListener('click', credito);

function calcularCredito(){

    let valorTotal = 169.90;
    let acrescimo = 10;
    let valorComAcrescimo= valorTotal + (valorTotal * 0.1);

    let resultadoCredito = document.getElementById('valorPagoNoCredito');

    resultadoCredito.innerHTML = 
    `<p>Valor Total: R$ ${valorComAcrescimo.toFixed(2)}. <br> Valor Parcela: R$ ${(valorComAcrescimo/2).toFixed(2)}.</p>`;

}
