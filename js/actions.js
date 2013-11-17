
/**
 * SKILLS 
 */

// Performs roll for a skill check
function viewSkill (target) {
	var skill;

	// Find the skill
	for (var i = characterData.skills.length - 1; i >= 0; i--) {
		if (characterData.skills[i].name == target) {
			skill = characterData.skills[i];
		}
	};

	skillData = skill;
	skillData['attributeMod'] = getAttributeMod(skill.attribute);
	skillData['d20roll'] = roll("1d20");
	skillData['sum'] = skillData['attributeMod'] + skillData['d20roll'];

	var output = Mustache.render(templates.viewSkill, skillData);
	openModal("Roll a Skill", output);
	$('#roll-modal .modal-prompt').html(templates['skill-edit-or-roll']);
}

function editSkill() {
	alert("functionality coming soon");
}

// Render feedback skill roll
function rollSkill (){
	skillData['roll'] = skillData['d20roll'] + skillData['attributeMod'];
	$('#roll-modal .modal-prompt').html(Mustache.render(templates.rollSkill, skillData));
}

/**
 * SPELLS 
 */

// Roll the damage for a spell
function viewSpell (target){
	var spell;

	// Find the spell
	for (var i = characterData.spells.length - 1; i >= 0; i--) {
		if (characterData.spells[i].name == target) {
			spell = characterData.spells[i];
		}
	};

	spellData = spell;
	spellData['spellDC'] = 10 + getAttributeMod(spell.attribute);
	spellData['attributeMod'] = getAttributeMod(spell.attribute);

	var output = Mustache.render(templates.viewSpell, spellData);
	openModal("Cast a Spell", output);
	$('#roll-modal .modal-prompt').html(templates['spell-edit-or-roll']);
}

function editSpell() {
	alert("functionality coming soon");
}

// Render feedback skill roll
function rollSpell (){
	spellData['inflictedDamage'] = roll(spellData.damage);
	$('#roll-modal .modal-prompt').html(Mustache.render(templates.rollSpell, spellData));
}
/**
 * ATTACKS 
 */


// Roll the to-hit and damage for an attack
function viewAttack (target){
	var attack;

	// Find the attack
	for (var i = characterData.attacks.length - 1; i >= 0; i--) {
		if (characterData.attacks[i].name == target) {
			attack = characterData.attacks[i];
		}
	};

	// attackData: global variables to save the last used attack
	attackData = attack;
	attackData['attributeMod'] = getAttributeMod(attack.attribute);
	attackData['d20roll'] = roll("1d20");
	attackData['toHit'] = attackData['d20roll'] + attackData['attributeMod'];

	var output = Mustache.render(templates.viewAttack, attackData);
	openModal("Make an Attack", output);
	$('#roll-modal .modal-prompt').html(templates['hit-or-miss']);
}

function editAttack() {
	alert("functionality coming soon");
}

// Render feedback after an attack hits/misses
function attackConfirmation (status){
	if (status == "hit"){
		var damage = attackData['d20roll'] + attackData['attributeMod'] + roll(attackData['damage']);
		$('#roll-modal .modal-prompt').html("<br>Your attack Hits!!!!<strong>  " + damage + " DAMAGE</strong>");

	} else if (status == "miss") {
		$('#roll-modal .modal-prompt').html("Bummer. Your attack missed.   ");
	}
}

function rollAttack() {
	alert("functionality coming soon");
}
