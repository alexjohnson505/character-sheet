var characterData = {
    "name": "Joe the Warrior",
    "class": "Fighter",
    "race": "Half-Orc",
    "hp": 25,
    "ac": 12,
    "abilities" : {
        "STR": 18,
        "DEX": 10,
        "CON": 15,
        "WIS": 6,
        "CHA": 8,
        "INT": 8
    },
    "skills" : {
        "athletics" : {
            "name": "athletics",
            "description": "Measure of character's physical mobility.",
            "attribute" : "DEX",
            "icon": "fa-bolt"
        },
        "perception" : {
            "name": "perception",
            "description": "Character's surrounding awareness (passive).",
            "attribute" : "INT",
            "icon": "fa-eye"
        },
        "concentration" : {
            "name": "concentration",
            "description": "Character's mental concentration, determines interruption when hit while casting.",
            "attribute" : "CON",
            "icon": "fa-user"
        },
    },
    "attacks" : {
        "shortsword" : {
            "name": "shortsword",
            "attribute" : "STR",
            "description": "A short-bladed iron sword, used for close range combat.",
            "damage": "1d6",
            "damage-type": "piercing",
            "proficient" : true,
            "icon": "fa-exclamation"
        },
        "composite longbow" : {
            "name": "composite longbow",
            "attribute" : "DEX",
            "description": "Long wooden bow, shoots wooden arrows up to a range of 50 meters",
            "damage": "1d8",
            "damage-type": "piercing",
            "proficient" : true,
            "icon": "fa-exclamation"
        },
        "fists" : {
            "name": "fists",
            "attribute" : "DEX",
            "description": "Linen-wrapped fists, useful for hand-to-hand combat.",
            "damage": "1d4",
            "damage-type": "bludgeoning",
            "proficient" : true,
            "icon": "fa-thumbs-up"
            }
        },
    "spells" : {
        "fireball" : {
            "name": "fireball",
            "attribute" : "INT",
            "description": "A massive ball of searing fire shoots out, exploding on impact hurting all within 20 feet.",
            "damage": "12d6",
            "damage-type": "fire",
            "proficient" : true,
            "icon": "fa-bolt"
        },
    },
}

var changeHistory = [{
    "target" : "abilities.STR",
    "change" : 1,
    "description" : "Obtained helmet of strength",
    "time" : "time",
},{
    "target" : "hp",
    "change" : -4,
    "description" : "Arrow damage",
    "time" : "time",
},{
    "target" : "hp",
    "change" : +12,
    "description" : "Heal Spell",
    "time" : "time",
}]