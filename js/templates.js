var templates = {
	"spellCast" : 
		'Name : {{name}}<br>\
		Description : {{description}}<br>\
		Damage Type : {{damage-type}}<br>\
		Attribute: {{attribute}}<br>\
		Attribute Mod: {{attributeMod}}\
		<br><br>\
		<i class="sum"><strong>{{damage}} : Spell Damage</strong></i><br>\
		Spell DC: {{spellDC}}',

	"skillCheck" : 'Skill: {{name}}<br>{{d20roll}} : 1d20 Base Roll<br>{{attributeMod}} : {{attribute}} Modifier<br><strong><i class="sum">{{sum}} : SUM</strong></i>',
	"weaponAttack" : 
		'<table class="table table-hover"><tr><td>Name</td><td>{{name}}</td></tr>\
		<tr><td>Description</td><td>{{description}}</td></tr>\
		<tr><td>Damage</td><td>{{damage}}</td></tr>\
		<tr><td>Damage type</td><td>{{damage-type}}</td></tr>\
		<tr><td>Attribute</td><td>{{attribute}}</td></tr>\
		<tr><td>Attribute Mod</td><td>{{attributeMod}}</td></tr></table>\
		{{d20roll}}1d20 Roll\
		You roll a {{toHit}} To-Hit. Ask your DM - does this Hit or Miss?',
	"hit-or-miss" : '<div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="attackConfirmation(\'hit\')";>Hit</button><button type="button" class="btn btn-danger" onclick="attackConfirmation(\'miss\')";>Miss</button></div>',
	"footerClose" : '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
	"abilityScore" : "<tr><td>{{attributeName}}</td><td>{{attribute}}</td><td>{{attributeMod}}</td></tr>",
	"characterStats" : '<div class="img-thumbnail"><i class="fa fa-picture-o"></i></div><form class="form-horizontal"><div class="form-group"><label class="col-sm-4 control-label">Name</label><div class="col-sm-8"><p type="email" class="form-control">{{name}}</p></div><label class="col-sm-4 control-label">Class</label><div class="col-sm-8"><p type="email" class="form-control">{{class}}</p></div><label class="col-sm-4 control-label">Race</label><div class="col-sm-8"><p type="email" class="form-control">{{race}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-heart"></i> HP</label><div class="col-sm-8"><p type="email" class="form-control">{{currentHP}}</p></div><label class="col-sm-4 control-label"><i class="fa fa-shield"></i>AC</label><div class="col-sm-8"><p type="email" class="form-control">{{currentAC}}</p></div></div></form>',
	"skill"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="skillCheck(\'{{name}}\');"></td></tr>',
	"attack" :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="rollAttack(\'{{name}}\');"></td></tr>',
	"spell"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="rollSpell(\'{{name}}\');"></td></tr>'
}
