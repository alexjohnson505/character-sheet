// Return attribute modifier for given attribute
function getAttributeMod (attribute){
	return Math.floor((characterData[attribute] - 10)/2);
}
function roll (die){
	if (die == "1d20"){
		return Math.floor(Math.random()*20);
	} else if (die == "12d6"){
		return Math.floor(Math.random()*72);
	} else {
		return 0;
	}
}

// Performs roll for a skill check
function rollCheck (target) {
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
		sum + " : SUM</strong>";
}

function rollAttack (target){
	var attackName = target;
	var attack;

	for (var i = characterData.attacks.length - 1; i >= 0; i--) {
		if (characterData.attacks[i].name == target) {
			attack = characterData.attacks[i];
		}
	};

	console.log(attack);
}

function rollSpell (target){
	var spellName = target;
	var spell;

	for (var i = characterData.spells.length - 1; i >= 0; i--) {
		if (characterData.spells[i].name == target) {
			spell = characterData.spells[i];
		}
	};

	var output = Mustache.render(rollSpellTemplate(spell), spell);
	$('#roll-spell-modal .modal-body').html(output);
	$('#roll-spell-modal').modal('show');

}
// Render spell damage
function rollSpellTemplate (spell){

	var damage = roll(spell.damage);
	var spellDC = 10 + getAttributeMod(spell.attribute);

	return  "Name : {{name}}<br>" + 
		"Description : {{description}}<br>" + 
		"Damage Type : {{damage-type}}<br><strong>" + 
		damage + " : DAMAGE</strong><br>" + 
		"Spell DC: " + spellDC;

// Damage Rolled: 

}



