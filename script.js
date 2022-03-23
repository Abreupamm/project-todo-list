const tarefaSelected = document.getElementById('lista-tarefas');

const limpar = document.getElementById('apaga-tudo');

const tarefaSalvar = document.getElementById('salvar-tarefas');

const button = document.getElementById('criar-tarefa');

const finalizados = document.getElementById('remover-finalizados');

const todaLista = JSON.parse(localStorage.getItem('lista-de-tarefas')) || [];

function criarTarefa() {
  const tarefa = document.createElement('li');
  const tarefa1 = document.querySelector('#texto-tarefa');
  const texto = tarefa1.value;
  tarefa.innerText = texto;
  todaLista.push(texto);
  tarefaSelected.appendChild(tarefa);
  tarefa1.value = '';
}

function mudaCor(event) {
  const temClase = document.getElementsByClassName('cor');
  if (temClase.length > 0) {
    for (let i = 0; i < temClase.length; i += 1) {
      temClase[i].classList.remove('cor');
    }
  }
  const selected = event.target;
  selected.classList.add('cor');
}

function tachada(event) {
  const t = event.target;
  const riscada = document.getElementsByClassName('completed');
  if (riscada.length > 0 && t.classList.contains('completed')) {
    t.classList.remove('completed');
  } else {
    t.classList.add('completed');
  }
}

function limpaLista() {
  const elemento = document.getElementsByTagName('li');
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
  localStorage.setItem('lista-de-tarefas', JSON.stringify(todaLista));
}

// function listaSalva() {
//   const todaLista1 = todaLista;
//   if (todaLista1 !== null) {
//     for (let i = 0; i < todaLista1.length; i += 1) {
//       const tarefa2 = document.createElement('li');
//       const texto2 = todaLista1[i];
//       tarefa2.innerText = texto2;
//       tarefaSelected.appendChild(tarefa2);
//     }
//   }
// }
button.addEventListener('click', criarTarefa);

tarefaSelected.addEventListener('click', mudaCor);

tarefaSelected.addEventListener('dblclick', tachada);

limpar.addEventListener('click', limpaLista);

finalizados.addEventListener('click', removerFinalizados);

tarefaSalvar.addEventListener('click', salvarTarefas);

window.onload = function listaSalva() {
 if(todaLista !== []){
  for (let i = 0; i < todaLista.length; i += 1) {
    const novaLista = document.createElement('li');
    const texto = todaLista[i];
    novaLista.innerText = texto;
    tarefaSelected.appendChild(novaLista);
  }
 }
};
