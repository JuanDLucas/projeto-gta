/*

objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões das opções das plataformas para a seleção
   Passo 1 - pegar o botão de seleção de plataforma no JS para verificar quando o usuário clicar nele

   Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado

   Passo 3 - pegar o clique do usuário no JS

   Passo 4 - quando o usuário clicar, adicionar a classe ativona listagem de plataformas dentro do botão (para que o conteúdo apareça) 

objetivo 2 - caso a lista de botões de plataformas já esteja apercendo e o usuário clicar no botão de fehcar, o conteúdo deve ser escondido
   Passo 1 - verificar se o botão já está aberto, se sim, devemos remover a classe ativo para ocultar o conteúdo novamente


*/

//objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões das opções das plataformas para a seleção
   
//Passo 1 - pegar o botão de seleção de plataforma no JS para verificar quando o usuário clicar nele
const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");


botao.addEventListener("click", () => {

     elementoPlataformas.classList.toggle("ativo");

})
    