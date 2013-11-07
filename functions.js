function getAttributeMod (attribute){
	return Math.floor((characterData[attribute] - 10)/2);
}
function roll (die){
	if (die == "1d20"){
		return Math.floor(Math.random()*20);
	} else {
		return 0;
	}
}

function addModal(target) {
	$('#add-modal .modal-title').html("TITLEYEA");
	// $('#add-modal .modal-body').html("yeah");
	$('#add-modal').modal('show');
}

function rollCheck(target) {
	var skillName = target;
	var skill;

	for (var i = characterData.skills.length - 1; i >= 0; i--) {
		if (characterData.skills[i].name == target) {
			skill = characterData.skills[i];
		}
	};

	var output = Mustache.render(rollCheckTemplate(skill), skill);

	$('#roll-check-modal .modal-body').html(output);
	$('#roll-check-modal').modal('show');
}


function rollCheckTemplate (skill){
	var attribute = skill.attribute;
	var attributeMod = getAttributeMod(attribute);
	var d20roll = roll("1d20");
	var sum = attributeMod + d20roll;

	return  "Skill: {{name}}<br>" + 
		d20roll + " : 1d20 Base Roll<br>" + 
		attributeMod + " : {{attribute}} Modifier<br><strong>" + 
		sum + " : SUM<strong>";
}

