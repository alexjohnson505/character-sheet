var characterData = {
    "name": "Joe Shmoe",
    "class": "Fighter",
    "race": "Half-Orc",
    "hp": 15,
    "ac": 13,
    "abilities" : {
        "STR": 14,
        "DEX": 10,
        "CON": 8,
        "WIS": 12,
        "CHA": 16,
        "INT": 6
    },
    "skills" : [
        {
            "name": "athletics",
            "description": "Character's physical mobility.",
            "attribute" : "DEX",
            "icon": "fa-bolt"
        },
        {
            "name": "perception",
            "description": "Character's surrounding awareness.",
            "attribute" : "INT",
            "icon": "fa-eye"
        },
        {
            "name": "concentration",
            "description": "Character's mental concentration when interrupted.",
            "attribute" : "CON",
            "icon": "fa-user"
        },
    ],
    "attacks" : [
        {
            "name": "shortsword",
            "attribute" : "STR",
            "description": "Wide swipe",
            "damage": "1d6",
            "damage-type": "slashing",
            "proficient" : true,
            "icon": "fa-exclamation"
        },
        {
            "name": "longbow",
            "attribute" : "DEX",
            "description": "Long wooden bow, capable of shooting up to 50 meters",
            "damage": "1d8",
            "damage-type": "piercing",
            "proficient" : true,
            "icon": "fa-exclamation"
        },
        {
            "name": "fists",
            "attribute" : "DEX",
            "description": "Linen-wrapped fists, ready for pummeling",
            "damage": "1d6",
            "damage-type": "bludgeoning",
            "proficient" : true,
            "icon": "fa-thumbs-up"
        }
    ],
    "spells" : [
        {
            "name": "fireball",
            "attribute" : "WIS",
            "description": "Wide swipe",
            "damage": "12d6",
            "damage-type": "fire",
            "proficient" : true,
            "icon": "fa-bolt"
        },
    ],
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