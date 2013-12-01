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
    // Character change history
    $('#history table').append(tabelizeData(changeHistory, "history"));
}

// Returns character data formatted as an HTML form.
function renderCharacterStats (){
    var characterStats = characterData;
    characterStats['currentHP'] = characterData.hp + " Hit Points";
    characterStats['currentAC'] = characterData.ac + " Armor Class";

    return Mustache.render(templates.characterStats, characterStats);
}

//
function sumArray(arr, key) {
    var total = 0;
    $.each(arr, function() {
        total += this[key];
    });
    return total
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

// Show die animation for <1s, then replace with data
function dieAnimation(result){
    $('#roll-modal .modal-prompt').html(templates["die-animation"]);

    setTimeout( function(){
        $('#roll-modal .modal-prompt').html(result);
    }, 900);
}

// Find the skill
function getSkill(target){
    for (var i = characterData.skills.length - 1; i >= 0; i--) {
        if (characterData.skills[i].name == target) {
            return characterData.skills[i];
        }
    };
}
// Find the spell
function getSpell(target){
    for (var i = characterData.spells.length - 1; i >= 0; i--) {
        if (characterData.spells[i].name == target) {
            return characterData.spells[i];
        }
    };
}
// Find the attack
function getAttack(target){
    for (var i = characterData.attacks.length - 1; i >= 0; i--) {
        if (characterData.attacks[i].name == target) {
            return characterData.attacks[i];
        }
    };
}

$.fn.form = function() {
    var formData = {};
    this.find('[name]').each(function() {
        formData[this.name] = this.value;  
    })
    return formData;
};