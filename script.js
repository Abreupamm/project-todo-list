// const type = ['Pessoal', 'Trabalho', 'Lista de desejos', 'Compras'];

// const data = [];

const taskSelected = document.getElementById('task-list');
const limpar = document.getElementById('apaga-tudo');
const tarefaSalvar = document.getElementById('salvar-tarefas');
const button = document.getElementById('criar-tarefa');
const finalizados = document.getElementById('remover-finalizados');
const buttonSubir = document.getElementById('mover-cima');
const buttonDescer = document.getElementById('mover-baixo');
const buttonRemove = document.getElementById('remover-selecionado');
const elementLi = document.getElementsByTagName('li');
const isSelected = document.getElementsByClassName('selected');

function saveTasks() {
  localStorage.setItem('salvar-tarefas', JSON.stringify(taskSelected.innerHTML));
}

function createIcon(type) {
  const img = document.createElement('img');
  img.classList = 'type-icon'
  switch (type) {
    case 'pessoal':
    img.src = 'images/do-utilizador.png';
    break;
    case 'trabalho':
    img.src = 'images/briefcase.png';
    break;
    case 'desejo':
    img.src = 'images/favorito.png';
    break;
    case 'compras':
    img.src = 'images/bolsa-de-compras.png';
    break;
 
  default:
    break;
 }
 return img;
}

// function salveData(name, type) {
//   const id = data.length + 1;
//   const salveData = {id, name, type};
//   data.push(salveData);
//   return;
// };

function createTask() {
  const type = document.getElementById('task-type');
  const option = type.options[type.selectedIndex].value;
  const task = document.getElementById('task-text');
  if (!task.value) {
    alert('É necessario criar uma tarefa');
  } else {
    const taskList = document.createElement('li');
    taskList.classList.add('list', option);
    taskList.innerText = task.value;
    taskSelected.appendChild(taskList);
    taskList.appendChild(createIcon(option));
    task.value = null;
    saveTasks();
  }
};


function mudaCor(event) {
  if (temClase.length > 0) {
    for (let i = 0; i < temClase.length; i += 1) {
      temClase[i].classList.remove('cor');
    }
  }
  const selected = event.target;
  selected.classList.add('cor');
}

function caminhaSelected(i, i2) {
  const item1 = elementLi[i].innerHTML;
  const item2 = elementLi[i2].innerHTML;
  elementLi[i].innerHTML = item2;
  elementLi[i2].innerHTML = item1;

  const class1 = elementLi[i].classList.value;
  const class2 = elementLi[i2].classList.value;
  elementLi[i].classList = class2;
  elementLi[i2].classList = class1;
}

function subir() {
  for (let i = 1; i < elementLi.length; i += 1) {
    if (elementLi[i].classList.contains('cor')) {
      const i2 = i - 1;
      caminhaSelected(i, i2);
    }
  }
}

function descer() {
  for (let i = elementLi.length -2; i >= 0; i -= 1) {
    if (elementLi[i].classList.contains('cor')) {
      const i2 = i + 1;
      caminhaSelected(i, i2);
    }
  }
}

function tachada(event) {
  const t = event.target;
  if (t.classList.contains('completed')) {
    t.classList.remove('completed');
  } else {
    t.classList.add('completed');
  }
}

function limpaLista() {
  for (let i = elementLi.length - 1; i >= 0; i -= 1) {
    elementLi[i].remove();
  }
}

function removerFinalizados() {
  const itens = document.getElementsByClassName('completed');
  for (let i = itens.length - 1; i >= 0; i -= 1) {
    itens[i].remove();
  }
}

function deleteTask() {
  for (let i = 0; i < elementLi.length; i += 1) {
    if (elementLi[i].classList.contains('selected')) {
      elementLi[i].remove();
    }
  }
  saveTasks();
};



button.addEventListener('click', createTask);
taskSelected.addEventListener('click', mudaCor);
taskSelected.addEventListener('dblclick', tachada);
limpar.addEventListener('click', limpaLista);
finalizados.addEventListener('click', removerFinalizados);
buttonSubir.addEventListener('click', subir);
buttonDescer.addEventListener('click', descer);
buttonRemove.addEventListener('click', deleteTask);

window.onload = function listSave() {
  const lista = JSON.parse(
    localStorage.getItem('salvar-tarefas', taskSelected.innerHTML));
  if (lista) {
    taskSelected.innerHTML = lista;
  }
};
