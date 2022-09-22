const taskSelected = document.getElementById('task-list');
const removeAllTalks = document.getElementById('remove-all');
const tarefaSalvar = document.getElementById('salvar-tarefas');
const button = document.getElementById('criar-tarefa');
const finalizados = document.getElementById('remover-finalizados');
const buttonSubir = document.getElementById('mover-cima');
const buttonDescer = document.getElementById('mover-baixo');
const buttonRemove = document.getElementById('remover-selecionado');
const buttonFinished = document.getElementById('finished');
const elementLi = document.getElementsByTagName('li');
const isSelected = document.getElementsByClassName('selected');

function saveTasks() {
  localStorage.setItem(
    'salvar-tarefas',
    JSON.stringify(taskSelected.innerHTML)
  );
  console.log(taskSelected.innerHTML);
}

function createIcon(type) {
  const img = document.createElement('img');
  img.classList = 'type-icon';
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

function createFinished(talk) {
  let element;
  for (let index = 0; index < elementLi.length; index++) {
    if(elementLi[index].innerText === talk.name)
    element = elementLi[index];
  };

  if(talk.checked) {
    element.classList.add('completed');
    talk.classList.add('checked');
  } else {
    element.classList.remove('completed');
    talk.classList.remove('checked');
  }
  
  saveTasks();
};

function finishedTask(talk) {
  if (talk.classList.contains('checkbox')) {
      createFinished(talk);
  }
}

function createTask() {
  const type = document.getElementById('task-type');
  const option = type.options[type.selectedIndex].value;
  const task = document.getElementById('task-text');
  if (!task.value) {
    alert('É necessario criar uma tarefa');
  } else {
    const taskList = document.createElement('li');
    const checkbox = document.createElement('input');
    const div = document.createElement('div');
    div.classList = 'div-icon-talk';
    checkbox.classList = 'checkbox';

    taskList.classList.add('list', option);
    taskList.innerText = task.value;
    checkbox.type = 'checkbox';
    checkbox.name = task.value;

    taskSelected.appendChild(taskList);
    div.appendChild(createIcon(option));
    div.appendChild(checkbox);
    taskList.appendChild(div);
    task.value = null;
    saveTasks();
  }
}

function selectTask(event) {
  const selected = event.target;
  const isElementSelected = selected.classList.contains('selected');

  if (isSelected.length > 0) {
    for (let i = 0; i < isSelected.length; i += 1) {
      isSelected[i].classList.remove('selected');
    }
  }

  if (isElementSelected) {
    selected.classList.remove('selected');
  } else {
    selected.classList.add('selected');
  }
  saveTasks();
  finishedTask(selected);
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
  for (let i = elementLi.length - 2; i >= 0; i -= 1) {
    if (elementLi[i].classList.contains('cor')) {
      const i2 = i + 1;
      caminhaSelected(i, i2);
    }
  }
}

function removeAll() {
  for (let i = elementLi.length - 1; i >= 0; i -= 1) {
    elementLi[i].remove();
  }
  saveTasks();
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
}

button.addEventListener('click', createTask);
taskSelected.addEventListener('click', selectTask);
removeAllTalks.addEventListener('click', removeAll);
finalizados.addEventListener('click', removerFinalizados);
buttonSubir.addEventListener('click', subir);
buttonDescer.addEventListener('click', descer);
buttonRemove.addEventListener('click', deleteTask);

window.onload = function listSave() {
  const lista = JSON.parse(
    localStorage.getItem('salvar-tarefas', taskSelected.innerHTML)
  );
  if (lista) {
    taskSelected.innerHTML = lista;
    const inputCheckbox = document.getElementsByClassName('checkbox')
    for (let index = 0; index < inputCheckbox.length; index++) {
      const element = inputCheckbox[index];
      if(element.classList.contains('checked')) {
        element.checked = true;
      }
    }
  }
};
