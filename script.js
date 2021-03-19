// DEVEOLOPMENT PLANS FOR MAR 19
// TODO: Implement dropdown menu selector for attributes
// TODO: Implement a simple keras model
// TODO: Implement a simple prediction interface

console.log("Hello SOCR!")
let inputField = document.getElementById('fileInput')
let infoField = document.getElementById('fileInfoContainer')
let submitForm = document.getElementById('submitButton')
let viewButton = document.getElementById('viewFile')
let fileBox = document.getElementById('fileContentContainer')
let carSelection = document.getElementById('cars')
let featureField = document.getElementById('featureSelection')
let labelField = document.getElementById('labelField')
let result;
let file; // will come in handy

function uploadOperation() {
	file = this.files[0];
	const timeModified = new Date(file.lastModified).toLocaleString('en-US');

	// Clear div container
	infoField.innerText = "";

	// This code is only for demo ...
	console.log("name : " + file.name);
	console.log("size : " + file.size);
	console.log("type : " + file.type);
	console.log("date : " + timeModified);

	infoField.innerText += ("name : " + file.name + "\n");
	infoField.innerText += ("size : " + file.size + "\n");
	infoField.innerText += ("type : " + file.type + "\n");
	infoField.innerText += ("date : " + timeModified + "\n");
	console.log("Document uploaded!");

	// TODO: Implement all these parameters as customizable UI Interfaces!
	Papa.parse(file, {
		complete: function(results) {
			console.log(results);
			result = results;
		}
	});
}

// TODO: Convert this into a dropdown menu!
function loadAttributes() {
	let attributes = result['data'][0]
	featureField.innerHTML = "";
	labelField.innerHTML = "";
	fileBox.innerText = "";

	for (let i = 0; i < attributes.length; i++) {
		fileBox.innerText += (attributes[i] + "\n");
		featureField.innerHTML += "<option value = \"" + attributes[i] +
			"\">" + attributes[i] + "</option>";
		labelField.innerHTML += "<option value = \"" + attributes[i] +
			"\">" + attributes[i] + "</option>";
	}

	// Format for option in dropdown menu
	// <option value="volvo">Volvo</option>


}

inputField.addEventListener('change', uploadOperation)
submitForm.addEventListener('click', function(){console.log("Button clicked!")})
viewButton.addEventListener('click', loadAttributes)
carSelection.addEventListener('change', function() {
	console.log(carSelection.value);
})
