// Return attribute modifier for given attribute
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

// Performs roll for a skill check
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

// Render skill check modal and data
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

