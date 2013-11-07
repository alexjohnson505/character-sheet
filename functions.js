
// Return attribute modifier for given attribute
function getAttributeMod (attribute){
	return Math.floor((characterData[attribute] - 10)/2);
}

// Temporary fake-die-roll calculation
function roll (die){
	if (die == "1d20"){
		return Math.floor(Math.random()*20);
	} else if (die == "12d6"){
		return Math.floor(Math.random()*72);
	} else if (die == "1d6"){
		return Math.floor(Math.random()*72);
	} else {
		return 0;
	}
}

// Renders given data and open modal based on id
function openModal (title, html) {
	$('#roll-modal .modal-title').html(title);
	$('#roll-modal .modal-body').html(html);
	$('#roll-modal .modal-prompt').html();
	$('#roll-modal .modal-footer').html(templates.footerClose);

	  


	$('#roll-modal').modal('show');
}

// Performs roll for a skill check
function skillCheck (target) {
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

	var output = Mustache.render(templates.skillCheck, skillData);
	openModal("Roll a Skill", output);
}

// Roll the damage for a spell
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
	spellData['attributeMod'] = getAttributeMod(spell.attribute);

	var output = Mustache.render(templates.spellCast, spellData);
	openModal("Cast a Spell", output);
}

// Roll the to-hit and damage for an attack
function rollAttack (target){
	var attackName = target;
	var attack;

	for (var i = characterData.attacks.length - 1; i >= 0; i--) {
		if (characterData.attacks[i].name == target) {
			attack = characterData.attacks[i];
		}
	};

	// global : attack data
	// saves last used attacks information
	attackData = attack;
	attackData['attributeMod'] = getAttributeMod(attack.attribute);
	attackData['d20roll'] = roll("1d20");
	attackData['toHit'] = attackData['d20roll'] + attackData['attributeMod'];

	var output = Mustache.render(templates.weaponAttack, attackData);
	openModal("Make an Attack", output);
	$('#roll-modal .modal-prompt').html(templates['hit-or-miss']);

}

function attackConfirmation (status){
	
	if (status == "hit"){
		var damage = attackData['d20roll'] + attackData['attributeMod'] + roll(attackData['damage']);
		$('#roll-modal .modal-prompt').html("<br>Your attack Hits!!!!<strong>" + damage + " DAMAGE</strong>");

	} else if (status == "miss") {
		$('#roll-modal .modal-prompt').html("Bummer. Your attack missed.   ");
	}
}