'use strict'

//------------------------- Working array -------------------------//
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Practicar cada dia mas programacion,', completed: true },
    { name: 'Regalar algo a mi hermana por ayudarme tanto xD', completed: false },
    { name: 'Ayudar a guido para que no sea un programador Junior', completed: true},
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',completed: false}
  ]
//------------------------------------------------Global variables----------------------------------//
  const list = document.querySelector('.list');
  const firstH1 = document.querySelector('.title');
  let positiveAccumulator = 0;
  let accumulatorNegative = 0;

//--------------Initial values ​​of the completed property of the working array----------------------//
function InitialValueOfArray(array) {
  for (let index = 0; index < array.length; index++) {
    const first = array[index].completed;
      if (first === true) {
      positiveAccumulator += first
      }else {
      first === false
      accumulatorNegative += (first + 1)
      }
    }
      firstH1.innerHTML = `<h3>Tienes: ${array.length} tareas</h3>` + `<h3>Completadas = ${positiveAccumulator}</h3>` + `<h3> Faltan = ${accumulatorNegative}</h3>`
      return positiveAccumulator + accumulatorNegative;
  }
InitialValueOfArray(tasks)

//------------------------------------Html display of the array we manipulate--------------------//
function pushHtml(array, selectorHtml) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].completed === true)  {
    selectorHtml.innerHTML += `<li class="li through">${array[index].name}</li>` + `<input class="input"  type="checkbox"  checked>`;
    }else {
    selectorHtml.innerHTML += `<li class="li">${array[index].name}</li>` + `<input class="input"  type="checkbox">`;
    }
  }
//--------------------------Variables created after array deployment in html------------------//
    const li = document.querySelectorAll('.li');
    const input = document.querySelectorAll('input.input');

//---------------Loop to get arrays of inputs, add and subtract to initial values  ---------------------------      ---------------------------------of the completed property of array-------------------------------------------//
  for (let index = 0; index < input.length; index++) {
    input.item(index).addEventListener('click', () =>  {
      if (array[index].completed === true) {
          array[index].completed = false;
          positiveAccumulator += -1
          accumulatorNegative += 1
          li.item(index).classList.remove('through');
      }else if (array[index].completed === false) {
          array[index].completed = true;
          positiveAccumulator += 1
          accumulatorNegative += -1
          li.item(index).classList.add('through');
      }
//------------------------Printing in html of the results of the property completed------------------//
          firstH1.innerHTML = `<h3>Tienes: ${array.length} tareas</h3>` + `<h3>Completadas = ${positiveAccumulator}</h3>` + `<h3> Faltan = ${accumulatorNegative}</h3>`
        })
      }
  }  

pushHtml(tasks, list)