var templates = {
    "viewSpell" : 
        '<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
        <tr><td>Description</td><td>{{description}}</td></tr>\
        <tr><td>Damage Typ</td><td>{{damage-type}}</td></tr>\
        <tr><td>Attribute</td><td>{{attribute}}</td></tr>\
        <tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr>\
        <tr><td>Spell DC</td><td>{{spellDC}}</td></tr></table>',
    "rollSpell" : "Your spell {{name}} inflicts {{inflictedDamage}}. <br> Calculated by rolling {{damage}}",
    
    "viewSkill" : 
        '<table class="table table-hover"><tr><td>Skill Name</td><td>{{name}}</td></tr>\
        <tr><td>{{attributeMod}}</td><td>{{attribute}} Modifier</td></tr></table>',
    "rollMods" : '<strong>{{title}}</strong>: <table class="roll-table">{{#rollcomps}}<tr><td><strong>{{spec}}</strong></td><td>{{{number}}}</td><td>{{{desc}}}</td></tr>{{/rollcomps}}<tr><td></td><td>{{sum}}</td><td><strong>total</strong></td></tr></table>',
    "dmPrompt" : '<p class="triangle-isosceles top">{{message}}</p>',
    "viewAttack" : 
        '<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
        <tr><td>Description</td><td>{{description}}</td></tr>\
        <tr><td>Damage</td><td>{{damage}}</td></tr>\
        <tr><td>Damage type</td><td>{{damage-type}}</td></tr>\
        <tr><td>Attribute</td><td>{{attribute}}</td></tr>\
        <tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr></table>',
    "confToHit" : '<a onclick="rollAttack()">Roll Again</a><br><div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="attackConfirmation(\'hit\')";>Hit</button><button type="button" class="btn btn-danger" onclick="attackConfirmation(\'miss\')";>Miss</button></div>',
    "rollAttack" : "Your attack Hits!!! You inflict {{inflictedDamage}} Damage. <br> Calculated by rolling {{damageRoll}} ({{damage}} die) + {{attributeMod}} Ability Mod",

    "edit-or-roll" : '<div class="hit-or-miss"><button type="button" class="btn btn-default" onclick="edit{{type}}()";>Edit</button><button type="button" class="btn btn-danger" onclick="roll{{type}}()";>Roll</button></div>',
    
    "footerClose" : '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
    "abilityScore" : "<tr><td>{{attributeName}}</td><td>{{attribute}}</td><td>{{attributeMod}}</td></tr>",
    "characterStats" : '<div class="img-thumbnail"><i class="fa fa-picture-o"></i></div><form class="form-horizontal"><div class="form-group"><label class="col-sm-4 control-label">Name</label><div class="col-sm-8"><p type="email" class="form-control">{{name}}</p></div><label class="col-sm-4 control-label">Class</label><div class="col-sm-8"><p type="email" class="form-control">{{class}}</p></div><label class="col-sm-4 control-label">Race</label><div class="col-sm-8"><p type="email" class="form-control">{{race}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-heart"></i> HP</label><div class="col-sm-8"><p type="email" class="form-control">{{currentHP}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-shield"></i>AC</label><div class="col-sm-8"><p type="email" class="form-control">{{currentAC}}</p></div></div></form>',

    "die-animation" : "<div class='die-animation'></div>",
    
    "skill"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSkill(\'{{name}}\');"></td></tr>',
    "attack" :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewAttack(\'{{name}}\');"></td></tr>',
    "spell"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSpell(\'{{name}}\');"></td></tr>',
    "history"  :  '<tr><td>{{target}}</td><td>{{change}}</td><td>{{description}}</td></tr>'
}
