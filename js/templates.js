var templates = {
	"spellCast" : 
		'<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
		<tr><td>Description</td><td>{{description}}</td></tr>\
		<tr><td>Damage Typ</td><td>{{damage-type}}</td></tr>\
		<tr><td>Attribute</td><td>{{attribute}}</td></tr>\
		<tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr>\
		<tr><td>Spell DC</td><td>{{spellDC}}</td></tr></table>\
		<i class="sum"><strong>{{inflictedDamage}} : Spell Damage</strong></i><br>',
	"skillCheck" : 
		'<table class="table table-hover"><tr><td>Skill Name</td><td>{{name}}</td></tr>\
		<tr><td>{{attributeMod}}</td><td>{{attribute}} Modifier</td></tr></table>',
	"skillRoll" : "You roll a {{roll}} on your {{name}} check. <br>Calculated by rolling a {{d20roll}} (1d20) + Attribute Mod {{attributeMod}}",
	"weaponAttack" : 
		'<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
		<tr><td>Description</td><td>{{description}}</td></tr>\
		<tr><td>Damage</td><td>{{damage}}</td></tr>\
		<tr><td>Damage type</td><td>{{damage-type}}</td></tr>\
		<tr><td>Attribute</td><td>{{attribute}}</td></tr>\
		<tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr></table>\
		{{d20roll}}1d20 Roll\
		You roll a {{toHit}} To-Hit. Ask your DM - does this Hit or Miss?',
	"skill-edit-or-roll" : '<div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="editSkill(\'hit\')";>Edit</button><button type="button" class="btn btn-danger" onclick="rollSkill(\'miss\')";>Roll</button></div>',
	"spell-edit-or-roll" : '<div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="editSkill(\'hit\')";>Edit</button><button type="button" class="btn btn-danger" onclick="rollSpell(\'miss\')";>Roll</button></div>',
	"hit-or-miss" : '<div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="attackConfirmation(\'hit\')";>Hit</button><button type="button" class="btn btn-danger" onclick="attackConfirmation(\'miss\')";>Miss</button></div>',
	"footerClose" : '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
	"abilityScore" : "<tr><td>{{attributeName}}</td><td>{{attribute}}</td><td>{{attributeMod}}</td></tr>",
	"characterStats" : '<div class="img-thumbnail"><i class="fa fa-picture-o"></i></div><form class="form-horizontal"><div class="form-group"><label class="col-sm-4 control-label">Name</label><div class="col-sm-8"><p type="email" class="form-control">{{name}}</p></div><label class="col-sm-4 control-label">Class</label><div class="col-sm-8"><p type="email" class="form-control">{{class}}</p></div><label class="col-sm-4 control-label">Race</label><div class="col-sm-8"><p type="email" class="form-control">{{race}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-heart"></i> HP</label><div class="col-sm-8"><p type="email" class="form-control">{{currentHP}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-shield"></i>AC</label><div class="col-sm-8"><p type="email" class="form-control">{{currentAC}}</p></div></div></form>',
	
	"skill"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSkill(\'{{name}}\');"></td></tr>',
	"attack" :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewAttack(\'{{name}}\');"></td></tr>',
	"spell"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="viewSpell(\'{{name}}\');"></td></tr>'
}
