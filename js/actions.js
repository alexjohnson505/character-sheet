
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

    // global variable - saves last used spell
    skillData = skill;
    skillData['attributeMod'] = getAttributeMod(skill.attribute);
    skillData['baseDice'] = "1d20"
    skillData['baseRoll'] = roll(skillData['baseDice']);
    skillData['sum'] = skillData['attributeMod'] + skillData['baseRoll'];
    openModal("Roll a Skill", Mustache.render(templates.viewSkill, skillData));
    $('#roll-modal .modal-prompt').html(Mustache.render(templates['edit-or-roll'], {type: "Skill"}));
}

function editSkill() {
    alert("functionality coming soon");
}

// Render feedback skill roll
function rollSkill (){
    skillData['roll'] = skillData['baseRoll'] + skillData['attributeMod'];

    
    $('#roll-modal .modal-prompt').html(templates["die-animation"]);

    setTimeout( function(){
        $('#roll-modal .modal-prompt').html(Mustache.render(templates.rollSkill, skillData));
    }, 900);
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

    // global variable - saves last used spell
    spellData = spell;
    spellData['spellDC'] = 10 + getAttributeMod(spell.attribute);
    spellData['attributeMod'] = getAttributeMod(spell.attribute);

    openModal("Cast a Spell", Mustache.render(templates.viewSpell, spellData));
    $('#roll-modal .modal-prompt').html(Mustache.render(templates['edit-or-roll'], {type: "Spell"}));
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

    // global variable - saves last used attack
    attackData = attack;
    attackData['attributeMod'] = getAttributeMod(attack.attribute);

    openModal("Make an Attack", Mustache.render(templates.viewAttack, attackData));
    $('#roll-modal .modal-prompt').html(Mustache.render(templates['edit-or-roll'], {type: "Attack"}));
}

function editAttack() {
    alert("functionality coming soon");
}

function rollAttack() {
    attackData['d20roll'] = roll("1d20");
    attackData['toHit'] = attackData['d20roll'] + attackData['attributeMod'];
    $('#roll-modal .modal-prompt').html(Mustache.render(templates.rollToHit, attackData));
}

// Render feedback after an attack hits/misses
function attackConfirmation (status){
    if (status == "hit"){
        attackData['damageRoll'] = roll(attackData['damage']);
        attackData['inflictedDamage'] = attackData['attributeMod'] + attackData['damageRoll'];

        var output = Mustache.render(templates.rollAttack, attackData);
    } else if (status == "miss") {
        var output = "Bummer. Your attack missed.";
    }

    $('#roll-modal .modal-prompt .dm-prompt, .hit-or-miss').remove();
    $('#roll-modal .modal-prompt').append(output);
}