const tarefaSelected = document.getElementById('lista-tarefas');

const limpar = document.getElementById('apaga-tudo');

const tarefaSalvar = document.getElementById('salvar-tarefas');

const button = document.getElementById('criar-tarefa');

const finalizados = document.getElementById('remover-finalizados');
// const buttonSubir = document.getElementById('mover-cima');

// let todaLista = JSON.parse(localStorage.getItem('lista-de-tarefas')) || [];

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
//   const c = e.classList.contains('cor');
//     let e = elemento.indexOf(c, 0);
//     c.classList.value.remove('cor');
//     let sobe = e - 1;
//     let el2 = elemento[sobe];
//     el2.classList.add('cor');

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
  localStorage.setItem(
    'salvar-tarefas',
    JSON.stringify(tarefaSelected.innerHTML)
  );
}

button.addEventListener('click', criarTarefa);

tarefaSelected.addEventListener('click', mudaCor);

tarefaSelected.addEventListener('dblclick', tachada);

limpar.addEventListener('click', limpaLista);

finalizados.addEventListener('click', removerFinalizados);

tarefaSalvar.addEventListener('click', salvarTarefas);

// buttonSubir.addEventListener('click', subirCor);

window.onload = function listaSalva() {
  const lista = JSON.parse(
    localStorage.getItem('salvar-tarefas', tarefaSelected.innerHTML)
  );
  if (lista) {
    tarefaSelected.innerHTML = lista;
  }
};
