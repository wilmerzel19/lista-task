var todolist = document.querySelector('.todo__list');
var inputBtn = document.querySelector('input[name="add"]');
var plusBtn = document.getElementById('plus');
var filter = document.querySelector('.filter');
var max_id = 3;

window.onload = function() {
    let deleteIcons = document.querySelectorAll('.item__trash-can');

    deleteIcons.forEach((node, index) => {
        node.addEventListener('click', (e) => {
            const parentElement = e.target.parentElement;
            todolist.removeChild(parentElement);
          
          
        });
    });

    filterTodo(filter.value);
}

// Función para eliminar una tarea del LocalStorage
function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filtrar la tarea a eliminar
    tasks = tasks.filter(task => task.id !== taskId);

    // Guardar la nueva lista de tareas en el LocalStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTodo(inputVal) {
	let item = document.createElement("LI");
	let inputCheckbox = document.createElement('INPUT');
	let label = document.createElement('LABEL');
	let customCheckbox = document.createElement('SPAN');
	let labelWord = document.createElement('SPAN');
	let checkPointer = document.createElement('I');
	let trashCan = document.createElement('I');

	// increment max id
	let newID = (max_id += 1);

	// outer <li> initialize
	item.setAttribute('class', 'todo__item');

	// checkbox input initialize
	inputCheckbox.setAttribute('type', 'checkbox');
	inputCheckbox.setAttribute('id', `todo-${newID}`);
	inputCheckbox.addEventListener('change', (e) => {
		handleCheck(`todo-${newID}`);
	});

	// label initialize
	label.setAttribute('for', `todo-${newID}`);
	// customized checkbox
	customCheckbox.setAttribute('class', 'check__box');
	// label word
	labelWord.setAttribute('class', 'item__title');
	labelWord.textContent = inputVal;

	// check pointer
	checkPointer.setAttribute('class', 'far fa-check check__pointer');
	// delete trash can
	trashCan.setAttribute('class', 'fas fa-trash-alt item__trash-can');

	// combine elements
	customCheckbox.appendChild(checkPointer);
	
	label.appendChild(customCheckbox);
	label.appendChild(labelWord);

	item.appendChild(inputCheckbox);
	item.appendChild(label);
	item.appendChild(trashCan);
	if(filter.value === 'completed')
		item.classList.add('invisible');

	todolist.appendChild(item);

	trashCan.addEventListener('click', (e) => {
		todolist.removeChild(e.target.parentElement);
	});
}

function filterTodo(filterType) {
	let Todos = document.querySelectorAll('.todo__item');

	Todos.forEach((item, index) => {
		let checkbox = item.querySelector('input[type="checkbox"]');

		if(filterType === 'all') {
			item.classList.remove("invisible");
		}
		else if(filterType === 'undo') {
			if(checkbox.checked)
				item.classList.add("invisible");
			else
				item.classList.remove("invisible");
		}
		else if (filterType === 'completed') {
			if(!checkbox.checked)
				item.classList.add("invisible");
			else
				item.classList.remove("invisible");
		}		
	});
}

function handleCheck(ID) {
	let checkbox = document.querySelector(`input[id=${ID}]`);
	let item = checkbox.parentElement;
	let filterType = filter.value;

	console.log(filterType, checkbox);

	if(filterType === 'undo' && checkbox.checked) {
		item.classList.add("invisible");
	}
	else if (filterType === 'completed' && !checkbox.checked) {
		item.classList.add("invisible");
	}
}

function handleAddInput() {
	let inputVal = inputBtn.value.trim();

	if(inputVal === "")
		return;

	addTodo(inputVal);
	inputBtn.value = "";
}

inputBtn.addEventListener('keypress', (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		handleAddInput();
	}
});

plusBtn.addEventListener('click', (e) => handleAddInput());
filter.addEventListener('change', (e) => {
	filterTodo(e.target.value);
});
// Código JavaScript para llenar dinámicamente el select de asignaturas
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento select
    var selectElement = document.getElementById("asignaturas");

    // Lista de asignaturas
    var nuevasAsignaturas = ["Nueva Asignatura 1", "Nueva Asignatura 2", "Nueva Asignatura 3"];

    // Función para agregar opciones al select
    function agregarOpcionesAsignaturas() {
        for (var i = 0; i < nuevasAsignaturas.length; i++) {
            var option = document.createElement("option");
            option.text = nuevasAsignaturas[i];
            option.value = "nueva_asignatura_" + i;
            selectElement.appendChild(option);
        }
    }

    // Llamar a la función para agregar opciones
    agregarOpcionesAsignaturas();
});

var todolist = document.getElementById('todoList');
var max_id = 1; // ID inicial

// Crear un ciclo para agregar múltiples elementos
for (let i = 0; i < 3; i++) {


	// Incrementar el ID máximo
	max_id += 1;

	// Configurar el elemento LI
	item.setAttribute('class', 'todo__item');

	// Configurar la casilla de verificación
	inputCheckbox.setAttribute('type', 'checkbox');
	inputCheckbox.setAttribute('id', `todo-${max_id}`);
	inputCheckbox.addEventListener('change', (e) => {
		handleCheck(`todo-${max_id}`);
	});

	// Configurar la etiqueta
	label.setAttribute('for', `todo-${max_id}`);
	customCheckbox.setAttribute('class', 'check__box');
	labelWord.setAttribute('class', 'item__title');
	labelWord.textContent = "New Task " + max_id;

	// Configurar el ícono de verificación
	checkPointer.setAttribute('class', 'far fa-check check__pointer');

	// Configurar el ícono de eliminación
	trashCan.setAttribute('class', 'fas fa-trash-alt item__trash-can');
	trashCan.addEventListener('click', (e) => {
		todolist.removeChild(e.target.parentElement);
	});

	// Combinar elementos
	customCheckbox.appendChild(checkPointer);
	label.appendChild(customCheckbox);
	label.appendChild(labelWord);
	item.appendChild(inputCheckbox);
	item.appendChild(label);
	item.appendChild(trashCan);

	todolist.appendChild(item);
}
