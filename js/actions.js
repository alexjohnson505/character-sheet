
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

    // global variable - saves last used skill
    skillData = skill;

    skillData['title'] = "Skill check";
    skillData['rollcomps'] = [
        {'number' : roll("1d20"),
         'desc' : '<strong>base</strong> (1d20)',
         'spec' : ''},
        {'number' : getAttributeMod(skill.attribute),
         'desc' : '<strong>'+skill.attribute+'</strong> mod',
         'spec' : '+'}
    ]
    
    skillData['sum'] = sumArray(skillData['rollcomps'], 'number');

    // skillData['sum'] = skillData['attributeMod'] + skillData['baseRoll'];
    openModal("Roll a Skill", Mustache.render(templates.viewSkill, skillData));
    $('#roll-modal .modal-prompt').html(Mustache.render(templates['edit-or-roll'], {type: "Skill"}));
}

function editSkill() {
    alert("functionality coming soon");
}

// Render feedback skill roll
function rollSkill (){
    msgForDM = {'message' : "Report this result to your DM."};
    skillData['roll'] = skillData['baseRoll'] + skillData['attributeMod'];
    $('#roll-modal .modal-prompt').html(Mustache.render(templates.rollMods, skillData) 
                                        + Mustache.render(templates.dmPrompt, msgForDM));
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
    spellData['title'] = "Spell damage roll";
    spellData['rollcomps'] = [{'number' : roll(spellData.damage),
                               'desc' : '<strong>base</strong> ('+spellData.damage+')',
                               'spec' : '+'}]
    spellData['sum'] = sumArray(spellData['rollcomps'], 'number');
    msgForDM = {'message' : "Report this damage and the Spell DC to the DM."};
    $('#roll-modal .modal-prompt').html(Mustache.render(templates.rollMods, spellData)
                                        + Mustache.render(templates.dmPrompt, msgForDM));
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
    attackData['title'] = "To-hit roll";

    attackData['rollcomps'] = [
        {'number' : roll("1d20"), 'desc' : '<strong>base</strong> (1d20)',
         'spec' : ''},
        {'number' : attackData['attributeMod'], 
         'desc' : '<strong>'+attackData.attribute+'</strong> mod',
         'spec' : '+'}
    ];
    
    attackData['sum'] = sumArray(attackData['rollcomps'], 'number');
    var msgForDM = {'message' : "Report the to-hit roll to the DM and ask if you hit or miss."};
    $('#roll-modal .modal-prompt').html(Mustache.render(templates.rollMods, attackData)
                                        + Mustache.render(templates.dmPrompt, msgForDM)
                                        + Mustache.render(templates.confToHit, {}));
}

// Render feedback after an attack hits/misses
function attackConfirmation (status){
    if (status == "hit"){
        attackData['title'] = "Damage roll";

        attackData['rollcomps'] = [
            {'number' : roll(attackData['damage']), 
             'desc' : '<strong>base</strong> ('+attackData['damage']+')',
             'spec' : ''},
            {'number' : attackData['attributeMod'], 
             'desc' : '<strong>'+attackData.attribute+'</strong> mod',
             'spec' : '+'}
        ];

        attackData['sum'] = sumArray(attackData['rollcomps'], 'number');
        var msgForDM = {'message' : "Report this damage and its type to your DM."};
        
        var output = Mustache.render(templates.rollMods, attackData);
        output += Mustache.render(templates.dmPrompt, msgForDM);
    } else if (status == "miss") {
        var output = "Bummer. Your attack missed.";
    }

    $('#roll-modal .modal-prompt .dm-prompt, .hit-or-miss').remove();
    $('#roll-modal .modal-prompt').append(output);
}