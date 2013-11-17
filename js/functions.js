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
