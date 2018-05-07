// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let size = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let color = document.getElementById('colorPicker')
let	canvas = document.getElementById('pixelCanvas');

color.addEventListener('click', function(){});

sizePicker.onsubmit = function (event) {
	event.preventDefault();
	clearGrid();
	makeGrid();
}

function makeGrid() {
	for (let h=0; h<height.value; h++) {
		const row = canvas.insertRow(h);
		for (let w=0; w<width.value; w++) {
				const cell = row.insertCell(w);
				cell.addEventListener('click', fillSquare);
		}
	}
}

function clearGrid() {
	while(canvas.firstChild){
		canvas.removeChild(canvas.firstChild);
	}
}

function fillSquare() {
	this.setAttribute("style", `background-color: ${color.value}`);
}