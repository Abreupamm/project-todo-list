const tarefaSelected = document.getElementById('lista-tarefas');

const limpar = document.getElementById('apaga-tudo');

const tarefaSalvar = document.getElementById('salvar-tarefas');

const button = document.getElementById('criar-tarefa');

const finalizados = document.getElementById('remover-finalizados');
const buttonSubir = document.getElementById('mover-cima');

let todaLista = JSON.parse(localStorage.getItem('lista-de-tarefas')) || [];

function criarTarefa() {
  const tarefa = document.createElement('li');
  const tarefa1 = document.querySelector('#texto-tarefa');
  const texto = tarefa1.value;
  if (texto === '') {
    alert('É necessario criar uma tarefa');
  }
  tarefa.innerText = texto;
  tarefaSelected.appendChild(tarefa);
  tarefa1.value = '';
}
const elemento = document.getElementsByTagName('li');
const temClase = document.getElementsByClassName('cor');

function mudaCor(event) {
  if (temClase.length > 0) {
    for (let i = 0; i < temClase.length; i += 1) {
      temClase[i].classList.remove('cor');
    }
  }
  const selected = event.target;
  selected.classList.add('cor');
}

// function subirCor() {
//   for (let i = 0; i < elemento.length; i += 1) {
//     if(elemento[i].classList.contains('cor')){
//       temClase[0].classList.value = '';
//       let sobe = i + 1;
//       let el2 = elemento[sobe]
//       el2.classList.add('cor');
//     }
//   }

// }
function tachada(event) {
  const t = event.target;
  if (t.classList.contains('completed')) {
    t.classList.remove('completed');
  } else {
    t.classList.add('completed');
  }
}

function limpaLista() {
  for (let i = elemento.length - 1; i >= 0; i -= 1) {
    elemento[i].remove();
  }
}

function removerFinalizados() {
  const itens = document.getElementsByClassName('completed');
  for (let i = itens.length - 1; i >= 0; i -= 1) {
    itens[i].remove();
  }
}

function salvarTarefas() {
  todaLista = [];
  for (let i = 0; i < elemento.length; i += 1) {
    todaLista.push(elemento[i].innerHTML);
  }
  localStorage.setItem('lista-de-tarefas', JSON.stringify(todaLista));
}

button.addEventListener('click', criarTarefa);

tarefaSelected.addEventListener('click', mudaCor);

tarefaSelected.addEventListener('dblclick', tachada);

limpar.addEventListener('click', limpaLista);

finalizados.addEventListener('click', removerFinalizados);

tarefaSalvar.addEventListener('click', salvarTarefas);

// buttonSubir.addEventListener('click', subirCor);

window.onload = function listaSalva() {
  if (todaLista !== []) {
    for (let i = 0; i < todaLista.length; i += 1) {
      const novaLista = document.createElement('li');
      const texto = todaLista[i];
      novaLista.innerHTML = texto;
      tarefaSelected.appendChild(novaLista);
    }
  }
};
