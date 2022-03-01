dataSetVersion = "2022-03-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    "img": "vc7cjt5",
    "opts": {
      "version": [
        "GL",
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
        "Dragon"
      ]
    },
    "devName": "fire_dragon",
    "JPName": "Wagner",
    "altImg": "zPF1sh1"
  },
  {
    "name": "Marina",
    "img": "fSDZKj7",
    "opts": {
      "version": [
        "GL",
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
    "devName": "pirates_girl",
    "JPName": "Marina",
    "altImg": "TWBPM18"
  },
  {
    "name": "Clarisse",
    "img": "qdDY24p",
    "opts": {
      "version": [
        "GL",
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
        "Sprite"
      ]
    },
    "devName": "clarisse",
    "JPName": "Clarisse",
    "altImg": "sC3LPbt"
  },
  {
    "name": "Marianne (Christmas)",
    "img": "gSZxBxY",
    "opts": {
      "version": [
        "GL",
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
    "devName": "battle_maid_xm19",
    "JPName": "Marianne (Christmas)",
    "altImg": "DRxpqK6"
  },
  {
    "name": "Noenne (New Year)",
    "img": "48f3jMK",
    "opts": {
      "version": [
        "GL",
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
        "Beast"
      ]
    },
    "devName": "heavenly_one",
    "JPName": "Noene (New Year)",
    "altImg": "Xk3H524"
  },
  {
    "name": "Kikuno",
    "img": "YPsZpRf",
    "opts": {
      "version": [
        "GL",
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
        "Youkai"
      ]
    },
    "devName": "compliment_oiran",
    "JPName": "Kikuno",
    "altImg": "920hRH7"
  },
  {
    "name": "Rolf",
    "img": "VBWx3sr",
    "opts": {
      "version": [
        "GL",
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
    "devName": "black_wolf_knight",
    "JPName": "Rolf",
    "altImg": "HNtk8R8"
  },
  {
    "name": "Sonia",
    "img": "P9BT7FP",
    "opts": {
      "version": [
        "GL",
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
    "devName": "brown_fighter",
    "JPName": "Sonya",
    "altImg": "6n1XWKF"
  },
  {
    "name": "Suizen",
    "img": "YZyGZ6V",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Youkai"
      ]
    },
    "devName": "onmyoji_boy",
    "JPName": "Suizen",
    "altImg": "rQrNL9f"
  },
  {
    "name": "Ellya (New Year)",
    "img": "QXP6N0k",
    "opts": {
      "version": [
        "GL",
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
    "devName": "lightbullet_wiz_ny20",
    "JPName": "Eliya (New Year)",
    "altImg": "7t6Nb85"
  },
  {
    "name": "Cipher",
    "img": "nbyrHFc",
    "opts": {
      "version": [
        "GL",
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
    "devName": "ice_witch",
    "JPName": "Cypher",
    "altImg": "QktKGW1"
  },
  {
    "name": "Selene",
    "img": "wY5RgMz",
    "opts": {
      "version": [
        "GL",
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
    "devName": "commander",
    "JPName": "Sirene",
    "altImg": "R9C6FWC"
  },
  {
    "name": "Remnith",
    "img": "q788j88",
    "opts": {
      "version": [
        "GL",
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
    "devName": "lakeside_guardian",
    "JPName": "Rimnis",
    "altImg": "nmNGZBM"
  },
  {
    "name": "Rakisha",
    "img": "mXRFq8x",
    "opts": {
      "version": [
        "GL",
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
    "devName": "drawing_witch",
    "JPName": "Laquisha / Lakisha",
    "altImg": "8522WT2"
  },
  {
    "name": "Inaho",
    "img": "MNKgfdr",
    "opts": {
      "version": [
        "GL",
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
        "Youkai"
      ]
    },
    "devName": "fox_oracle",
    "JPName": "Inaho",
    "altImg": "6ts03Pt"
  },
  {
    "name": "Cagliostro",
    "img": "hfCf0Qv",
    "opts": {
      "version": [
        "GL",
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
        "Sprite"
      ]
    },
    "devName": "cagliostro",
    "JPName": "Cagliostro",
    "altImg": "8bLKcM5"
  },
  {
    "name": "Soushiro (Christmas)",
    "img": "Dr3dWCW",
    "opts": {
      "version": [
        "GL",
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
    "devName": "samurai_xm19",
    "JPName": "Soushiro (Christmas)",
    "altImg": "pXmrWyz"
  },
  {
    "name": "Metis",
    "img": "d5NcKbJ",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "thunder_archer",
    "JPName": "Metis",
    "altImg": "KrXQMFm"
  },
  {
    "name": "Barrek",
    "img": "mHV3znZ",
    "opts": {
      "version": [
        "GL",
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
    "devName": "mighty_striker",
    "JPName": "Barak",
    "altImg": "NK21SGM"
  },
  {
    "name": "Sera",
    "img": "LCsVbSf",
    "opts": {
      "version": [
        "GL",
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
    "devName": "machine_police_girl",
    "JPName": "Sera",
    "altImg": "wKYxKwL"
  },
  {
    "name": "Botan",
    "img": "BVYJgfK",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "big_gunner",
    "JPName": "Botan",
    "altImg": "XL4wwck"
  },
  {
    "name": "Phiria",
    "img": "yN3wgLd",
    "opts": {
      "version": [
        "GL",
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
    "devName": "wind_oracle",
    "JPName": "Philia",
    "altImg": "HKTqP4s"
  },
  {
    "name": "Leon",
    "img": "fxGFHPP",
    "opts": {
      "version": [
        "GL",
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
    "devName": "mercenary",
    "JPName": "Leon",
    "altImg": "B6Gp99C"
  },
  {
    "name": "Celtie",
    "img": "GTs6MJs",
    "opts": {
      "version": [
        "GL",
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
    "devName": "wind_spgirl",
    "JPName": "Silty",
    "altImg": "p4KdmZT"
  },
  {
    "name": "Murakumo",
    "img": "jr0kvZy",
    "opts": {
      "version": [
        "GL",
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
        "Undead",
        "Sprite"
      ]
    },
    "devName": "katana_ghost",
    "JPName": "Murakumo",
    "altImg": "0KpS9K1"
  },
  {
    "name": "Shywe",
    "img": "fCY9gTM",
    "opts": {
      "version": [
        "GL",
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
    "devName": "bigwing_shaman",
    "JPName": "Shiue",
    "altImg": "NSkQf6d"
  },
  {
    "name": "Miguel",
    "img": "n82Kd2q",
    "opts": {
      "version": [
        "GL",
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
    "devName": "gentle_barten",
    "JPName": "Miguel",
    "altImg": "LhR6DLR"
  },
  {
    "name": "Nephtim",
    "img": "9gSnfrr",
    "opts": {
      "version": [
        "GL",
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
    "devName": "ruin_girl",
    "JPName": "Nephteim",
    "altImg": "zHqkmNF"
  },
  {
    "name": "Razelt",
    "img": "WDBM99T",
    "opts": {
      "version": [
        "GL",
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
    "devName": "prince_zero",
    "JPName": "Lazeret",
    "altImg": "FYydD2V"
  },
  {
    "name": "Eclair",
    "img": "b5W4LN7",
    "opts": {
      "version": [
        "GL",
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
    "devName": "bodysuit_trooper",
    "JPName": "Ecrire / Écrire",
    "altImg": "dkJsDrw"
  },
  {
    "name": "Inaho (Christmas)",
    "img": "RzyHnxM",
    "opts": {
      "version": [
        "GL",
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
    "devName": "fox_oracle_xm19",
    "JPName": "Inaho (Christmas)",
    "altImg": "m5pHkKc"
  },
  {
    "name": "Teurgis",
    "img": "DLHghVV",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Mecha"
      ]
    },
    "devName": "starbreak_hunter",
    "JPName": "Tajes",
    "altImg": "3vx6CR5"
  },
  {
    "name": "Bulleta",
    "img": "VNG240p",
    "opts": {
      "version": [
        "GL",
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
    "devName": "combat_soldier",
    "JPName": "Baretta",
    "altImg": "q7ymxHg"
  },
  {
    "name": "Libram",
    "img": "2y2P4bV",
    "opts": {
      "version": [
        "GL",
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
    "devName": "blade_dancer",
    "JPName": "Liebraum",
    "altImg": "mH0v6KT"
  },
  {
    "name": "Nephtim (Half Anniversary)",
    "img": "H4K5nFd",
    "opts": {
      "version": [
        "GL",
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
    "devName": "ruin_girl_halfanv",
    "JPName": "Nephteim (Half Anniversary)",
    "altImg": "zhFndhY"
  },
  {
    "name": "Belsidia",
    "img": "Sy99TTp",
    "opts": {
      "version": [
        "GL",
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
    "devName": "dimension_witch",
    "JPName": "Bercetia",
    "altImg": "VS11JGz"
  },
  {
    "name": "Vyron",
    "img": "5jsmZQZ",
    "opts": {
      "version": [
        "GL",
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
    "devName": "veteran_hunter",
    "JPName": "Veron",
    "altImg": "CBkS6KS"
  },
  {
    "name": "Mormia",
    "img": "d4n911P",
    "opts": {
      "version": [
        "GL",
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
    "devName": "blade_witch",
    "JPName": "Molmia",
    "altImg": "gP93fTc"
  },
  {
    "name": "Carla",
    "img": "CHF3RnK",
    "opts": {
      "version": [
        "GL",
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
    "devName": "cursed_girl",
    "JPName": "Karla",
    "altImg": "9srwPCh"
  },
  {
    "name": "Olivia",
    "img": "BcqQKWG",
    "opts": {
      "version": [
        "GL",
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
    "devName": "olivia",
    "JPName": "Olivia",
    "altImg": "3sRrBN1"
  },
  {
    "name": "Alk",
    "img": "stXyB6g",
    "opts": {
      "version": [
        "GL",
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
    "devName": "alk",
    "JPName": "Arc",
    "altImg": "MVhFdDX"
  },
  {
    "name": "Azel",
    "img": "rZC3WvK",
    "opts": {
      "version": [
        "GL",
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
    "devName": "dragon_slayer",
    "JPName": "Azel",
    "altImg": "Y2DjCXZ"
  },
  {
    "name": "Bianca",
    "img": "r0hS7cm",
    "opts": {
      "version": [
        "GL",
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
    "devName": "lady_summoner",
    "JPName": "Bianca",
    "altImg": "1XXXCSp"
  },
  {
    "name": "Hanabi",
    "img": "QKY2HcD",
    "opts": {
      "version": [
        "GL",
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
    "devName": "kunoichi",
    "JPName": "Hanabi",
    "altImg": "vdgZtmF"
  },
  {
    "name": "Asukirimaru",
    "img": "bKxms1m",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Youkai"
      ]
    },
    "devName": "half_oni_boy",
    "JPName": "Asukirimaru",
    "altImg": "dgLfZDV"
  },
  {
    "name": "Clyde",
    "img": "BZzM3qc",
    "opts": {
      "version": [
        "GL",
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
    "devName": "master_knight",
    "JPName": "Glide",
    "altImg": "R4Dj6s9"
  },
  {
    "name": "Kannon",
    "img": "mTymKMR",
    "opts": {
      "version": [
        "GL",
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
    "devName": "red_gunner",
    "JPName": "Kanon",
    "altImg": "h167KXH"
  },
  {
    "name": "Luluca (New Year)",
    "img": "p17GBZM",
    "opts": {
      "version": [
        "GL",
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
    "devName": "reporter_ny20",
    "JPName": "Luluca (New Year)",
    "altImg": "mD21Hp6"
  },
  {
    "name": "Levy",
    "img": "yWPTWJC",
    "opts": {
      "version": [
        "GL",
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
    "devName": "shapely_soldier",
    "JPName": "Revy",
    "altImg": "516gVZ3"
  },
  {
    "name": "Kyrie",
    "img": "FqK3gK2",
    "opts": {
      "version": [
        "GL",
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
    "devName": "crybaby_shooter",
    "JPName": "Kiri",
    "altImg": "mDW2r95"
  },
  {
    "name": "Hayz",
    "img": "W5vMNm9",
    "opts": {
      "version": [
        "GL",
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
    "devName": "pirates_gunner",
    "JPName": "Haze",
    "altImg": "hFksJXg"
  },
  {
    "name": "Yuwel",
    "img": "Pcy62tH",
    "opts": {
      "version": [
        "GL",
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
    "devName": "swallow_knight",
    "JPName": "Yuwel",
    "altImg": "fxg3Vhr"
  },
  {
    "name": "Liesel",
    "img": "2jT6YJB",
    "opts": {
      "version": [
        "GL",
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
    "devName": "bishop_girl",
    "JPName": "Riesel",
    "altImg": "cxTkxWv"
  },
  {
    "name": "Amelia",
    "img": "MMfFcM4",
    "opts": {
      "version": [
        "GL",
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
        "Aquatic"
      ]
    },
    "devName": "mermaid",
    "JPName": "Amelia",
    "altImg": "CmNWD77"
  },
  {
    "name": "Alice",
    "img": "Dr78s8R",
    "opts": {
      "version": [
        "GL",
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
    "devName": "alice",
    "JPName": "Alice",
    "altImg": "LCFQX55"
  },
  {
    "name": "Sharon",
    "img": "rFynKL4",
    "opts": {
      "version": [
        "GL",
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
    "devName": "battle_guild_staff",
    "JPName": "Sharon",
    "altImg": "7SCC28K"
  },
  {
    "name": "Rain",
    "img": "b1zH7cj",
    "opts": {
      "version": [
        "GL",
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
    "devName": "spry_sailor",
    "JPName": "Lanner",
    "altImg": "xq1t9g8"
  },
  {
    "name": "Saar",
    "img": "Jy3hNJp",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Aquatic"
      ]
    },
    "devName": "deepsea_mage",
    "JPName": "Zaar",
    "altImg": "F8F3jZW"
  },
  {
    "name": "Mordiaga",
    "img": "rcm1XXq",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Sprite"
      ]
    },
    "devName": "desert_wizard",
    "JPName": "Moldiaga",
    "altImg": "BsDL5h0"
  },
  {
    "name": "Mizuchi",
    "img": "411Wspd",
    "opts": {
      "version": [
        "GL",
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
        "Youkai"
      ]
    },
    "devName": "onmyo_attendant",
    "JPName": "Mizuchi",
    "altImg": "jT5krJQ"
  },
  {
    "name": "Sohvi",
    "img": "WgYvcjd",
    "opts": {
      "version": [
        "GL",
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
    "devName": "psycho_reaper",
    "JPName": "Souvi / Sauvi",
    "altImg": "yq1fyqd"
  },
  {
    "name": "Rams",
    "img": "ScS5B7y",
    "opts": {
      "version": [
        "GL",
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
        "Dragon"
      ]
    },
    "devName": "thunder_dragon",
    "JPName": "Rams",
    "altImg": "GMF49Qb"
  },
  {
    "name": "Renoir",
    "img": "wB7NJD5",
    "opts": {
      "version": [
        "GL",
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
    "devName": "fox_scientist",
    "JPName": "Lunalu",
    "altImg": "0YwNN9w"
  },
  {
    "name": "Regis",
    "img": "QNHW1Js",
    "opts": {
      "version": [
        "GL",
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
        "Mecha"
      ]
    },
    "devName": "rec_android",
    "JPName": "Regis",
    "altImg": "qJ4qH95"
  },
  {
    "name": "Eleanor",
    "img": "RbC6MTy",
    "opts": {
      "version": [
        "GL",
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
        "Sprite"
      ]
    },
    "devName": "elf_soldier",
    "JPName": "Eleanor",
    "altImg": "PQdjpzb"
  },
  {
    "name": "Jay",
    "img": "ZdCBGF1",
    "opts": {
      "version": [
        "GL",
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
    "devName": "cat_shaman",
    "JPName": "Jay",
    "altImg": "vmGF5nX"
  },
  {
    "name": "Mino",
    "img": "BsCb4BP",
    "opts": {
      "version": [
        "GL",
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
    "devName": "minotaur_girl",
    "JPName": "Mino",
    "altImg": "4tGbfFd"
  },
  {
    "name": "Aureo (Christmas)",
    "img": "3C9pD5B",
    "opts": {
      "version": [
        "GL",
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
    "devName": "docking_beast_xm19",
    "JPName": "Aureo (Christmas)",
    "altImg": "QrX57Pj"
  },
  {
    "name": "Adonis",
    "img": "8BY1XmS",
    "opts": {
      "version": [
        "GL",
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
    "devName": "black_hair_swordman",
    "JPName": "Adoni",
    "altImg": "2P07bFV"
  },
  {
    "name": "Rudy",
    "img": "F54QgXP",
    "opts": {
      "version": [
        "GL",
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
        "Mecha"
      ]
    },
    "devName": "lady_android",
    "JPName": "Rudy",
    "altImg": "X8J7Lrh"
  },
  {
    "name": "Prika (The Poppet Princess)",
    "img": "mShKXGs",
    "opts": {
      "version": [
        "GL",
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
        "Sprite"
      ]
    },
    "devName": "fake_princess",
    "JPName": "Prica / Prika (The Princess of Figment)",
    "altImg": "F53318P"
  },
  {
    "name": "Nimbus",
    "img": "qxZxXSt",
    "opts": {
      "version": [
        "GL",
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
    "devName": "white_tiger",
    "JPName": "Shiro",
    "altImg": "nRGptcn"
  },
  {
    "name": "Mia",
    "img": "XtqsD7z",
    "opts": {
      "version": [
        "GL",
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
    "devName": "tiger_treasure_hunter",
    "JPName": "Mia",
    "altImg": "wyzkD2x"
  },
  {
    "name": "Aurore",
    "img": "3TSBNRx",
    "opts": {
      "version": [
        "GL",
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
    "devName": "birdman",
    "JPName": "Orouru",
    "altImg": "GpDtjmL"
  },
  {
    "name": "Soushiro",
    "img": "94zFQyT",
    "opts": {
      "version": [
        "GL",
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
    "devName": "samurai",
    "JPName": "Soushiro",
    "altImg": "fXP3XZT"
  },
  {
    "name": "Melsele",
    "img": "zNX03JH",
    "opts": {
      "version": [
        "GL",
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
    "devName": "elf_archer",
    "JPName": "Mercel",
    "altImg": "BTSwMk6"
  },
  {
    "name": "Helga",
    "img": "CvrKxqt",
    "opts": {
      "version": [
        "GL",
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
    "devName": "dog_slasher",
    "JPName": "Helga",
    "altImg": "80jsPrm"
  },
  {
    "name": "Arisa",
    "img": "gDRN06s",
    "opts": {
      "version": [
        "GL",
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
    "devName": "arisa",
    "JPName": "Arisa",
    "altImg": "PgsBfQD"
  },
  {
    "name": "Rebecca (New Year)",
    "img": "3ddCszT",
    "opts": {
      "version": [
        "GL",
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
    "devName": "bearish_darkwitch_ny20",
    "JPName": "Rebecca (New Year)",
    "altImg": "0npP5Pt"
  },
  {
    "name": "Lou",
    "img": "kBd6H3r",
    "opts": {
      "version": [
        "GL",
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
    "devName": "beast_adventurer",
    "JPName": "Ruu",
    "altImg": "FbtW3JH"
  },
  {
    "name": "Suzuka",
    "img": "kcykLbH",
    "opts": {
      "version": [
        "GL",
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
    "devName": "timid_kunoichi",
    "JPName": "Suzuka",
    "altImg": "12Sv1Nv"
  },
  {
    "name": "Kohane",
    "img": "t8RHY2q",
    "opts": {
      "version": [
        "GL",
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
    "devName": "tengu_girl",
    "JPName": "Kohane",
    "altImg": "DfFtBk7"
  },
  {
    "name": "Dia",
    "img": "JQPCv8v",
    "opts": {
      "version": [
        "GL",
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
    "devName": "sing_android",
    "JPName": "Dia",
    "altImg": "n3YsJ7r"
  },
  {
    "name": "Gerard",
    "img": "n8pwhTD",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "unicorn_lancer",
    "JPName": "Jelal",
    "altImg": "wg81SZ7"
  },
  {
    "name": "Ellya",
    "img": "q7H1RM0",
    "opts": {
      "version": [
        "GL",
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
    "devName": "lightbullet_wiz",
    "JPName": "Eliya",
    "altImg": "SrDsP4s"
  },
  {
    "name": "Finn",
    "img": "jvNn7fz",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "palpebra_knight",
    "JPName": "Finn",
    "altImg": "kSc83F5"
  },
  {
    "name": "Keira",
    "img": "VCRnPfx",
    "opts": {
      "version": [
        "GL",
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
    "devName": "palpebra_knight_lady",
    "JPName": "Kira",
    "altImg": "8r77VrQ"
  },
  {
    "name": "Parfait (Valentine's Festival Event)",
    "img": "FDqNTbV",
    "opts": {
      "version": [
        "GL",
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
    "devName": "monster_cook",
    "JPName": "Parfait (Valentine Festival!)",
    "altImg": "LvLMJnk"
  },
  {
    "name": "Illumine",
    "img": "ZzZHY32",
    "opts": {
      "version": [
        "GL",
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
    "devName": "illusionist",
    "JPName": "Illumi",
    "altImg": "PcLWBhX"
  },
  {
    "name": "Hopper",
    "img": "m8hQ7M4",
    "opts": {
      "version": [
        "GL",
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
    "devName": "unleash_hunter",
    "JPName": "Hopul",
    "altImg": "brf2MbL"
  },
  {
    "name": "Lyla",
    "img": "yQTZ8QR",
    "opts": {
      "version": [
        "GL",
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
    "devName": "unyielding_adventurer",
    "JPName": "Laia",
    "altImg": "GMS7TTW"
  },
  {
    "name": "Floretta",
    "img": "qRhRV73",
    "opts": {
      "version": [
        "GL",
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
    "devName": "whitedog_beast",
    "JPName": "Floretta",
    "altImg": "BTksgn1"
  },
  {
    "name": "Arum",
    "img": "SQVJvKW",
    "opts": {
      "version": [
        "GL",
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
    "devName": "devil_princess",
    "JPName": "Alm",
    "altImg": "4g2TWW4"
  },
  {
    "name": "Marianne",
    "img": "xzYtXyP",
    "opts": {
      "version": [
        "GL",
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
    "devName": "battle_maid",
    "JPName": "Marianne",
    "altImg": "47hrnjx"
  },
  {
    "name": "Andy",
    "img": "5cFzNXx",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Undead"
      ]
    },
    "devName": "undead_boy",
    "JPName": "Andy",
    "altImg": "g6GjxnQ"
  },
  {
    "name": "Liam",
    "img": "chTHWfr",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Sprite"
      ]
    },
    "devName": "warlock",
    "JPName": "Liam",
    "altImg": "JxHhtsc"
  },
  {
    "name": "Yuwel (New Year)",
    "img": "5kcxcDX",
    "opts": {
      "version": [
        "GL",
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
    "devName": "swallow_knight_ny20",
    "JPName": "Yuwel (New Year)",
    "altImg": "SsvnkGp"
  },
  {
    "name": "Quazer (Co-Op Challenge)",
    "img": "YLmn9R3",
    "opts": {
      "version": [
        "GL",
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
    "devName": "sword_beauty",
    "JPName": "Quartzer (Multi Boss Pick-up)",
    "altImg": "Zgrkq1t"
  },
  {
    "name": "Love (Neon Skyline)",
    "img": "25k0Yjt",
    "opts": {
      "version": [
        "GL",
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
        "Mecha"
      ]
    },
    "devName": "touyakiren_ceo",
    "JPName": "Lav / Love (The Skyscraper)",
    "altImg": "Tgwdqt9"
  },
  {
    "name": "Selgir",
    "img": "xhRx6cn",
    "opts": {
      "version": [
        "GL",
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
    "devName": "blindness_gunner",
    "JPName": "Sergil / Sergyl",
    "altImg": "KXbJ487"
  },
  {
    "name": "Luna",
    "img": "vQBy4FN",
    "opts": {
      "version": [
        "GL",
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
    "devName": "luna",
    "JPName": "Luna",
    "altImg": "QX8SvK7"
  },
  {
    "name": "Lilial",
    "img": "Y0d93kF",
    "opts": {
      "version": [
        "GL",
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
    "devName": "alchemist",
    "JPName": "Lirell",
    "altImg": "tqhQKF4"
  },
  {
    "name": "Marnie",
    "img": "d5Q2M73",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Sprite"
      ]
    },
    "devName": "pretty_witch",
    "JPName": "Meimy",
    "altImg": "HBkPq42"
  },
  {
    "name": "Elise",
    "img": "fvjPS6F",
    "opts": {
      "version": [
        "GL",
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
    "devName": "gunslinger",
    "JPName": "Iris",
    "altImg": "YDBQ4Ry"
  },
  {
    "name": "Haaj",
    "img": "cxWt7yn",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "monster_hunter",
    "JPName": "Hash",
    "altImg": "F69Xs51"
  },
  {
    "name": "Jin",
    "img": "6sXkqqV",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "black_doctor",
    "JPName": "Jin",
    "altImg": "fNBXNzb"
  },
  {
    "name": "Trine",
    "img": "xF89t7J",
    "opts": {
      "version": [
        "GL",
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
    "devName": "cool_woman_soldier",
    "JPName": "Torene",
    "altImg": "pjtSnqc"
  },
  {
    "name": "Gilasrad",
    "img": "4ffv4Ss",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "berserker",
    "JPName": "Gilslad",
    "altImg": "DYxvNYp"
  },
  {
    "name": "Enni",
    "img": "zNVXTW3",
    "opts": {
      "version": [
        "GL",
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
    "devName": "fire_shaman",
    "JPName": "Enni",
    "altImg": "GFWFVwC"
  },
  {
    "name": "Jake",
    "img": "TtJP62V",
    "opts": {
      "version": [
        "GL",
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
        "Human"
      ]
    },
    "devName": "disciplined_swordman",
    "JPName": "Jake",
    "altImg": "JzGwvcr"
  },
  {
    "name": "Cran",
    "img": "MSWrgXR",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Beast"
      ]
    },
    "devName": "birdwoman",
    "JPName": "Kran",
    "altImg": "cgZmZC5"
  },
  {
    "name": "Harlisha",
    "img": "nnHnHqr",
    "opts": {
      "version": [
        "GL",
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
    "devName": "tradition_healer",
    "JPName": "Halisha",
    "altImg": "JnKYVCw"
  },
  {
    "name": "Keylos",
    "img": "LZRgYR9",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Keiros",
    "altImg": "9pNwptj"
  },
  {
    "name": "Trista",
    "img": "wrcX5S0",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Trista",
    "altImg": "X3MvC7t"
  },
  {
    "name": "Walter",
    "img": "Dp2kLPb",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Walter",
    "altImg": "8NnNfvz"
  },
  {
    "name": "Elza",
    "img": "mF38zkw",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Erza",
    "altImg": "4jn75kL"
  },
  {
    "name": "Klaus",
    "img": "M5FDR4M",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Klaus",
    "altImg": "HB1HpsF"
  },
  {
    "name": "Shirano",
    "img": "bmwXs4S",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Shirano",
    "altImg": "PZgq30P"
  },
  {
    "name": "Kaiyu",
    "img": "44RFtsL",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Kaiyu",
    "altImg": "y0H4z7D"
  },
  {
    "name": "Lassie",
    "img": "ThzHpQX",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Ratty",
    "altImg": "bP5JhVd"
  },
  {
    "name": "Faf",
    "img": "0y0TbWs",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Faf",
    "altImg": "3RZBKYk"
  },
  {
    "name": "Rico",
    "img": "k47LfSM",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Riko",
    "altImg": "Nt6zjNk"
  },
  {
    "name": "Challua (Christmas)",
    "img": "MSrXjJ9",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Charua (Christmas)",
    "altImg": "TRznmJn"
  },
  {
    "name": "Clara",
    "img": "vYNgJG4",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Clara",
    "altImg": "jydtNP4"
  },
  {
    "name": "Samantha",
    "img": "n6vgxbH",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Samasa",
    "altImg": "6RG0Ch5"
  },
  {
    "name": "Yuna",
    "img": "0ngdM31",
    "opts": {
      "version": [
        "GL",
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
    "devName": "twin_blader",
    "JPName": "Yuna",
    "altImg": "1ZHyTMz"
  },
  {
    "name": "Bonnie",
    "img": "YLsmHGC",
    "opts": {
      "version": [
        "GL",
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
        "Beast"
      ]
    },
    "devName": "bee_girl",
    "JPName": "Honey",
    "altImg": "f9FZY0n"
  },
  {
    "name": "Taiga",
    "img": "svNxpPg",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Taiga",
    "altImg": "cL1nM4D"
  },
  {
    "name": "Claw",
    "img": "bH3ZVVb",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Kuro",
    "altImg": "mFq3rGP"
  },
  {
    "name": "Albert",
    "img": "8PVmBq1",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Albert",
    "altImg": "4871ZK8"
  },
  {
    "name": "Kazuchi",
    "img": "q9NhhtP",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Youkai"
      ]
    },
    "devName": "oni_girl",
    "JPName": "Kadzuchi",
    "altImg": "tqdbHjR"
  },
  {
    "name": "Tatiana",
    "img": "vD0SK4T",
    "opts": {
      "version": [
        "GL",
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
    "devName": "sociable_mestizo",
    "JPName": "Tatiana",
    "altImg": "Hq8sHGY"
  },
  {
    "name": "Colt",
    "img": "TBnVmR0",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Colt",
    "altImg": "Rgm0D36"
  },
  {
    "name": "Sha Suzu",
    "img": "CwfvJs0",
    "opts": {
      "version": [
        "GL",
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
    "devName": "student_gunsmith",
    "JPName": "Sha Susu",
    "altImg": "s3rH2dK"
  },
  {
    "name": "Fiora",
    "img": "m6BWRc8",
    "opts": {
      "version": [
        "GL",
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
    "devName": "fortuneteller",
    "JPName": "Foula",
    "altImg": "2YNSN87"
  },
  {
    "name": "Mew (New Year)",
    "img": "j57TVxN",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Beast"
      ]
    },
    "devName": "cat_fighter_ny20",
    "JPName": "Miu (New Year)",
    "altImg": "PF9Nv5d"
  },
  {
    "name": "Vargen",
    "img": "HrSy3JQ",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Bargen",
    "altImg": "cQstzFR"
  },
  {
    "name": "Evan",
    "img": "GdPxy4B",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Evan",
    "altImg": "jMnHbqh"
  },
  {
    "name": "Challua",
    "img": "nPL3BmY",
    "opts": {
      "version": [
        "GL",
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
        "Plant",
        "Sprite"
      ]
    },
    "devName": "dryad",
    "JPName": "Charua",
    "altImg": "nryZ8Vs"
  },
  {
    "name": "Regitare",
    "img": "KKvMZf8",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Lecitar",
    "altImg": "pQMv2PG"
  },
  {
    "name": "Naska",
    "img": "0fjv6Zw",
    "opts": {
      "version": [
        "GL",
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
    "devName": "casino_dealer",
    "JPName": "Neska",
    "altImg": "hVR4sNx"
  },
  {
    "name": "Mew",
    "img": "52HVjny",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Beast"
      ]
    },
    "devName": "cat_fighter",
    "JPName": "Miu",
    "altImg": "Byjq0Y2"
  },
  {
    "name": "Folus",
    "img": "G7nyrGf",
    "opts": {
      "version": [
        "GL",
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
        "Demon"
      ]
    },
    "devName": "devil_clown",
    "JPName": "False / Force",
    "altImg": "GdRqJvb"
  },
  {
    "name": "Hartlief",
    "img": "J3H00xQ",
    "opts": {
      "version": [
        "GL",
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
    "devName": "herbalist",
    "JPName": "Heartleaf",
    "altImg": "8dq3KS0"
  },
  {
    "name": "Conner",
    "img": "RzxMFBM",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Connor",
    "altImg": "tY6Fny0"
  },
  {
    "name": "Jester",
    "img": "Ycc1cZW",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Juster",
    "altImg": "6mXtsp8"
  },
  {
    "name": "Kate",
    "img": "1fZwwGt",
    "opts": {
      "version": [
        "GL",
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
    "devName": "gang_girl",
    "JPName": "Kate",
    "altImg": "hMQ97Vg"
  },
  {
    "name": "Corinna",
    "img": "rQQcLXd",
    "opts": {
      "version": [
        "GL",
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
    "devName": "priest",
    "JPName": "Corina",
    "altImg": "c6Vs6y3"
  },
  {
    "name": "Marguerite",
    "img": "QJ1DYcQ",
    "opts": {
      "version": [
        "GL",
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
    "devName": "lady_gunner",
    "JPName": "Marguerite",
    "altImg": "BBWvwyP"
  },
  {
    "name": "Cecilia",
    "img": "9hhxfv1",
    "opts": {
      "version": [
        "GL",
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
    "devName": "woman_knight",
    "JPName": "Cecilia",
    "altImg": "GdQrTVk"
  },
  {
    "name": "Aureo",
    "img": "SR2737D",
    "opts": {
      "version": [
        "GL",
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
        "Beast"
      ]
    },
    "devName": "docking_beast",
    "JPName": "Aureo",
    "altImg": "w74nBn8"
  },
  {
    "name": "Raul",
    "img": "VmB6WQ0",
    "opts": {
      "version": [
        "GL",
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
    "devName": "exorcist_oldman",
    "JPName": "Raul",
    "altImg": "BBLKNbR"
  },
  {
    "name": "Miles",
    "img": "SJBH49H",
    "opts": {
      "version": [
        "GL",
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
    "devName": "half_knight",
    "JPName": "Miles",
    "altImg": "BZJXDwG"
  },
  {
    "name": "Luluca",
    "img": "Z8T9mqG",
    "opts": {
      "version": [
        "GL",
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
    "devName": "reporter",
    "JPName": "Luluca",
    "altImg": "pvmkKYp"
  },
  {
    "name": "Kharo",
    "img": "xSpr9Yq",
    "opts": {
      "version": [
        "GL",
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
        "Beast"
      ]
    },
    "devName": "wild_wolfgirl",
    "JPName": "Caro",
    "altImg": "QCfJSzw"
  },
  {
    "name": "Falsche",
    "img": "xq7FjQW",
    "opts": {
      "version": [
        "GL",
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
    "devName": "reaper_girl",
    "altImg": "Sdzw0df"
  },
  {
    "name": "Jalil",
    "img": "1mLt60W",
    "opts": {
      "version": [
        "GL",
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
    "devName": "chakram_shooter",
    "JPName": "Jalil",
    "altImg": "DKytTGZ"
  },
  {
    "name": "Arly",
    "img": "kyzrfvX",
    "opts": {
      "version": [
        "GL",
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
        "Demon"
      ]
    },
    "devName": "devil_woman_soldier",
    "JPName": "Ari",
    "altImg": "JjZP9XG"
  },
  {
    "name": "Shion",
    "img": "BgwQwSK",
    "opts": {
      "version": [
        "GL",
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
    "devName": "informant",
    "JPName": "Shion",
    "altImg": "DgYKsSR"
  },
  {
    "name": "Adil",
    "img": "rZ53czn",
    "opts": {
      "version": [
        "GL",
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
    "devName": "arabic_swordman",
    "JPName": "Adil",
    "altImg": "jyqJYSB"
  },
  {
    "name": "Dorothea",
    "img": "xgYmZDF",
    "opts": {
      "version": [
        "GL",
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
    "devName": "dark_nursemaid",
    "JPName": "Dorothea",
    "altImg": "106nfKD"
  },
  {
    "name": "Rebecca",
    "img": "Nx05C1R",
    "opts": {
      "version": [
        "GL",
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
        "Human",
        "Beast"
      ]
    },
    "devName": "bearish_darkwitch",
    "JPName": "Rebecca",
    "altImg": "940j4SN"
  },
  {
    "name": "Nochel",
    "img": "5ccKncM",
    "opts": {
      "version": [
        "GL",
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
    "devName": "monster_attract",
    "JPName": "Nocelle",
    "altImg": "drV7cp4"
  },
  {
    "name": "Meryll",
    "img": "rMfg4RS",
    "opts": {
      "version": [
        "GL",
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
    "devName": "delusion_girl",
    "JPName": "Meryl",
    "altImg": "MhmkvF6"
  },
  {
    "name": "Golem",
    "img": "NsMCtdN",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Golem",
    "altImg": "7KgJnJT"
  },
  {
    "name": "Owlbert",
    "img": "7WjsQBd",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Pojito",
    "altImg": "tbQ0NK1"
  },
  {
    "name": "Kamaitachi",
    "img": "KjNdRWh",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Kamaitachi",
    "altImg": "gmKm55g"
  },
  {
    "name": "CF Kiseki (Miraculous Golden Head Collab)",
    "img": "hZfGQrL",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "CF Kiseki (Golden Head of Miracle Collab)",
    "altImg": "cbvLLNV"
  },
  {
    "name": "Towa Kiseki (Miraculous Golden Head Collab)",
    "img": "c2Br5fK",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Towa Kiseki (Golden Head of Miracle Collab)",
    "altImg": "z8CXm6v"
  },
  {
    "name": "Shroombo",
    "img": "7VMX2Gv",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Kino",
    "altImg": "4mBQ64p"
  },
  {
    "name": "Red Blobble",
    "img": "h9Wbrsx",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Red Pore",
    "altImg": "d5sL7dR"
  },
  {
    "name": "Fire Imp",
    "img": "qjG7n4h",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Fire Spirit",
    "altImg": "t815Q0j"
  },
  {
    "name": "Blue Blobble",
    "img": "LJMNThX",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Blue Pore",
    "altImg": "bLsWbQt"
  },
  {
    "name": "Yellow Blobble",
    "img": "7Xyzt5N",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Yellow Pore",
    "altImg": "mtTVCrb"
  },
  {
    "name": "Zapquill",
    "img": "NjKMgJB",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Pararat",
    "altImg": "HX4Tsh9"
  },
  {
    "name": "Green Blobble",
    "img": "rQs05Gq",
    "opts": {
      "version": [
        "GL",
        "JP"
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
    "JPName": "Green Pore",
    "altImg": "34bw1NK"
  },
  {
    "name": "Mia (Summer)",
    "img": "hFLB9p9",
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
        "Beast"
      ]
    },
    "devName": "tiger_treasure_hunter_smr20",
    "JPName": "Mia (Summer)",
    "altImg": "Zf2TsNG"
  },
  {
    "name": "Hanabi (Anniversary)",
    "img": "x5Q5B9k",
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
    "devName": "kunoichi_1anv",
    "JPName": "Hanabi (Anniversary)",
    "altImg": "TPPRLWg"
  },
  {
    "name": "Bianca (Christmas)",
    "img": "qkwPZf7",
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
    "devName": "lady_summoner_xm20",
    "JPName": "Bianca (Christmas)",
    "altImg": "b3LFp2h"
  },
  {
    "name": "Toria",
    "img": "0ZWSv0S",
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
    "devName": "halberd_princess",
    "JPName": "Toria",
    "altImg": "TYDbRrx"
  },
  {
    "name": "Liao",
    "img": "yqQy0Gx",
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
    "devName": "doctor_pirate",
    "JPName": "Liao",
    "altImg": "HVSr6c8"
  },
  {
    "name": "Suizen (White Day)",
    "img": "T89vCt9",
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
    "devName": "onmyoji_boy_wt21",
    "JPName": "Suizen (White Day)",
    "altImg": "9W2cbRb"
  },
  {
    "name": "Quare",
    "img": "7rS0Np6",
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
    "devName": "magical_bayonetter",
    "JPName": "Quare",
    "altImg": "tBCF1HH"
  },
  {
    "name": "Zeta",
    "img": "3SLNKYb",
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
    "devName": "zeta",
    "JPName": "Zeta",
    "altImg": "ThcBhNd"
  },
  {
    "name": "Leticia",
    "img": "2ZtY9FK",
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
    "devName": "tsundere_bountyhunter",
    "JPName": "Leticia",
    "altImg": "p1m9jdd"
  },
  {
    "name": "Ecrire / Écrire (Summer)",
    "img": "5G2GhWz",
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
    "devName": "bodysuit_trooper_smr21",
    "JPName": "Ecrire / Écrire (Summer)",
    "altImg": "3SnJVPy"
  },
  {
    "name": "Haruhi Suzumiya (The Melancholy of Haruhi Suzumiya Collab)",
    "img": "JmzW1h1",
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
    "devName": "suzumiya_haruhi",
    "JPName": "Haruhi Suzumiya (The Melancholy of Haruhi Suzumiya Collab)",
    "altImg": "415t0Qv"
  },
  {
    "name": "Ryunon",
    "img": "3dxBRnt",
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
    "devName": "shadow_redhood",
    "JPName": "Ryunon",
    "altImg": "q97062T"
  },
  {
    "name": "Marina (Anniversary)",
    "img": "T0hPt75",
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
    "devName": "pirates_girl_2anv",
    "JPName": "Marina (Anniversary)",
    "altImg": "CtZ0Kxk"
  },
  {
    "name": "Misogi",
    "img": "XSL9hzc",
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
    "devName": "misogi",
    "JPName": "Misogi",
    "altImg": "PgMNYGy"
  },
  {
    "name": "Leticia (Valentine)",
    "img": "J3VdCfm",
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
    "devName": "tsundere_bountyhunter_vt22",
    "JPName": "Leticia (Valentine)",
    "altImg": "QNYtD34"
  },
  {
    "name": "Lazeret (Summer)",
    "img": "Jd6MNwG",
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
    "devName": "prince_zero_smr20",
    "JPName": "Lazeret (Summer)",
    "altImg": "BBxsTGk"
  },
  {
    "name": "Sakura Minamoto (Zombie Land Saga Collab)",
    "img": "Bc4RgRH",
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
    "devName": "minamoto_sakura",
    "JPName": "Sakura Minamoto (Zombie Land Saga Collab)",
    "altImg": "Jc2mbqz"
  },
  {
    "name": "Raylas",
    "img": "SBxBgMP",
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
    "devName": "freeze_eye",
    "JPName": "Raylas",
    "altImg": "bbjJ6hP"
  },
  {
    "name": "Emilia (Re:Zero Collab)",
    "img": "W5pPF8D",
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
    "devName": "emilia",
    "JPName": "Emilia (Re:Zero Collab)",
    "altImg": "kqNGgGx"
  },
  {
    "name": "Rem (Re:Zero Collab)",
    "img": "X2F0248",
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
    "devName": "rem",
    "JPName": "Rem (Re:Zero Collab)",
    "altImg": "71PRxQP"
  },
  {
    "name": "Sheyron / Shuilong",
    "img": "7yQycM4",
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
    "devName": "waterdragon_kunfu",
    "JPName": "Sheyron / Shuilong",
    "altImg": "stM3dKf"
  },
  {
    "name": "Halidal",
    "img": "WKF2St1",
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
    "devName": "desert_commander",
    "JPName": "Halidal",
    "altImg": "DCZ0p7K"
  },
  {
    "name": "Amelia (Half Anniversary)",
    "img": "5FXsv2P",
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
    "devName": "mermaid_1halfanv",
    "JPName": "Amelia (Half Anniversary)",
    "altImg": "0ymmJz8"
  },
  {
    "name": "Mamnalia",
    "img": "pn2qPrt",
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
    "devName": "holy_mother",
    "JPName": "Mamnalia",
    "altImg": "QvtFNc0"
  },
  {
    "name": "Yuki Nagato (The Melancholy of Haruhi Suzumiya Collab)",
    "img": "Fm7ddDb",
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
    "devName": "nagato_yuki",
    "JPName": "Yuki Nagato (The Melancholy of Haruhi Suzumiya Collab)",
    "altImg": "9Ns2pF8"
  },
  {
    "name": "Sheyron / Shuilong (Beast)",
    "img": "HtSkyYF",
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
    "devName": "waterdragon_kunfu_proud",
    "JPName": "Sheyron / Shuilong (Beast)",
    "altImg": "cxKLfFG"
  },
  {
    "name": "Mishima Yuki",
    "img": "L0SN1Gj",
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
    "devName": "psychic_yuki",
    "JPName": "Mishima Yuki",
    "altImg": "n7gqr43"
  },
  {
    "name": "Fraxis",
    "img": "rQ8gGww",
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
    "devName": "navy_officer",
    "JPName": "Fraxis",
    "altImg": "r6x3YBh"
  },
  {
    "name": "Cypher (Anniversary)",
    "img": "0sBLkp9",
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
    "devName": "ice_witch_2anv",
    "JPName": "Cypher (Anniversary)",
    "altImg": "3r1qmLW"
  },
  {
    "name": "Raylas (Christmas)",
    "img": "zFCmhhs",
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
    "devName": "freeze_eye_xm21",
    "JPName": "Raylas (Christmas)",
    "altImg": "rpxFft4"
  },
  {
    "name": "Toraetty (New Year)",
    "img": "1qYRgwt",
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
    "devName": "heavenly_three",
    "JPName": "Toraetty (New Year)",
    "altImg": "r3zdTnm"
  },
  {
    "name": "Kyouka",
    "img": "HX0GmZt",
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
    "devName": "kyouka",
    "JPName": "Kyouka",
    "altImg": "x5NSf3D"
  },
  {
    "name": "Illumi (Summer)",
    "img": "xMG6cX1",
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
        "Sprite"
      ]
    },
    "devName": "illusionist_smr20",
    "JPName": "Illumi (Summer)",
    "altImg": "m8b9FWz"
  },
  {
    "name": "Bercetia (Summer)",
    "img": "FbJ00VC",
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
        "Sprite"
      ]
    },
    "devName": "dimension_witch_smr20",
    "JPName": "Bercetia (Summer)",
    "altImg": "c1NmtD5"
  },
  {
    "name": "Regis (Anniversary)",
    "img": "9yn0rJR",
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
    "devName": "rec_android_1anv",
    "JPName": "Regis (Anniversary)",
    "altImg": "L8f2ty0"
  },
  {
    "name": "Beaucy (New Year)",
    "img": "zP798fN",
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
    "devName": "heavenly_two",
    "JPName": "Beaucy (New Year)",
    "altImg": "x1G2sqk"
  },
  {
    "name": "Rhode",
    "img": "DMF02Yr",
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
    "devName": "girl_and_mecha",
    "JPName": "Rhode",
    "altImg": "QF8jRBk"
  },
  {
    "name": "Twink",
    "img": "ypyT7Tf",
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
    "devName": "general_toyakiren",
    "JPName": "Twink",
    "altImg": "ZhCk0MT"
  },
  {
    "name": "Zantetsu",
    "img": "dJfJ6NQ",
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
    "devName": "samurai_robot",
    "JPName": "Zantetsu",
    "altImg": "rtkfGQ0"
  },
  {
    "name": "Marquis",
    "img": "2yF1BTY",
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
    "devName": "elder_guild_fighter",
    "JPName": "Marquis",
    "altImg": "sWnH5R6"
  },
  {
    "name": "Sera (Summer)",
    "img": "PTYjkwF",
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
    "devName": "machine_police_girl_smr21",
    "JPName": "Sera (Summer)",
    "altImg": "vDvPJ8K"
  },
  {
    "name": "Memram",
    "img": "6wDqL4k",
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
    "devName": "horn_leader",
    "JPName": "Memram",
    "altImg": "tDp1MwJ"
  },
  {
    "name": "Stryna",
    "img": "170S2Np",
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
    "devName": "cyber_battergirl",
    "JPName": "Stryna",
    "altImg": "qpW3TS8"
  },
  {
    "name": "Helga (Beast)",
    "img": "hWZQGdT",
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
    "devName": "dog_slasher_proud",
    "JPName": "Helga (Beast)",
    "altImg": "dQRPFQh"
  },
  {
    "name": "Kazutake Tooru",
    "img": "7yhdYmq",
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
    "devName": "psychic_tohru",
    "JPName": "Kazutake Tooru",
    "altImg": "Z2NV8N6"
  },
  {
    "name": "Shiro (Anniversary)",
    "img": "fSm4k5y",
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
    "devName": "white_tiger_2anv",
    "JPName": "Shiro (Anniversary)",
    "altImg": "j47HmKJ"
  },
  {
    "name": "Kokkoro",
    "img": "gm0JLGF",
    "opts": {
      "version": [
		"GL",
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
    "devName": "kokkoro",
    "JPName": "Kokkoro",
    "altImg": "K7LMwVT"
  },
  {
    "name": "Shult ",
    "img": "G0QYvvQ",
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
    "devName": "wind_dragon",
    "JPName": "Shult ",
    "altImg": "4TnZMv6"
  },
  {
    "name": "Saki Nikaido (Zombie Land Saga Collab)",
    "img": "VJWyv93",
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
    "devName": "nikaido_saki",
    "JPName": "Saki Nikaido (Zombie Land Saga Collab)",
    "altImg": "QPxwF1F"
  },
  {
    "name": "Esterielle",
    "img": "M7QqMB1",
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
    "devName": "elf_princess",
    "JPName": "Esterielle",
    "altImg": "wW2r3Xf"
  },
  {
    "name": "Silty (Anniversary)",
    "img": "5nJPBmV",
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
    "devName": "wind_spgirl_1anv",
    "JPName": "Silty (Anniversary)",
    "altImg": "SNb9VLh"
  },
  {
    "name": "Suzuka (New Year)",
    "img": "kmP20MN",
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
    "devName": "timid_kunoichi_ny21",
    "JPName": "Suzuka (New Year)",
    "altImg": "DGFGJfG"
  },
  {
    "name": "Fluffy",
    "img": "QX37yCT",
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
    "devName": "combat_animal",
    "JPName": "Fluffy",
    "altImg": "7zGcn5y"
  },
  {
    "name": "Sonya (Limited)",
    "img": "L53yHLc",
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
    "devName": "brown_fighter_dst21",
    "JPName": "Sonya (Limited)",
    "altImg": "Kqs1NJg"
  },
  {
    "name": "Nevia",
    "img": "dPrgBLS",
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
    "devName": "beast_shaman",
    "JPName": "Nevia",
    "altImg": "1Q9rzjL"
  },
  {
    "name": "Esterielle (Half Anniversary)",
    "img": "3TTyGq4",
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
    "devName": "elf_princess_1halfanv",
    "JPName": "Esterielle (Half Anniversary)",
    "altImg": "GsM3bxw"
  },
  {
    "name": "Shiue (Summer)",
    "img": "s6cC3w5",
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
    "devName": "bigwing_shaman_smr21",
    "JPName": "Shiue (Summer)",
    "altImg": "r24K4CH"
  },
  {
    "name": "Gouran",
    "img": "V288CTV",
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
    "devName": "tengu_master",
    "JPName": "Gouran",
    "altImg": "mBGHYzp"
  },
  {
    "name": "Leon (Summer/Yukata)",
    "img": "87WkyRF",
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
    "devName": "mercenary_smr21",
    "JPName": "Leon (Summer/Yukata)",
    "altImg": "CmTNMn5"
  },
  {
    "name": "Fluffy (Christmas)",
    "img": "mSP5jMC",
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
    "devName": "combat_animal_xm21",
    "JPName": "Fluffy (Christmas)",
    "altImg": "8Ktzdzp"
  },
  {
    "name": "Mimi",
    "img": "r0H7T2X",
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
    "devName": "mimi",
    "JPName": "Mimi",
    "altImg": "N1RZDSg"
  },
  {
    "name": "Pecorine",
    "img": "vx7V7HD",
    "opts": {
      "version": [
		"GL",
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
    "devName": "pecorine",
    "JPName": "Pecorine",
    "altImg": "3Mtfqpb"
  },
  {
    "name": "Lila",
    "img": "SXrP8hq",
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
    "devName": "neoviolin_musician",
    "JPName": "Lila",
    "altImg": "W2ffFrr"
  },
  {
    "name": "Orvelle",
    "img": "WKVYkfj",
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
    "devName": "high_priestess",
    "JPName": "Orvelle",
    "altImg": "yRPzZ6y"
  },
  {
    "name": "Philamelia",
    "img": "7kNrTdJ",
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
    "devName": "lamp_guide",
    "JPName": "Philamelia",
    "altImg": "CsHSLM3"
  },
  {
    "name": "Lily Hoshikawa (Zombie Land Saga Collab)",
    "img": "hyXsBFM",
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
    "devName": "hoshikawa_ririi",
    "JPName": "Lily Hoshikawa (Zombie Land Saga Collab)",
    "altImg": "VVgv1TS"
  },
  {
    "name": "Philia (Anniversary)",
    "img": "b3YFVf2",
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
    "devName": "wind_oracle_1anv",
    "JPName": "Philia (Anniversary)",
    "altImg": "bH2gv8p"
  },
  {
    "name": "Eliya (Valentine's)",
    "img": "VSjfkq0",
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
    "devName": "lightbullet_wiz_vt21",
    "JPName": "Eliya (Valentine's)",
    "altImg": "jw0vpjX"
  },
  {
    "name": "Seriol",
    "img": "C8NzG8t",
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
    "devName": "crystal_swordman",
    "JPName": "Seriol",
    "altImg": "J5dMpH0"
  },
  {
    "name": "Rengetsu",
    "img": "ygxcjph",
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
    "devName": "yokai_exterminator",
    "JPName": "Rengetsu",
    "altImg": "cXcQ1QD"
  },
  {
    "name": "Lilith (Summer)",
    "img": "LrySnCH",
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
    "devName": "resistance_princess_smr21",
    "JPName": "Lilith (Summer)",
    "altImg": "vwCRLCv"
  },
  {
    "name": "Inaho (Summer)",
    "img": "XpHTTLR",
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
    "devName": "fox_oracle_smr21",
    "JPName": "Inaho (Summer)",
    "altImg": "h7N6xgx"
  },
  {
    "name": "Mikuru Asahina (The Melancholy of Haruhi Suzumiya Collab)",
    "img": "zSrf5R6",
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
    "devName": "asahina_mikuru",
    "JPName": "Mikuru Asahina (The Melancholy of Haruhi Suzumiya Collab)",
    "altImg": "MkSf9sz"
  },
  {
    "name": "Nephteim (Summer/Yukata)",
    "img": "1fLpsKK",
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
    "devName": "ruin_girl_smr21",
    "JPName": "Nephteim (Summer/Yukata)",
    "altImg": "k0vKDYn"
  },
  {
    "name": "Zekhel",
    "img": "fnrYS4y",
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
    "devName": "guildknight_leader",
    "JPName": "Zekhel",
    "altImg": "mTgJ7b9"
  },
  {
    "name": "Lila (Halloween)",
    "img": "0sQvLHk",
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
    "devName": "neoviolin_musician_hw21",
    "JPName": "Lila (Halloween)",
    "altImg": "t23bt4B"
  },
  {
    "name": "Orvelle (New Year)",
    "img": "DpPjfjj",
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
    "devName": "high_priestess_ny22",
    "JPName": "Orvelle (New Year)",
    "altImg": "MN6PCN9"
  },
  {
    "name": "Nate (Valentine)",
    "img": "q520ZkC",
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
    "devName": "hero_girl_vt22",
    "JPName": "Nate (Valentine)",
    "altImg": "j4czVb3"
  },
  {
    "name": "Karyl",
    "img": "tQqKG23",
    "opts": {
      "version": [
		"GL",
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
    "devName": "kyaru",
    "JPName": "Karyl",
    "altImg": "LNsn6TK"
  },
  {
    "name": "Alice (Summer)",
    "img": "r6HcwWb",
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
    "devName": "alice_smr20",
    "JPName": "Alice (Summer)",
    "altImg": "Dt8vRYd"
  },
  {
    "name": "Junko Konno (Zombie Land Saga Collab)",
    "img": "pRhpTv2",
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
    "devName": "konno_junko",
    "JPName": "Junko Konno (Zombie Land Saga Collab)",
    "altImg": "d6zzyKL"
  },
  {
    "name": "Dia (Halloween)",
    "img": "XJMn9vr",
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
    "devName": "sing_android_hw20",
    "JPName": "Dia (Halloween)",
    "altImg": "Mp0hjZY"
  },
  {
    "name": "Dine",
    "img": "xG3LDqP",
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
    "devName": "dark_psygirl",
    "JPName": "Dine",
    "altImg": "wNyd3r0"
  },
  {
    "name": "Educeus",
    "img": "1rB6cCz",
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
    "devName": "devil_leader",
    "JPName": "Educeus",
    "altImg": "jVJmB2n"
  },
  {
    "name": "Yakumo",
    "img": "hB0B3Q9",
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
    "devName": "silent_ninja",
    "JPName": "Yakumo",
    "altImg": "yfvFzjb"
  },
  {
    "name": "Alm (Christmas)",
    "img": "JnPC7C4",
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
    "devName": "devil_princess_xm20",
    "JPName": "Alm (Christmas)",
    "altImg": "sy5mkDX"
  },
  {
    "name": "Couette",
    "img": "Tv9d8QH",
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
    "devName": "summoner_little",
    "JPName": "Couette",
    "altImg": "P4sj9Kc"
  },
  {
    "name": "Maelviola",
    "img": "qFcmyXG",
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
    "devName": "noble_sorceress",
    "JPName": "Maelviola",
    "altImg": "4MpFKjN"
  },
  {
    "name": "Dine (Limited)",
    "img": "yX1JZJ7",
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
    "devName": "dark_psygirl_dst21",
    "JPName": "Dine (Limited)",
    "altImg": "CQ3rRWw"
  },
  {
    "name": "Beatrix",
    "img": "p1W1Gkz",
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
    "devName": "beatrix",
    "JPName": "Beatrix",
    "altImg": "JCS5Yd3"
  },
  {
    "name": "Sergil / Sergyl (Half Anniversary)",
    "img": "qgXhHXx",
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
    "devName": "blindness_gunner_1halfanv",
    "JPName": "Sergil / Sergyl (Half Anniversary)",
    "altImg": "DLB8GZB"
  },
  {
    "name": "Primula",
    "img": "YXpHYW0",
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
    "devName": "blackflower_wiz",
    "JPName": "Primula",
    "altImg": "qDr4Mrb"
  },
  {
    "name": "Lav / Love (Halloween)",
    "img": "86Q3x4K",
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
    "devName": "touyakiren_ceo_hw21",
    "JPName": "Lav / Love (Halloween)",
    "altImg": "nBY1PLj"
  },
  {
    "name": "Inori Shouta",
    "img": "9GgrD4w",
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
    "devName": "psychic_shouta",
    "JPName": "Inori Shouta",
    "altImg": "0yd4GJD"
  },
  {
    "name": "Couette (Anniversary)",
    "img": "vLXTMKm",
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
    "devName": "summoner_little_2anv",
    "JPName": "Couette (Anniversary)",
    "altImg": "CmWVSHT"
  },
  {
    "name": "Bercetia (New Year)",
    "img": "PCYbZnP",
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
    "devName": "dimension_witch_ny22",
    "JPName": "Bercetia (New Year)",
    "altImg": "hW7zh1X"
  },
  {
    "name": "Melmyna",
    "img": "r4tqrRp",
    "opts": {
      "version": [
		"GL",
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
    "devName": "sanctuary_guard",
    "JPName": "Milmina",
    "altImg": "YRb31zH"
  },
  {
    "name": "Nasir",
    "img": "DbktFTK",
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
    "devName": "magic_sword_girl",
    "JPName": "Nasir",
    "altImg": "VW8fVF7"
  },
  {
    "name": "Kuramaru",
    "img": "TL5qt9X",
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
    "devName": "vigilante_boy",
    "JPName": "Kuramaru",
    "altImg": "10450xw"
  },
  {
    "name": "Yugiri (Zombie Land Saga Collab)",
    "img": "mGjZ3F8",
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
    "devName": "yugiri",
    "JPName": "Yugiri (Zombie Land Saga Collab)",
    "altImg": "YW2Rq6d"
  },
  {
    "name": "Nikola",
    "img": "yPswjdX",
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
    "devName": "sorceress_teacher",
    "JPName": "Nikola",
    "altImg": "0cs8WJ0"
  },
  {
    "name": "Arc (Anniversary)",
    "img": "cNB0x3R",
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
    "devName": "alk_1anv",
    "JPName": "Arc (Anniversary)",
    "altImg": "FWZPDXv"
  },
  {
    "name": "Torene (Christmas)",
    "img": "qgWbfyK",
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
    "devName": "cool_woman_soldier_xm20",
    "JPName": "Torene (Christmas)",
    "altImg": "c3XsXWx"
  },
  {
    "name": "Maihime",
    "img": "vLtC7br",
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
    "devName": "naginata_girl",
    "JPName": "Maihime",
    "altImg": "JvTHjn9"
  },
  {
    "name": "Azel (Summer)",
    "img": "8BmYc0T",
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
    "devName": "dragon_slayer_smr21",
    "JPName": "Azel (Summer)",
    "altImg": "5WP5WxS"
  },
  {
    "name": "Kyon (The Melancholy of Haruhi Suzumiya Collab)",
    "img": "LPHw0kK",
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
    "devName": "kyon",
    "JPName": "Kyon (The Melancholy of Haruhi Suzumiya Collab)",
    "altImg": "hdjFrCm"
  },
  {
    "name": "Hikawa Rinne",
    "img": "Wf0btxc",
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
    "devName": "psychic_tomboygirl",
    "JPName": "Hikawa Rinne",
    "altImg": "FHtHN67"
  },
  {
    "name": "Nagihara Nao",
    "img": "DVf5bCV",
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
    "devName": "psychic_nao",
    "JPName": "Nagihara Nao",
    "altImg": "zHn2ZKD"
  },
  {
    "name": "Pishika",
    "img": "pQ0Qmzx",
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
    "devName": "nurse_pirate",
    "JPName": "Pishika",
    "altImg": "yVYzr0c"
  },
  {
    "name": "Revy (New Year)",
    "img": "vhzCfZt",
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
    "devName": "shapely_soldier_ny22",
    "JPName": "Revy (New Year)",
    "altImg": "HB59LHP"
  },
  {
    "name": "Jelal (Summer)",
    "img": "Tqbrpcx",
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
    "devName": "unicorn_lancer_smr20",
    "JPName": "Jelal (Summer)",
    "altImg": "cTy6Bpz"
  },
  {
    "name": "Marina (Summer)",
    "img": "84vy0p9",
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
    "devName": "pirates_girl_smr20",
    "JPName": "Marina (Summer)",
    "altImg": "vdnRC08"
  },
  {
    "name": "Vivi",
    "img": "BgWM2Ly",
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
    "devName": "shy_assassin",
    "JPName": "Vivi",
    "altImg": "9N2Y73P"
  },
  {
    "name": "Trista (New Year)",
    "img": "NVjjk4h",
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
    "devName": "urban_soldier_ny21",
    "JPName": "Trista (New Year)",
    "altImg": "HrC0K08"
  },
  {
    "name": "Sotieth (Oath to the Dawn)",
    "img": "nrJfLfN",
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
    "devName": "ruin_lady",
    "JPName": "Sotieth (Oath to the Dawn)",
    "altImg": "chDbfYb"
  },
  {
    "name": "Nate (HERO: BEGINNING)",
    "img": "mzhr9WR",
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
    "devName": "hero_girl",
    "JPName": "Nate (HERO: BEGINNING)",
    "altImg": "syDQSWT"
  },
  {
    "name": "Facon",
    "img": "6bcfKZM",
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
    "devName": "stylish_witch",
    "JPName": "Facon",
    "altImg": "k6TD4yx"
  },
  {
    "name": "Evelyn",
    "img": "rsyJTf9",
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
    "devName": "dress_gunner",
    "JPName": "Evelyn",
    "altImg": "99prNfB"
  },
  {
    "name": "Shirano (Summer)",
    "img": "ZmqTVPG",
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
    "devName": "fox_companion_smr21",
    "JPName": "Shirano (Summer)",
    "altImg": "WHDz7PK"
  },
  {
    "name": "Lanner (Halloween)",
    "img": "KbLk8xN",
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
    "devName": "spry_sailor_hw21",
    "JPName": "Lanner (Halloween)",
    "altImg": "NmrXDTx"
  },
  {
    "name": "Takamori Seiji",
    "img": "bspKQhk",
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
    "devName": "psychic_seiji",
    "JPName": "Takamori Seiji",
    "altImg": "SVpRTfC"
  },
  {
    "name": "Neska (Summer)",
    "img": "YNFSzXR",
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
    "devName": "casino_dealer_smr20",
    "JPName": "Neska (Summer)",
    "altImg": "RSvgtFF"
  },
  {
    "name": "Roselia",
    "img": "c863x3f",
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
    "devName": "hidden_blader",
    "JPName": "Roselia",
    "altImg": "9NfN2qQ"
  },
  {
    "name": "Ai Mizuno (Zombie Land Saga Collab)",
    "img": "JBV04Bf",
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
    "devName": "mizuno_ai",
    "JPName": "Ai Mizuno (Zombie Land Saga Collab)",
    "altImg": "Yczt6B0"
  },
  {
    "name": "Lunalu (Halloween)",
    "img": "MfgcQL1",
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
    "devName": "fox_scientist_hw20",
    "JPName": "Lunalu (Halloween)",
    "altImg": "s56W4vx"
  },
  {
    "name": "Adoni (Christmas)",
    "img": "N33GHC0",
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
    "devName": "black_hair_swordman_xm20",
    "JPName": "Adoni (Christmas)",
    "altImg": "zPPKxGB"
  },
  {
    "name": "To Rereni",
    "img": "tPYBxbr",
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
    "devName": "little_wizard",
    "JPName": "To Rereni",
    "altImg": "NYfS0jL"
  },
  {
    "name": "Editha",
    "img": "MV2T9b0",
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
    "devName": "punk_warrior",
    "JPName": "Editha",
    "altImg": "ypJ9Dqy"
  },
  {
    "name": "Telna",
    "img": "brncpN5",
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
    "devName": "electro_girl",
    "JPName": "Telna",
    "altImg": "rfp3rMQ"
  },
  {
    "name": "Giselle",
    "img": "KVcQd2q",
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
    "devName": "secret_observer",
    "JPName": "Giselle",
    "altImg": "XjNThD9"
  },
  {
    "name": "Fuku",
    "img": "3FhwNxz",
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
    "devName": "warashi",
    "JPName": "Fuku",
    "altImg": "94sskcY"
  },
  {
    "name": "Theo",
    "img": "4ShM2vx",
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
    "devName": "lion_boy",
    "JPName": "Theo",
    "altImg": "2Msr41X"
  },
  {
    "name": "Kuro (New Year)",
    "img": "3CdTN6r",
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
    "devName": "outlaw_panther_ny22",
    "JPName": "Kuro (New Year)",
    "altImg": "Lnmcnkk"
  },
  {
    "name": "Elegia",
    "img": "0C6fVFm",
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
    "devName": "spanner_girl",
    "JPName": "Elegia",
    "altImg": "V2ydyyD"
  },
  {
    "name": "Kugui (The Edited Day of Yo-kai Book)",
    "img": "mT55khM",
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
    "devName": "ekaki_onmyoji",
    "JPName": "Kugui (The Edited Day of Yo-kai Book)",
    "altImg": "52GvqNy"
  },
  {
    "name": "Hao",
    "img": "F5fdtbs",
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
    "devName": "wild_boy",
    "JPName": "Hao",
    "altImg": "LRWzn8P"
  },
  {
    "name": "Shiro (Christmas)",
    "img": "4jHjcDS",
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
    "devName": "white_tiger_xm20",
    "JPName": "Shiro (Christmas)",
    "altImg": "vwgbvyT"
  },
  {
    "name": "Ram (Re:Zero Collab)",
    "img": "7vc2dxb",
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
    "devName": "ram",
    "JPName": "Ram (Re:Zero Collab)",
    "altImg": "2sp2VJD"
  },
  {
    "name": "Ricardo",
    "img": "7p5gg7d",
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
    "devName": "wind_striker",
    "JPName": "Ricardo",
    "altImg": "HV7PvvV"
  },
  {
    "name": "Middie",
    "img": "2YKvDWf",
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
    "devName": "steel_lacrosse",
    "JPName": "Middie",
    "altImg": "tqLydGX"
  },
  {
    "name": "Piamo",
    "img": "tKxRrwN",
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
    "devName": "cool_witch_girl",
    "JPName": "Piamo",
    "altImg": "30mZXDT"
  },
  {
    "name": "Lemarque",
    "img": "MVvnQbW",
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
    "devName": "bird_master",
    "JPName": "Lemarque",
    "altImg": "sv6mpVw"
  },
  {
    "name": "Makani",
    "img": "vx0T9JZ",
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
    "devName": "pilgrim_monk",
    "JPName": "Makani",
    "altImg": "tMgv6Mg"
  },
  {
    "name": "Milmina (Halloween)",
    "img": "qYFvTJR",
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
    "devName": "sanctuary_guard_hw21",
    "JPName": "Milmina (Halloween)",
    "altImg": "p0DBKrp"
  },
  {
    "name": "Merienna",
    "img": "VxpcQtH",
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
    "devName": "sheep_girl",
    "JPName": "Merienna",
    "altImg": "LrrGNWz"
  },
  {
    "name": "Riesel (Summer)",
    "img": "CKC90gK",
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
    "devName": "bishop_girl_smr20",
    "JPName": "Riesel (Summer)",
    "altImg": "74Qd92q"
  },
  {
    "name": "Kiana",
    "img": "QcZTrZN",
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
    "devName": "keylock_girl",
    "JPName": "Kiana",
    "altImg": "pzXY6Ld"
  },
  {
    "name": "Lilith",
    "img": "x6yB5mr",
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
    "devName": "resistance_princess",
    "JPName": "Lilith",
    "altImg": "4Z67KxP"
  },
  {
    "name": "Mech",
    "img": "R6cdvrN",
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
    "devName": "doctor_machine",
    "JPName": "Mech",
    "altImg": "611NpLr"
  },
  {
    "name": "Cecilia (Anniversary)",
    "img": "hdTd1fw",
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
    "devName": "woman_knight_1anv",
    "JPName": "Cecilia (Anniversary)",
    "altImg": "y4BvVdm"
  },
  {
    "name": "Dilette",
    "img": "yptnPKf",
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
    "devName": "sea_violent",
    "JPName": "Dilette",
    "altImg": "RHq694h"
  },
  {
    "name": "Floretta (Valentine's)",
    "img": "W5VgLqs",
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
    "devName": "whitedog_beast_vt21",
    "JPName": "Floretta (Valentine's)",
    "altImg": "6W2VCb8"
  },
  {
    "name": "Fini",
    "img": "9gJ6gs7",
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
    "devName": "sleep_puppy",
    "JPName": "Fini",
    "altImg": "ZGNbN0m"
  },
  {
    "name": "Sariha",
    "img": "5TdPRRB",
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
    "devName": "desert_priest",
    "JPName": "Sariha",
    "altImg": "NLWxJsq"
  },
  {
    "name": "Souvi (Summer)",
    "img": "ySW4r0D",
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
    "devName": "psycho_reaper_smr21",
    "JPName": "Souvi (Summer)",
    "altImg": "09JHFgv"
  },
  {
    "name": "Stella",
    "img": "6bdvwPh",
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
    "devName": "stella_2anv",
    "JPName": "Stella",
    "altImg": "vhj85XF"
  },
  {
    "name": "False / Force (Christmas)",
    "img": "PZ6HhkS",
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
    "devName": "devil_clown_xm21",
    "JPName": "False / Force (Christmas)",
    "altImg": "Fwm3CxB"
  },
  {
    "name": "Marguerite (Summer)",
    "img": "4sYFYxT",
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
    "devName": "lady_gunner_smr20",
    "JPName": "Marguerite (Summer)",
    "altImg": "D7txJsG"
  },
  {
    "name": "Greig",
    "img": "nk0SVLh",
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
    "devName": "dinosaur_hunter",
    "JPName": "Greig",
    "altImg": "fM6n8YR"
  },
  {
    "name": "Bryce",
    "img": "4RcHv6f",
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
    "devName": "crazy_doctor",
    "JPName": "Bryce",
    "altImg": "PmRqTB0"
  },
  {
    "name": "Tae Yamada (Zombie Land Saga Collab)",
    "img": "G3vNkCY",
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
    "devName": "yamada_tae",
    "JPName": "Tae Yamada (Zombie Land Saga Collab)",
    "altImg": "wp3XQ3s"
  },
  {
    "name": "Falce (Halloween)",
    "img": "CsL78M5",
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
    "devName": "reaper_girl_hw20",
    "JPName": "Falce (Halloween)",
    "altImg": "74xs0mT"
  },
  {
    "name": "Zelma",
    "img": "Cw17Lns",
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
    "devName": "illegal_herbalist",
    "JPName": "Zelma",
    "altImg": "dcgRTBR"
  },
  {
    "name": "Ari (Anniversary)",
    "img": "m59kyKv",
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
    "devName": "devil_woman_soldier_1anv",
    "JPName": "Ari (Anniversary)",
    "altImg": "WFt45P5"
  },
  {
    "name": "Subaru Natsuki (Re:Zero Collab)",
    "img": "3CNhN0F",
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
    "devName": "subaru",
    "JPName": "Subaru Natsuki (Re:Zero Collab)",
    "altImg": "WfnFWnG"
  },
  {
    "name": "Edward",
    "img": "FJMgmtG",
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
    "devName": "mystery_agent",
    "JPName": "Edward",
    "altImg": "KWw157p"
  },
  {
    "name": "Lonsdale",
    "img": "fYSm8xZ",
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
    "devName": "walking_armor",
    "JPName": "Lonsdale",
    "altImg": "wyMzD0f"
  },
  {
    "name": "Tawil",
    "img": "RgNw62H",
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
    "devName": "desert_caravans",
    "JPName": "Tawil",
    "altImg": "NFxpSYC"
  },
  {
    "name": "Itsuki Koizumi (The Melancholy of Haruhi Suzumiya Collab)",
    "img": "s6k9KkH",
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
    "devName": "koizumi_ituki",
    "JPName": "Itsuki Koizumi (The Melancholy of Haruhi Suzumiya Collab)",
    "altImg": "YRQQm6n"
  },
  {
    "name": "Virgia",
    "img": "F7SKxVL",
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
    "devName": "formercorrupt_detective",
    "JPName": "Virgia",
    "altImg": "88mBPgv"
  },
  {
    "name": "Kageoka Ryuichi",
    "img": "VDq0F1r",
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
    "devName": "psychic_projection",
    "JPName": "Kageoka Ryuichi",
    "altImg": "FJBK14Q"
  },
  {
    "name": "Shion (Anniversary)",
    "img": "j5YMkgG",
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
    "devName": "informant_2anv",
    "JPName": "Shion (Anniversary)",
    "altImg": "L849Q1S"
  },
  {
    "name": "Sven",
    "img": "y8FTPYZ",
    "opts": {
      "version": [
		"GL",
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
    "devName": "brave_mouse",
    "JPName": "Sven",
    "altImg": "zR5HFy0"
  },
  {
    "name": "Lilian",
    "img": "tbgTNWM",
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
    "devName": "sewing_girl",
    "JPName": "Lilian",
    "altImg": "xSYvPfq"
  },
  {
    "name": "Klaus (White Day)",
    "img": "QbSM37r",
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
    "devName": "wolf_assassin_wt21",
    "JPName": "Klaus (White Day)",
    "altImg": "DCBsXV9"
  },
  {
    "name": "Rita",
    "img": "8dG2R7p",
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
        3
      ],
      "race": [
        "Human"
      ]
    },
    "devName": "scout_girl",
    "JPName": "Rita",
    "altImg": "xhQgnfV"
  },
  {
    "name": "Flana ",
    "img": "Dfy93nm",
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
    "devName": "floating_girl",
    "JPName": "Flana ",
    "altImg": "PcYnJQn"
  },
  {
    "name": "Fi Nonoa",
    "img": "jGD4Dxk",
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
    "devName": "conjurer_girl",
    "JPName": "Fi Nonoa",
    "altImg": "MSPTK8j"
  },
  {
    "name": "Netty",
    "img": "590y57D",
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
    "devName": "lazy_genious",
    "JPName": "Netty",
    "altImg": "p0bVkP0"
  },
  {
    "name": "Millet",
    "img": "qRBR8Y5",
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
    "devName": "rookie_adventurer",
    "JPName": "Millet",
    "altImg": "f0YtS61"
  },
  {
    "name": "Mora",
    "img": "WG1GyCQ",
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
    "devName": "moth_girl",
    "JPName": "Mora",
    "altImg": "p08Qd88"
  },
  {
    "name": "Corina (Halloween)",
    "img": "zSyxBFr",
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
    "devName": "priest_hw20",
    "JPName": "Corina (Halloween)",
    "altImg": "RHZ24hm"
  },
  {
    "name": "Ksyukha",
    "img": "NCvnSC0",
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
    "devName": "junior_soldier",
    "JPName": "Ksyukha",
    "altImg": "NZvRXnY"
  },
  {
    "name": "Axem",
    "img": "p27W0V1",
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
    "devName": "skateboard_boy",
    "JPName": "Axem",
    "altImg": "5rTwKjD"
  },
  {
    "name": "Ru Ruto",
    "img": "1Gm8QgR",
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
    "devName": "kids_gunner",
    "JPName": "Ru Ruto",
    "altImg": "cXp09XS"
  },
  {
    "name": "Meryl (Christmas)",
    "img": "fxD86hH",
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
    "devName": "delusion_girl_xm20",
    "JPName": "Meryl (Christmas)",
    "altImg": "JRsYyPY"
  },
  {
    "name": "Talha",
    "img": "Df2hVpg",
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
    "devName": "mummy_boy",
    "JPName": "Talha",
    "altImg": "dJ2kZ6N"
  },
  {
    "name": "Cody",
    "img": "LZMfJxK",
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
    "devName": "revenge_rabbit",
    "JPName": "Cody",
    "altImg": "fGGfGcT"
  },
  {
    "name": "Lucille",
    "img": "WnJ0xdf",
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
    "devName": "assistant_boy",
    "JPName": "Lucille",
    "altImg": "xS8WD10"
  }
]