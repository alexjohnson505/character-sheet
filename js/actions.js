
/**
 * SKILLS
 */

// view the details of a skill
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

// edit the details of a skill
function editSkill() {
    alert("functionality coming soon");
}

// roll a skill check
function rollSkill (){
    skillData['roll'] = skillData['baseRoll'] + skillData['attributeMod'];
    dieAnimation(templates.rollSkill, skillData);
}

/**
 * SPELLS
 */

// view the details of a spell
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

// edit the detauls of a spell
function editSpell() {
    alert("functionality coming soon");
}

// roll the damage of a spell
function rollSpell (){
    spellData['inflictedDamage'] = roll(spellData.damage);
    dieAnimation(templates.rollSpell, spellData);
}

/**
 * ATTACKS
 */

// view the details of an attack
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


// edit the details of an attack
function editAttack() {
    alert("functionality coming soon");
}

// roll the to-hit of an attack, prompt for Hit or Miss
function rollAttack() {
    attackData['d20roll'] = roll("1d20");
    attackData['toHit'] = attackData['d20roll'] + attackData['attributeMod'];
    dieAnimation(templates.rollToHit, attackData);
}

// roll the damage of an attack
function attackConfirmation (status){
    if (status == "hit"){
        attackData['damageRoll'] = roll(attackData['damage']);
        attackData['inflictedDamage'] = attackData['attributeMod'] + attackData['damageRoll'];

        var rollTime = 900;
        var output = Mustache.render(templates.rollAttack, attackData);
    } else if (status == "miss") {
        var rollTime = 0;
        var output = "Bummer. Your attack missed.";
    }

    $('#roll-modal .modal-prompt .dm-prompt, .hit-or-miss').remove();
    
    $('#roll-modal .modal-prompt').append(templates["die-animation"]);

    setTimeout( function(){
        $(".die-animation").remove();
        $('#roll-modal .modal-prompt').append(output);
    }, rollTime);
}