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
	"rollSkill" : 'You roll: <table class="roll-table"><tr><td></td><td>{{baseRoll}}</td><td><strong>base</strong> ({{baseDice}})</td></tr><tr><td><strong>+</strong></td><td>{{attributeMod}}</td><td><strong>{{attribute}} mod</strong></td></tr><tr><td></td><td><strong>{{roll}}</strong></td><td>total</td></tr></table><p class="triangle-isosceles top">Report this result to your DM</p>',
    
    "viewAttack" : 
        '<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
        <tr><td>Description</td><td>{{description}}</td></tr>\
        <tr><td>Damage</td><td>{{damage}}</td></tr>\
        <tr><td>Damage type</td><td>{{damage-type}}</td></tr>\
        <tr><td>Attribute</td><td>{{attribute}}</td></tr>\
        <tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr></table>',
    "rollToHit" : 'You roll a {{toHit}} on your To-Hit with your {{name}}. <br>Calculated by rolling a {{d20roll}} (1d20) + Attribute Mod {{attributeMod}} <br><a onclick="rollAttack()">Roll Again</a><br><p class="dm-prompt"> Ask your DM, does this Hit or Miss?</p> <br><div class="hit-or-miss"><button type="button" class="btn btn-warning" onclick="attackConfirmation(\'hit\')";>Hit</button><button type="button" class="btn btn-primary" onclick="attackConfirmation(\'miss\')";>Miss</button></div>',
    "rollAttack" : "Your attack Hits!!! You inflict {{inflictedDamage}} Damage. <br> Calculated by rolling {{damageRoll}} ({{damage}} die) + {{attributeMod}} Ability Mod",

    "edit-or-roll" : '<div class="hit-or-miss"><button type="button" class="btn btn-default" onclick="edit{{type}}()";>Edit</button><button type="button" class="btn btn-danger" onclick="roll{{type}}()";>Roll</button></div>',
    
    "footerClose" : '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
    "abilityScore" : "<tr><td>{{attributeName}}</td><td>{{attribute}}</td><td>{{attributeMod}}</td></tr>",
    "characterStats" : '<div class="img-thumbnail"><i class="fa fa-picture-o"></i></div><form class="form-horizontal"><div class="form-group"><label class="col-sm-4 control-label">Name</label><div class="col-sm-8"><p type="email" class="form-control">{{name}}</p></div><label class="col-sm-4 control-label">Class</label><div class="col-sm-8"><p type="email" class="form-control">{{class}}</p></div><label class="col-sm-4 control-label">Race</label><div class="col-sm-8"><p type="email" class="form-control">{{race}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-heart"></i> HP</label><div class="col-sm-8"><p type="email" class="form-control">{{currentHP}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-shield"></i>AC</label><div class="col-sm-8"><p type="email" class="form-control">{{currentAC}}</p></div></div></form>',

    "die-animation" : "<div class='die-animation'></div>",
    
    "skill"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSkill(\'{{name}}\');"></td></tr>',
    "attack" :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewAttack(\'{{name}}\');"></td></tr>',
    "spell"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSpell(\'{{name}}\');"></td></tr>'
}
