const key = "e415d74004de433c55f2fe1a9a7fa9e8";

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
  ).then((resposta) => resposta.json());

  console.log(dados);
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}


// const key = "e415d74004de433c55f2fe1a9a7fa9e8";

// async function buscarCidade(cidade){

//     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then( resposta => resposta.json() )

//     console.log(dados)
// function cliqueiNoBotao() {
//     const cidade = document.querySelector(".input-cidade").value

//     buscarCidade(cidade)
// }
// }
