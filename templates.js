var templates = {
	"spellCast" : "Name : {{name}}<br>Description : {{description}}<br>Damage Type : {{damage-type}}<br>Attribute: {{attribute}}<br>Attribute Mod: {{attributeMod}}<br><br><strong>{{damage}} : DAMAGE</strong><br>Spell DC: {{spellDC}}",
	"skillCheck" : "Skill: {{name}}<br>{{d20roll}} : 1d20 Base Roll<br>{{attributeMod}} : {{attribute}} Modifier<br><strong> {{sum}} : SUM</strong>",
	"weaponAttack" : 'Name : {{name}}<br>Description : {{description}}<br>Damage : {{damage}}<br>Damage type : {{damage-type}}<br>Attribute: {{attribute}}<br>Attribute Mod: {{attributeMod}}<br>{{d20roll}} : 1d20 Roll<br>You roll a {{toHit}} To-Hit. Ask your DM - does this Hit or Miss?',
	"hit-or-miss" : '<div class="hit-or-miss"><button type="button" class="btn btn-primary" onclick="attackConfirmation(\'hit\')";>Hit</button><button type="button" class="btn btn-danger" onclick="attackConfirmation(\'miss\')";>Miss</button></div>',
	"footerClose" : '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
	"abilityScore": "<tr><td>{{attributeName}}</td><td>{{attribute}}</td><td>{{attributeMod}}</td></tr>",
	"skill"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="skillCheck(\'{{name}}\');"></td></tr>',
	"attack" :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="rollAttack(\'{{name}}\');"></td></tr>',
	"spell"  :  '<tr><td><i class="fa {{icon}}"></td><td>{{name}}</td><td class="die" onclick="rollSpell(\'{{name}}\');"></td></tr>'
}
