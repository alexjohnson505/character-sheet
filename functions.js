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

	var skillData = skill;
	skillData['attributeMod'] = getAttributeMod(skill.attribute);
	skillData['d20roll'] = roll("1d20");
	skillData['sum'] = skillData['attributeMod'] + skillData['d20roll'];

	var output = Mustache.render(templates.rollCheck, skillData);

	openModal("#roll-check-modal", output);
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

	var spellData = spell;
	spellData['damage'] = roll(spell.damage);
	spellData['spellDC'] = 10 + getAttributeMod(spell.attribute);

	var output = Mustache.render(templates.spellCast, spellData);
	
	openModal("#roll-spell-modal", output);
}

function openModal (id, html) {
	$(id + ' .modal-body').html(html);
	$(id).modal('show');
}