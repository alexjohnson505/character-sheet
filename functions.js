// Load JSON text from server hosted file and return JSON parsed object
function loadJSON() {
  // Load json file;
  var json = loadTextFileAjaxSync("character.json");
  // Parse json
  return JSON.parse(optionsText);
} 
function addModal(target) {
	$('#add-modal .modal-title').html("TITLEYEA");
	// $('#add-modal .modal-body').html("yeah");
	$('#add-modal').modal('show');
}