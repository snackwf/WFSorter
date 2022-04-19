dataSetVersion = "2022-04-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Version Availability",
    key: "version",
    tooltip: "Check this to restrict characters to certain versions of the game.",
    checked: false,
    sub: [
      { name: "Global", key: "GL" },
      { name: "Japan", key: "JP", checked: false},
    ]
  },
  {
    name: "Filter by Gender",
    key: "gender",
    tooltip: "Check this to restrict to certain genders.",
    checked: false,
    sub: [ { name: "Male", key: "M" }, { name: "Female", key: "F" }, { name: "Unknown", key: "U" } ]
  },
  {
    name: "Filter by Race",
    key: "race",
    tooltip: "Check this to restrict to certain races.",
    checked: false,
    sub: [ { name: "Dragon", key: "Dragon", checked: true }, { name: "Human", key: "Human", checked: true }, { name: "Sprite", key: "Sprite", checked: true }, { name: "Beast", key: "Beast", checked: true }, { name: "Youkai", key: "Youkai", checked: true }, { name: "Mecha", key: "Mecha", checked: true }, { name: "Aquatic", key: "Aquatic", checked: true }, { name: "Demon", key: "Demon", checked: true }, { name: "Undead", key: "Undead", checked: true } ]
  },
  {
    name: "Filter by Rarity",
    key: "rarity",
    tooltip: "Check this to restrict to certain rarities.",
    checked: false,
    sub: [ { name: "5*", key: 5 }, { name: "4*", key: 4 }, { name: "3*", key: 3 }, { name: "2*", key: 2, checked: false }, { name: "1*", key: 1, checked: false } ]
  },
  {
    name: "Filter by Attribute",
    key: "attribute",
    tooltip: "Check this to restrict to certain attributes.",
    checked: false,
    sub: [ { name: "Fire", key: "Fire", checked: true }, { name: "Water", key: "Water", checked: true }, { name: "Thunder", key: "Thunder", checked: true }, { name: "Wind", key: "Wind", checked: true }, { name: "Light", key: "Light", checked: true }, { name: "Dark", key: "Dark", checked: true } ]
  },
  {
    name: "Use GL Names when applicable.",
    key: "glName",
    tooltip: "Check this to use GL names. Uncheck to use JP names.",
    checked: true
  },
  {
    name: "Show awakened art instead of normal.",
    key: "awakenedArt",
    tooltip: "Check this to use awakened art. Uncheck to use normal art.",
    checked: false
  },
  {
    name: "Show only JP released characters.",
    key: "JPOnly",
    tooltip: "Check this to use only characters that have released in JP. Requires Japan in version availability to be selected.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    "name": "Vagner",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "fire_dragon",
    "JPName": "Wagner"
  },
  {
    "name": "Marina",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pirates_girl",
    "JPName": "Marina"
  },
  {
    "name": "Clarisse",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "clarisse",
    "JPName": "Clarisse"
  },
  {
    "name": "Marianne (Christmas)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "battle_maid_xm19",
    "JPName": "Marianne (Christmas)"
  },
  {
    "name": "Kikuno",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "compliment_oiran",
    "JPName": "Kikuno"
  },
  {
    "name": "Noenne (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "heavenly_one",
    "JPName": "Noene (New Year)"
  },
  {
    "name": "Rolf",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "black_wolf_knight",
    "JPName": "Rolf"
  },
  {
    "name": "Mia (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "tiger_treasure_hunter_smr20",
    "JPName": "Mia (Summer)"
  },
  {
    "name": "Hanabi (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "kunoichi_1anv"
  },
  {
    "name": "Bianca (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Dragon"
      ]
    },
    "devName": "lady_summoner_xm20"
  },
  {
    "name": "Toria",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "halberd_princess"
  },
  {
    "name": "Liao",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "doctor_pirate"
  },
  {
    "name": "Suizen (White Day)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "onmyoji_boy_wt21"
  },
  {
    "name": "Quare",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "magical_bayonetter"
  },
  {
    "name": "Zeta",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "zeta"
  },
  {
    "name": "Leticia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "tsundere_bountyhunter"
  },
  {
    "name": "Ecrire / Écrire (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "bodysuit_trooper_smr21"
  },
  {
    "name": "Haruhi Suzumiya (The Melancholy of Haruhi Suzumiya Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "suzumiya_haruhi"
  },
  {
    "name": "Ryunon",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "shadow_redhood"
  },
  {
    "name": "Marina (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pirates_girl_2anv"
  },
  {
    "name": "Misogi",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "misogi"
  },
  {
    "name": "Leticia (Valentine)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "tsundere_bountyhunter_vt22"
  },
  {
    "name": "Waif",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "anger_investigator"
  },
  {
    "name": "Sonia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "brown_fighter",
    "JPName": "Sonya"
  },
  {
    "name": "Suizen",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "onmyoji_boy",
    "JPName": "Suizen"
  },
  {
    "name": "Ellya (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "lightbullet_wiz_ny20",
    "JPName": "Eliya (New Year)"
  },
  {
    "name": "Cipher",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "ice_witch",
    "JPName": "Cypher"
  },
  {
    "name": "Selene",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "commander",
    "JPName": "Sirene"
  },
  {
    "name": "Remnith",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lakeside_guardian",
    "JPName": "Rimnis"
  },
  {
    "name": "Rakisha",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "drawing_witch",
    "JPName": "Laquisha / Lakisha"
  },
  {
    "name": "Lazeret (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "prince_zero_smr20"
  },
  {
    "name": "Sakura Minamoto (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "minamoto_sakura"
  },
  {
    "name": "Raylas",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "freeze_eye"
  },
  {
    "name": "Emilia (Re:Zero Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "emilia"
  },
  {
    "name": "Rem (Re:Zero Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "rem"
  },
  {
    "name": "Sheyron / Shuilong",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "waterdragon_kunfu"
  },
  {
    "name": "Halidal",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "desert_commander"
  },
  {
    "name": "Amelia (Half Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Aquatic"
      ]
    },
    "devName": "mermaid_1halfanv"
  },
  {
    "name": "Mamnalia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "holy_mother"
  },
  {
    "name": "Yuki Nagato (The Melancholy of Haruhi Suzumiya Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "nagato_yuki"
  },
  {
    "name": "Sheyron / Shuilong (Beast)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "waterdragon_kunfu_proud"
  },
  {
    "name": "Mishima Yuki",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_yuki"
  },
  {
    "name": "Fraxis",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "navy_officer"
  },
  {
    "name": "Cypher (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "ice_witch_2anv"
  },
  {
    "name": "Raylas (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "freeze_eye_xm21"
  },
  {
    "name": "Toraetty (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "heavenly_three"
  },
  {
    "name": "Kyouka",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "kyouka"
  },
  {
    "name": "Anbach",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "ice_dragon"
  },
  {
    "name": "Justy",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "justice_lady"
  },
  {
    "name": "Inaho",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "fox_oracle",
    "JPName": "Inaho"
  },
  {
    "name": "Cagliostro",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "cagliostro",
    "JPName": "Cagliostro"
  },
  {
    "name": "Soushiro (Christmas)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "samurai_xm19",
    "JPName": "Soushiro (Christmas)"
  },
  {
    "name": "Metis",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "thunder_archer",
    "JPName": "Metis"
  },
  {
    "name": "Barrek",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "mighty_striker",
    "JPName": "Barak"
  },
  {
    "name": "Sera",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "machine_police_girl",
    "JPName": "Sera"
  },
  {
    "name": "Botan",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "big_gunner",
    "JPName": "Botan"
  },
  {
    "name": "Illumine (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "illusionist_smr20",
    "JPName": "Illumi (Summer)"
  },
  {
    "name": "Belsidia (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "dimension_witch_smr20",
    "JPName": "Bercetia (Summer)"
  },
  {
    "name": "Regis (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "rec_android_1anv"
  },
  {
    "name": "Beaucy (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "heavenly_two"
  },
  {
    "name": "Rhode",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "girl_and_mecha"
  },
  {
    "name": "Twink",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "general_toyakiren"
  },
  {
    "name": "Zantetsu",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "samurai_robot"
  },
  {
    "name": "Marquis",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "elder_guild_fighter"
  },
  {
    "name": "Sera (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "machine_police_girl_smr21"
  },
  {
    "name": "Memram",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "horn_leader"
  },
  {
    "name": "Stryna",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "cyber_battergirl"
  },
  {
    "name": "Helga (Beast)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "dog_slasher_proud"
  },
  {
    "name": "Kazutake Tooru",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_tohru"
  },
  {
    "name": "Shiro (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "white_tiger_2anv"
  },
  {
    "name": "Tect",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "super_robot"
  },
  {
    "name": "Celtie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "wind_spgirl",
    "JPName": "Silty"
  },
  {
    "name": "Phiria",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "wind_oracle",
    "JPName": "Philia"
  },
  {
    "name": "Murakumo",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Undead",
        "Sprite"
      ]
    },
    "devName": "katana_ghost",
    "JPName": "Murakumo"
  },
  {
    "name": "Leon",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "mercenary",
    "JPName": "Leon"
  },
  {
    "name": "Shywe",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "bigwing_shaman",
    "JPName": "Shiue"
  },
  {
    "name": "Miguel",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "gentle_barten",
    "JPName": "Miguel"
  },
  {
    "name": "Kokkoro",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "kokkoro",
    "JPName": "Kokkoro"
  },
  {
    "name": "Schult ",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "wind_dragon",
    "JPName": "Shult "
  },
  {
    "name": "Saki Nikaido (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "nikaido_saki"
  },
  {
    "name": "Esterielle",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "elf_princess"
  },
  {
    "name": "Silty (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "wind_spgirl_1anv"
  },
  {
    "name": "Suzuka (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "timid_kunoichi_ny21"
  },
  {
    "name": "Fluffy",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "combat_animal"
  },
  {
    "name": "Sonya (Limited)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "brown_fighter_dst21"
  },
  {
    "name": "Nevia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "beast_shaman"
  },
  {
    "name": "Esterielle (Half Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "elf_princess_1halfanv"
  },
  {
    "name": "Shiue (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "bigwing_shaman_smr21"
  },
  {
    "name": "Gouran",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "tengu_master"
  },
  {
    "name": "Leon (Summer/Yukata)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "mercenary_smr21"
  },
  {
    "name": "Fluffy (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "combat_animal_xm21"
  },
  {
    "name": "Mimi",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "mimi"
  },
  {
    "name": "Marchia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "marching_conductor"
  },
  {
    "name": "Shult (White Day)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "wind_dragon_wt22"
  },
  {
    "name": "Nephtim",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "ruin_girl",
    "JPName": "Nephteim"
  },
  {
    "name": "Razelt",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "prince_zero",
    "JPName": "Lazeret"
  },
  {
    "name": "Eclair",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "bodysuit_trooper",
    "JPName": "Ecrire / Écrire"
  },
  {
    "name": "Inaho (Christmas)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "fox_oracle_xm19",
    "JPName": "Inaho (Christmas)"
  },
  {
    "name": "Teurgis",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "starbreak_hunter",
    "JPName": "Tajes"
  },
  {
    "name": "Bulleta",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "combat_soldier",
    "JPName": "Baretta"
  },
  {
    "name": "Libram",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "blade_dancer",
    "JPName": "Liebraum"
  },
  {
    "name": "Nephtim (Half Anniversary)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "ruin_girl_halfanv",
    "JPName": "Nephteim (Half Anniversary)"
  },
  {
    "name": "Pecorine",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pecorine",
    "JPName": "Pecorine"
  },
  {
    "name": "Lyra",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "neoviolin_musician",
    "JPName": "Lila"
  },
  {
    "name": "Orvelle",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "high_priestess"
  },
  {
    "name": "Philamelia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lamp_guide"
  },
  {
    "name": "Lily Hoshikawa (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "L"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "hoshikawa_ririi"
  },
  {
    "name": "Philia (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "wind_oracle_1anv"
  },
  {
    "name": "Eliya (Valentine's)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "lightbullet_wiz_vt21"
  },
  {
    "name": "Seriol",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "crystal_swordman"
  },
  {
    "name": "Rengetsu",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "yokai_exterminator"
  },
  {
    "name": "Lilith (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "resistance_princess_smr21"
  },
  {
    "name": "Inaho (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "fox_oracle_smr21"
  },
  {
    "name": "Mikuru Asahina (The Melancholy of Haruhi Suzumiya Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "asahina_mikuru"
  },
  {
    "name": "Nephteim (Summer/Yukata)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "ruin_girl_smr21"
  },
  {
    "name": "Zekhel",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "guildknight_leader"
  },
  {
    "name": "Lila (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "neoviolin_musician_hw21"
  },
  {
    "name": "Orvelle (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "high_priestess_ny22"
  },
  {
    "name": "Nate (Valentine)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "hero_girl_vt22"
  },
  {
    "name": "Stinel",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "still_obstinator"
  },
  {
    "name": "Belsidia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "dimension_witch",
    "JPName": "Bercetia"
  },
  {
    "name": "Vyron",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "veteran_hunter",
    "JPName": "Veron"
  },
  {
    "name": "Mormia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "blade_witch",
    "JPName": "Molmia"
  },
  {
    "name": "Carla",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "cursed_girl",
    "JPName": "Karla"
  },
  {
    "name": "Olivia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "olivia",
    "JPName": "Olivia"
  },
  {
    "name": "Karyl",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "kyaru",
    "JPName": "Karyl"
  },
  {
    "name": "Alice (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "alice_smr20",
    "JPName": "Alice (Summer)"
  },
  {
    "name": "Junko Konno (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "konno_junko"
  },
  {
    "name": "Dia (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "sing_android_hw20"
  },
  {
    "name": "Dine",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "dark_psygirl"
  },
  {
    "name": "Educeus",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_leader"
  },
  {
    "name": "Yakumo",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "silent_ninja"
  },
  {
    "name": "Alm (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_princess_xm20"
  },
  {
    "name": "Couette",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "summoner_little"
  },
  {
    "name": "Maelviola",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "noble_sorceress"
  },
  {
    "name": "Dine (Limited)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "dark_psygirl_dst21"
  },
  {
    "name": "Beatrix",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "beatrix"
  },
  {
    "name": "Sergil / Sergyl (Half Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "blindness_gunner_1halfanv"
  },
  {
    "name": "Primula",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "blackflower_wiz"
  },
  {
    "name": "Lav / Love (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "touyakiren_ceo_hw21"
  },
  {
    "name": "Inori Shouta",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_shouta"
  },
  {
    "name": "Couette (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "summoner_little_2anv"
  },
  {
    "name": "Bercetia (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "dimension_witch_ny22"
  },
  {
    "name": "Murakumo (White Day)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Undead",
        "Sprite"
      ]
    },
    "devName": "katana_ghost_wt22"
  },
  {
    "name": "Hildegard",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        5
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "estateguild_leader"
  },
  {
    "name": "Alk",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "alk",
    "JPName": "Arc"
  },
  {
    "name": "Azel",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "dragon_slayer",
    "JPName": "Azel"
  },
  {
    "name": "Bianca",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lady_summoner",
    "JPName": "Bianca"
  },
  {
    "name": "Hanabi",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "kunoichi",
    "JPName": "Hanabi"
  },
  {
    "name": "Asukirimaru",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "half_oni_boy",
    "JPName": "Asukirimaru"
  },
  {
    "name": "Clyde",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "master_knight",
    "JPName": "Glide"
  },
  {
    "name": "Kannon",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "red_gunner",
    "JPName": "Kanon"
  },
  {
    "name": "Luluca (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "reporter_ny20",
    "JPName": "Luluca (New Year)"
  },
  {
    "name": "Levy",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "shapely_soldier",
    "JPName": "Revy"
  },
  {
    "name": "Kyrie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "crybaby_shooter",
    "JPName": "Kiri"
  },
  {
    "name": "Hayz",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pirates_gunner",
    "JPName": "Haze"
  },
  {
    "name": "Melmyna",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sanctuary_guard",
    "JPName": "Milmina"
  },
  {
    "name": "Nasir",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "magic_sword_girl"
  },
  {
    "name": "Kuramaru",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "vigilante_boy"
  },
  {
    "name": "Yugiri (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "yugiri"
  },
  {
    "name": "Nikola",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sorceress_teacher"
  },
  {
    "name": "Arc (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "alk_1anv"
  },
  {
    "name": "Torene (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "cool_woman_soldier_xm20"
  },
  {
    "name": "Maihime",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "naginata_girl"
  },
  {
    "name": "Azel (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "dragon_slayer_smr21"
  },
  {
    "name": "Kyon (The Melancholy of Haruhi Suzumiya Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "kyon"
  },
  {
    "name": "Hikawa Rinne",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_tomboygirl"
  },
  {
    "name": "Nagihara Nao",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_nao"
  },
  {
    "name": "Pishika",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "nurse_pirate"
  },
  {
    "name": "Revy (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "shapely_soldier_ny22"
  },
  {
    "name": "Yuwel",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "swallow_knight",
    "JPName": "Yuwel"
  },
  {
    "name": "Liesel",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "bishop_girl",
    "JPName": "Riesel"
  },
  {
    "name": "Amelia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Aquatic"
      ]
    },
    "devName": "mermaid",
    "JPName": "Amelia"
  },
  {
    "name": "Alice",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "alice",
    "JPName": "Alice"
  },
  {
    "name": "Sharon",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "battle_guild_staff",
    "JPName": "Sharon"
  },
  {
    "name": "Rain",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "spry_sailor",
    "JPName": "Lanner"
  },
  {
    "name": "Saar",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Aquatic"
      ]
    },
    "devName": "deepsea_mage",
    "JPName": "Zaar"
  },
  {
    "name": "Mordiaga",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "desert_wizard",
    "JPName": "Moldiaga"
  },
  {
    "name": "Mizuchi",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "onmyo_attendant",
    "JPName": "Mizuchi"
  },
  {
    "name": "Sohvi",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psycho_reaper",
    "JPName": "Souvi / Sauvi"
  },
  {
    "name": "Gerard (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "unicorn_lancer_smr20",
    "JPName": "Jelal (Summer)"
  },
  {
    "name": "Marina (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pirates_girl_smr20",
    "JPName": "Marina (Summer)"
  },
  {
    "name": "Vivi",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "shy_assassin"
  },
  {
    "name": "Trista (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "urban_soldier_ny21"
  },
  {
    "name": "Sotieth (Oath to the Dawn)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "ruin_lady"
  },
  {
    "name": "Nate (HERO: BEGINNING)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "hero_girl"
  },
  {
    "name": "Facon",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "stylish_witch"
  },
  {
    "name": "Evelyn",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "dress_gunner"
  },
  {
    "name": "Shirano (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "fox_companion_smr21"
  },
  {
    "name": "Lanner (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "spry_sailor_hw21"
  },
  {
    "name": "Takamori Seiji",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_seiji"
  },
  {
    "name": "Rams",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "thunder_dragon",
    "JPName": "Rams"
  },
  {
    "name": "Renoir",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "fox_scientist",
    "JPName": "Lunalu"
  },
  {
    "name": "Regis",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "rec_android",
    "JPName": "Regis"
  },
  {
    "name": "Eleanor",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "elf_soldier",
    "JPName": "Eleanor"
  },
  {
    "name": "Jay",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "cat_shaman",
    "JPName": "Jay"
  },
  {
    "name": "Mino",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "minotaur_girl",
    "JPName": "Mino"
  },
  {
    "name": "Aureo (Christmas)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "docking_beast_xm19",
    "JPName": "Aureo (Christmas)"
  },
  {
    "name": "Adonis",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "black_hair_swordman",
    "JPName": "Adoni"
  },
  {
    "name": "Rudy",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "lady_android",
    "JPName": "Rudy"
  },
  {
    "name": "Prika (The Poppet Princess)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "fake_princess",
    "JPName": "Prica / Prika (The Princess of Figment)"
  },
  {
    "name": "Naska (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "casino_dealer_smr20",
    "JPName": "Neska (Summer)"
  },
  {
    "name": "Roselia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "hidden_blader",
    "JPName": "Roselia"
  },
  {
    "name": "Ai Mizuno (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "mizuno_ai"
  },
  {
    "name": "Lunalu (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "fox_scientist_hw20"
  },
  {
    "name": "Adoni (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "black_hair_swordman_xm20"
  },
  {
    "name": "To Rereni",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "little_wizard"
  },
  {
    "name": "Editha",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "punk_warrior"
  },
  {
    "name": "Telna",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "electro_girl"
  },
  {
    "name": "Giselle",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "secret_observer"
  },
  {
    "name": "Fuku",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "warashi"
  },
  {
    "name": "Theo",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "lion_boy"
  },
  {
    "name": "Kuro (New Year)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "outlaw_panther_ny22"
  },
  {
    "name": "Elegia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "spanner_girl"
  },
  {
    "name": "Rinkarina",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "scissor_ratgirl"
  },
  {
    "name": "Nimbus",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "white_tiger",
    "JPName": "Shiro"
  },
  {
    "name": "Mia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "tiger_treasure_hunter",
    "JPName": "Mia"
  },
  {
    "name": "Aurore",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "birdman",
    "JPName": "Orouru"
  },
  {
    "name": "Soushiro",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "samurai",
    "JPName": "Soushiro"
  },
  {
    "name": "Melsele",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "elf_archer",
    "JPName": "Mercel"
  },
  {
    "name": "Helga",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "dog_slasher",
    "JPName": "Helga"
  },
  {
    "name": "Arisa",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "arisa",
    "JPName": "Arisa"
  },
  {
    "name": "Rebecca (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "bearish_darkwitch_ny20",
    "JPName": "Rebecca (New Year)"
  },
  {
    "name": "Lou",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "beast_adventurer",
    "JPName": "Ruu"
  },
  {
    "name": "Suzuka",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "timid_kunoichi",
    "JPName": "Suzuka"
  },
  {
    "name": "Kohane",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "tengu_girl",
    "JPName": "Kohane"
  },
  {
    "name": "Kugui (The Edited Day of Yo-kai Book)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "ekaki_onmyoji"
  },
  {
    "name": "Hao",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "wild_boy"
  },
  {
    "name": "Shiro (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "white_tiger_xm20"
  },
  {
    "name": "Ram (Re:Zero Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "ram"
  },
  {
    "name": "Ricardo",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "wind_striker"
  },
  {
    "name": "Middie",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "steel_lacrosse"
  },
  {
    "name": "Piamo",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "cool_witch_girl"
  },
  {
    "name": "Lemarque",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "bird_master"
  },
  {
    "name": "Makani",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "pilgrim_monk"
  },
  {
    "name": "Milmina (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sanctuary_guard_hw21"
  },
  {
    "name": "Merienna",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "sheep_girl"
  },
  {
    "name": "Dia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "sing_android",
    "JPName": "Dia"
  },
  {
    "name": "Gerard",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "unicorn_lancer",
    "JPName": "Jelal"
  },
  {
    "name": "Ellya",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "lightbullet_wiz",
    "JPName": "Eliya"
  },
  {
    "name": "Finn",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "palpebra_knight",
    "JPName": "Finn"
  },
  {
    "name": "Keira",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "palpebra_knight_lady",
    "JPName": "Kira"
  },
  {
    "name": "Parfait (Valentine's Festival Event)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "monster_cook",
    "JPName": "Parfait (Valentine Festival!)"
  },
  {
    "name": "Illumine",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "illusionist",
    "JPName": "Illumi"
  },
  {
    "name": "Hopper",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "unleash_hunter",
    "JPName": "Hopul"
  },
  {
    "name": "Lyla",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "unyielding_adventurer",
    "JPName": "Laia"
  },
  {
    "name": "Floretta",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "whitedog_beast",
    "JPName": "Floretta"
  },
  {
    "name": "Liesel (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "bishop_girl_smr20",
    "JPName": "Riesel (Summer)"
  },
  {
    "name": "Keyana",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "keylock_girl",
    "JPName": "Kiana"
  },
  {
    "name": "Lilith",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "resistance_princess"
  },
  {
    "name": "Mech",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "doctor_machine"
  },
  {
    "name": "Cecilia (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "woman_knight_1anv"
  },
  {
    "name": "Dilette",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sea_violent"
  },
  {
    "name": "Floretta (Valentine's)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "whitedog_beast_vt21"
  },
  {
    "name": "Fini",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "sleep_puppy"
  },
  {
    "name": "Sariha",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "desert_priest"
  },
  {
    "name": "Souvi (Summer)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psycho_reaper_smr21"
  },
  {
    "name": "Stella",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Dragon"
      ]
    },
    "devName": "stella_2anv"
  },
  {
    "name": "False / Force (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_clown_xm21"
  },
  {
    "name": "Carabina",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "advanced_soldier"
  },
  {
    "name": "Clarté",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "pbc_operator"
  },
  {
    "name": "Arum",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_princess",
    "JPName": "Alm"
  },
  {
    "name": "Marianne",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "battle_maid",
    "JPName": "Marianne"
  },
  {
    "name": "Andy",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "undead_boy",
    "JPName": "Andy"
  },
  {
    "name": "Liam",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "warlock",
    "JPName": "Liam"
  },
  {
    "name": "Yuwel (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "swallow_knight_ny20",
    "JPName": "Yuwel (New Year)"
  },
  {
    "name": "Quazer (Co-Op Challenge)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sword_beauty",
    "JPName": "Quartzer (Multi Boss Pick-up)"
  },
  {
    "name": "Love (Neon Skyline)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "touyakiren_ceo",
    "JPName": "Lav / Love (The Skyscraper)"
  },
  {
    "name": "Selgir",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "blindness_gunner",
    "JPName": "Sergil / Sergyl"
  },
  {
    "name": "Luna",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "luna",
    "JPName": "Luna"
  },
  {
    "name": "Marguerite (Summer)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lady_gunner_smr20",
    "JPName": "Marguerite (Summer)"
  },
  {
    "name": "Greig",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "dinosaur_hunter"
  },
  {
    "name": "Bryce",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "crazy_doctor"
  },
  {
    "name": "Tae Yamada (Zombie Land Saga Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "yamada_tae"
  },
  {
    "name": "Falce (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "reaper_girl_hw20"
  },
  {
    "name": "Zelma",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "illegal_herbalist"
  },
  {
    "name": "Ari (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_woman_soldier_1anv"
  },
  {
    "name": "Subaru Natsuki (Re:Zero Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "subaru"
  },
  {
    "name": "Edward",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "mystery_agent"
  },
  {
    "name": "Lonsdale",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "walking_armor"
  },
  {
    "name": "Tawil",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "desert_caravans"
  },
  {
    "name": "Itsuki Koizumi (The Melancholy of Haruhi Suzumiya Collab)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "koizumi_ituki"
  },
  {
    "name": "Virgia",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "formercorrupt_detective"
  },
  {
    "name": "Kageoka Ryuichi",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "psychic_projection"
  },
  {
    "name": "Shion (Anniversary)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        4
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "informant_2anv"
  },
  {
    "name": "Lilial",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "alchemist",
    "JPName": "Lirell"
  },
  {
    "name": "Marnie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "pretty_witch",
    "JPName": "Meimy"
  },
  {
    "name": "Elise",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "gunslinger",
    "JPName": "Iris"
  },
  {
    "name": "Haaj",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "monster_hunter",
    "JPName": "Hash"
  },
  {
    "name": "Jin",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "black_doctor",
    "JPName": "Jin"
  },
  {
    "name": "Trine",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "cool_woman_soldier",
    "JPName": "Torene"
  },
  {
    "name": "Gilasrad",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "berserker",
    "JPName": "Gilslad"
  },
  {
    "name": "Enni",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "fire_shaman",
    "JPName": "Enni"
  },
  {
    "name": "Jake",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "disciplined_swordman",
    "JPName": "Jake"
  },
  {
    "name": "Cran",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "birdwoman",
    "JPName": "Kran"
  },
  {
    "name": "Harlisha",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "tradition_healer",
    "JPName": "Halisha"
  },
  {
    "name": "Sven",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "brave_mouse",
    "JPName": "Sven"
  },
  {
    "name": "Lilian",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sewing_girl"
  },
  {
    "name": "Klaus (White Day)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "wolf_assassin_wt21"
  },
  {
    "name": "Keylos",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sniper",
    "JPName": "Keiros"
  },
  {
    "name": "Trista",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "urban_soldier",
    "JPName": "Trista"
  },
  {
    "name": "Walter",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "hard_face_soldier",
    "JPName": "Walter"
  },
  {
    "name": "Elza",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "nurse",
    "JPName": "Erza"
  },
  {
    "name": "Klaus",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "wolf_assassin",
    "JPName": "Klaus"
  },
  {
    "name": "Shirano",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Youkai"
      ]
    },
    "devName": "fox_companion",
    "JPName": "Shirano"
  },
  {
    "name": "Kaiyu",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "depraved_monk",
    "JPName": "Kaiyu"
  },
  {
    "name": "Lassie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sailor_girl",
    "JPName": "Ratty"
  },
  {
    "name": "Faf",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Dragon"
      ]
    },
    "devName": "cute_fafnir",
    "JPName": "Faf"
  },
  {
    "name": "Rico",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "mens_attire_girl",
    "JPName": "Riko"
  },
  {
    "name": "Challua (Christmas)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Plant",
        "Sprite"
      ]
    },
    "devName": "dryad_xm19",
    "JPName": "Charua (Christmas)"
  },
  {
    "name": "Clara",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "junior_yearngirl",
    "JPName": "Clara"
  },
  {
    "name": "Samantha",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "little_shaman",
    "JPName": "Samasa"
  },
  {
    "name": "Ritta",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "scout_girl",
    "JPName": "Rita"
  },
  {
    "name": "Yuna",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "twin_blader",
    "JPName": "Yuna"
  },
  {
    "name": "Bonnie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Beast"
      ]
    },
    "devName": "bee_girl",
    "JPName": "Honey"
  },
  {
    "name": "Taiga",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "lightning_fighter",
    "JPName": "Taiga"
  },
  {
    "name": "Claw",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "outlaw_panther",
    "JPName": "Kuro"
  },
  {
    "name": "Albert",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "wolf_swordsman",
    "JPName": "Albert"
  },
  {
    "name": "Kazuchi",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Youkai"
      ]
    },
    "devName": "oni_girl",
    "JPName": "Kadzuchi"
  },
  {
    "name": "Tatiana",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "sociable_mestizo",
    "JPName": "Tatiana"
  },
  {
    "name": "Colt",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Sprite"
      ]
    },
    "devName": "magic_boy",
    "JPName": "Colt"
  },
  {
    "name": "Sha Suzu",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "student_gunsmith",
    "JPName": "Sha Susu"
  },
  {
    "name": "Fiora",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "fortuneteller",
    "JPName": "Foula"
  },
  {
    "name": "Mew (New Year)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "cat_fighter_ny20",
    "JPName": "Miu (New Year)"
  },
  {
    "name": "Vargen",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "old_mercenary",
    "JPName": "Bargen"
  },
  {
    "name": "Flana ",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "floating_girl",
    "JPName": "Flana "
  },
  {
    "name": "Fi Nonoa",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "conjurer_girl"
  },
  {
    "name": "Evan",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "highlander",
    "JPName": "Evan"
  },
  {
    "name": "Challua",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Plant",
        "Sprite"
      ]
    },
    "devName": "dryad",
    "JPName": "Charua"
  },
  {
    "name": "Regitare",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Undead"
      ]
    },
    "devName": "lich",
    "JPName": "Lecitar"
  },
  {
    "name": "Naska",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "casino_dealer",
    "JPName": "Neska"
  },
  {
    "name": "Mew",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "cat_fighter",
    "JPName": "Miu"
  },
  {
    "name": "Folus",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_clown",
    "JPName": "False / Force"
  },
  {
    "name": "Hartlief",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "herbalist",
    "JPName": "Heartleaf"
  },
  {
    "name": "Conner",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "spearman",
    "JPName": "Connor"
  },
  {
    "name": "Jester",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "trap_errand",
    "JPName": "Juster"
  },
  {
    "name": "Kate",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "gang_girl",
    "JPName": "Kate"
  },
  {
    "name": "Nellie",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lazy_genious",
    "JPName": "Netty"
  },
  {
    "name": "Millet",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "rookie_adventurer"
  },
  {
    "name": "Corinna",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "priest",
    "JPName": "Corina"
  },
  {
    "name": "Marguerite",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "lady_gunner",
    "JPName": "Marguerite"
  },
  {
    "name": "Cecilia",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "woman_knight",
    "JPName": "Cecilia"
  },
  {
    "name": "Aureo",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "docking_beast",
    "JPName": "Aureo"
  },
  {
    "name": "Raul",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "exorcist_oldman",
    "JPName": "Raul"
  },
  {
    "name": "Miles",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "half_knight",
    "JPName": "Miles"
  },
  {
    "name": "Luluca",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "reporter",
    "JPName": "Luluca"
  },
  {
    "name": "Kharo",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "wild_wolfgirl",
    "JPName": "Caro"
  },
  {
    "name": "Mora",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Beast"
      ]
    },
    "devName": "moth_girl"
  },
  {
    "name": "Corina (Halloween)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "priest_hw20"
  },
  {
    "name": "Ksyukha",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "junior_soldier"
  },
  {
    "name": "Axem",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Mecha"
      ]
    },
    "devName": "skateboard_boy"
  },
  {
    "name": "Ru Ruto",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Light"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "kids_gunner"
  },
  {
    "name": "Falsche",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "reaper_girl",
    "JPName": "Falce"
  },
  {
    "name": "Jalil",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "chakram_shooter",
    "JPName": "Jalil"
  },
  {
    "name": "Arly",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Demon"
      ]
    },
    "devName": "devil_woman_soldier",
    "JPName": "Ari"
  },
  {
    "name": "Shion",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "informant",
    "JPName": "Shion"
  },
  {
    "name": "Adil",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "arabic_swordman",
    "JPName": "Adil"
  },
  {
    "name": "Dorothea",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "dark_nursemaid",
    "JPName": "Dorothea"
  },
  {
    "name": "Rebecca",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "bearish_darkwitch",
    "JPName": "Rebecca"
  },
  {
    "name": "Nochel",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "monster_attract",
    "JPName": "Nocelle"
  },
  {
    "name": "Meryll",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "delusion_girl",
    "JPName": "Meryl"
  },
  {
    "name": "Meryl (Christmas)",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "delusion_girl_xm20"
  },
  {
    "name": "Talha",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Undead"
      ]
    },
    "devName": "mummy_boy"
  },
  {
    "name": "Cody",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human",
        "Beast"
      ]
    },
    "devName": "revenge_rabbit"
  },
  {
    "name": "Lucille",
    "opts": {
      "version": [
        "JP"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Dark"
      ],
      "rarity": [
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "assistant_boy"
  },
  {
    "name": "Golem",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        2
      ],
      "race": [
        "Mecha"
      ]
    },
    "devName": "guardian_golem",
    "JPName": "Golem"
  },
  {
    "name": "Owlbert",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "M"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        2
      ],
      "race": [
        "Beast"
      ]
    },
    "devName": "owl",
    "JPName": "Pojito"
  },
  {
    "name": "Kamaitachi",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        2
      ],
      "race": [
        "Beast",
        "Youkai"
      ]
    },
    "devName": "fox",
    "JPName": "Kamaitachi"
  },
  {
    "name": "CF Kiseki (Miraculous Golden Head Collab)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        2
      ],
      "race": [
        "Mecha"
      ]
    },
    "devName": "towa_namakubi",
    "JPName": "CF Kiseki (Golden Head of Miracle Collab)"
  },
  {
    "name": "Towa Kiseki (Miraculous Golden Head Collab)",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "F"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        2
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "towa_vtuber",
    "JPName": "Towa Kiseki (Golden Head of Miracle Collab)"
  },
  {
    "name": "Shroombo",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Plant",
        "Sprite"
      ]
    },
    "devName": "kinoko",
    "JPName": "Kino"
  },
  {
    "name": "Red Blobble",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Sprite"
      ]
    },
    "devName": "slango_red",
    "JPName": "Red Pore"
  },
  {
    "name": "Fire Imp",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Fire"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Sprite"
      ]
    },
    "devName": "spirit_fire",
    "JPName": "Fire Spirit"
  },
  {
    "name": "Blue Blobble",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Water"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Sprite"
      ]
    },
    "devName": "slango_blue",
    "JPName": "Blue Pore"
  },
  {
    "name": "Yellow Blobble",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Sprite"
      ]
    },
    "devName": "slango_yellow",
    "JPName": "Yellow Pore"
  },
  {
    "name": "Zapquill",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Thunder"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Beast"
      ]
    },
    "devName": "paralysis_hedgehog",
    "JPName": "Pararat"
  },
  {
    "name": "Green Blobble",
    "opts": {
      "version": [
        "JP",
        "GL"
      ],
      "gender": [
        "U"
      ],
      "attribute": [
        "Wind"
      ],
      "rarity": [
        1
      ],
      "race": [
        "Sprite"
      ]
    },
    "devName": "slango_green",
    "JPName": "Green Pore"
  }
]