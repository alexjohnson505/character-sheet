// Populate DOM with character specific data
function renderCharacterData (){
	// Stats
	$('#character .panel-body').html(renderCharacterStats())
	// Abilities
	$('#abilities table').html(renderCharacterAbilities());
	// Skills
	$('#skills table').html(tabelizeData(characterData.skills, "skill"));
	// Attacks
	$('#attacks table').html(tabelizeData(characterData.attacks, "attack"));
	// Spells (added to attacks table)
	$('#attacks table').append(tabelizeData(characterData.spells, "spell"));
}

// Returns character data formatted as an HTML form.
function renderCharacterStats (){
	var characterStats = characterData;
	characterStats['currentHP'] = characterData.hp[0].amount + " Hit Points";
	characterStats['currentAC'] = characterData.ac[0].amount + " Armor Class";

	return Mustache.render(templates.characterStats, characterStats);
}

// Return character abilities rendered as HTML table rows
function renderCharacterAbilities(){
	// Associate arrays are annoying to loop through, so we
	// just make a list here of data we want to go through
	var STATS = ["STR", "DEX", "CON", "WIS", "CHA", "INT"];
	var output = "";

	// Collect abilities data, combine rendered templates into single output
	for (var i = 0; i <= STATS.length - 1; i++) {
		STATS[i] = {
			"attributeName" : STATS[i],
			"attribute" : characterData.abilities[STATS[i]],
			"attributeMod" : getAttributeMod([STATS[i]])
		}

		output += Mustache.render(templates.abilityScore, STATS[i]);
	};

	return output;
}

// Given an associative array and template name, renders HTML tables rows
function tabelizeData (category, template){
	var output = "";
	for (var i = category.length - 1; i >= 0; i--) {
		output += Mustache.render(templates[template], category[i]);
	};
	return output;
}

// Return attribute modifier for given attribute
function getAttributeMod (attribute){
	return Math.floor((characterData.abilities[attribute] - 10)/2);
}

// Temporary fake-die-roll calculation
function roll (die){
    var splitted = die.split('d');
    return rollNdX(splitted[0], splitted[1]);
}

// generates random integer between min (inc) and max (inc)
function rollRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// rolls ndx dice
function rollNdX (n, x) {
    var accum = 0;
    for (var i = 0; i < n; i++) {
        accum += rollRange(1, x);
    }
    return accum
}   


// Renders given data and open modal based on id
function openModal (title, html) {
	// Set Modal content
	$('#roll-modal .modal-title').html(title);
	$('#roll-modal .modal-body').html(html);
	$('#roll-modal .modal-prompt').html(" ");
	$('#roll-modal .modal-footer').html(templates.footerClose);

	// Open Modal Window
	$('#roll-modal').modal('show');
}

/**
 * SKILLS 
 */

// Performs roll for a skill check
function viewSkill (target) {
	var skillName = target;
	var skill;

	// Find the skill
	for (var i = characterData.skills.length - 1; i >= 0; i--) {
		if (characterData.skills[i].name == target) {
			skill = characterData.skills[i];
		}
	};

	skillData = skill;
	skillData['attributeMod'] = getAttributeMod(skill.attribute);
    skillData['baseDice'] = "1d20"
	skillData['baseRoll'] = roll(skillData['baseDice']);
	skillData['sum'] = skillData['attributeMod'] + skillData['baseRoll'];

	var output = Mustache.render(templates.viewSkill, skillData);
	openModal("Roll a Skill", output);
	$('#roll-modal .modal-prompt').html(templates['skill-edit-or-roll']);
}

function editSkill() {
	alert("functionality coming soon");
}

// Render feedback skill roll
function rollSkill (){
	skillData['roll'] = skillData['baseRoll'] + skillData['attributeMod'];
	$('#roll-modal .modal-prompt').html(Mustache.render(templates.rollSkill, skillData));
}

/**
 * SPELLS 
 */

// Roll the damage for a spell
function viewSpell (target){
	var spellName = target;
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
	var attackName = target;
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
