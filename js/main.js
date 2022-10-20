
//Declarando variaveis
const partesDoBoneco = Array.from(document.querySelectorAll(".parte-do-boneco"));

const chutesEfetuados = [];
const palavra = "obi wan kenobi";//essa é a palavra do jogo
let errosCometidos = 0;
const quantidadeMaximadeErros = partesDoBoneco.length;

mostrarPalavra();

//função para mostrar as letras
function mostrarPalavra(){
  let palavraMostrada = "";

  for (let i = 0; i < palavra.length; i = i + 1) {
    if (chutesEfetuados.includes(palavra[i])) {
      palavraMostrada = palavraMostrada + '<span class="letra">' + palavra[i] + '</span>';
    } else if(palavra[i] === " "){
      palavraMostrada = palavraMostrada + " ";
    }else{
      palavraMostrada = palavraMostrada + '<span class="letra">_</span>';
    }
  }
  //Para mostrar o texto no HTML
 document.querySelector(".palavra").innerHTML = palavraMostrada;
}



function chutar() {
  /*If de erros cometidos*/
  if(errosCometidos === quantidadeMaximadeErros){
    alert("Você perdeu");
    return;
  }

  const chute = prompt("qual é o seu chute?");

  if (chutesEfetuados.includes(chute)) {
    alert("Chute ja efetuado");
    return;
  }

  chutesEfetuados.push(chute);

  if(palavra.includes(chute)) {
   
    mostrarPalavra();
 
  } else { //lógica para quando se comete erros
    errosCometidos = errosCometidos + 1;

    //para mostrar o boneco
  for(let i = 0; i < errosCometidos; i = i + 1){
    partesDoBoneco[i].classList.add("mostrar");
}

    if(errosCometidos === quantidadeMaximadeErros){
      alert("Você perdeu");
    }else{
      alert("chute errado, tenta novamente");
    }
  }
}
