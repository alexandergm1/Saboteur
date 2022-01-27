use saboteur;
db.dropDatabase();
db.game.insertOne({
    "cards": {
        "tile_cards":[{
                "name" : "path-left-to-right",
                "entries": {
                    "top": false,
                    "right": true,
                    "bottom": false,
                    "left": true
                    },
                    "connections": {
                        "left-right": true,
                        "top-bottom": false,
                        "top-left": false,
                        "left-bottom": false,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/JsQNmwQ/left-right.png",
                    "flipped": false
                },
                {   "name" : "path-left-to-bottom-to-right",
                    "entries": {
                        "top": false,
                        "right": true,
                        "bottom": true,
                        "left": true
                    },
                    "connections": {
                        "left-right": true,
                        "top-bottom": false,
                        "top-left": false,
                        "left-bottom": true,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/93x3pmJ/left-to-bottom-to-right.png",
                    "flipped": false
                },
                {   "name" : "path-top-to-left",
                    "entries": {
                        "top": true,
                        "right": false,
                        "bottom": false,
                        "left": true
                    },
                    "connections": {
                        "left-right": false,
                        "top-bottom": false,
                        "top-left": true,
                        "left-bottom": false,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/N9qB5Hq/top-left.png",
                    "flipped": false
                },
                {   "name" : "path-bottom-to-left",
                    "entries": {
                        "top": false,
                        "right": false,
                        "bottom": true,
                        "left": true
                    },
                    "connections": {
                        "left-right": false,
                        "top-bottom": false,
                        "top-left": false,
                        "left-bottom": true,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/b290VQf/top-to-right.png",
                    "flipped": false
                },
                {   "name" : "path-bottom-to-top",
                    "entries": {
                        "top": true,
                        "right": false,
                        "bottom": true,
                        "left": false
                    },
                    "connections": {
                        "left-right": false,
                        "top-bottom": true,
                        "top-left": false,
                        "left-bottom": false,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/B4R57NG/bottom-to-top.png",
                    "flipped": false
                },
                {   "name" : "path-bottom-to-left-to-top",
                    "entries": {
                        "top": true,
                        "right": false,
                        "bottom": true,
                        "left": true
                    },
                    "connections": {
                        "left-right": false,
                        "top-bottom": false,
                        "top-left": true,
                        "left-bottom": true,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/mG4wcTk/bottom-to-left-to-top.png",
                    "flipped": false
                },
                {   "name" : "path-cross",
                    "entries": {
                        "top": true,
                        "right": true,
                        "bottom": true,
                        "left": true
                    },
                    "connections": {
                        "left-right": true,
                        "top-bottom": true,
                        "top-left": true,
                        "left-bottom": true,
                    },
                    "inverted": false,
                    "image_url": "https://i.ibb.co/QcsqgnV/cross.png",
                    "flipped": false
                }
                
        ],
        "start-card": { "name" : "start-card",
                        "entries": {
                                    "top": true,
                                    "right": true,
                                    "bottom": true,
                                    "left": true
                        },
                        "inverted": false,
                        "image_url": "https://i.ibb.co/Tt01rmx/Screenshot-2022-01-25-at-22-12-44.png",
                        "flipped": false
        },

        "blocker-cards": [{  "name" :"block-1",
                             "entries": {
                                "top": true,
                                "right": true,
                                "bottom": true,
                                "left": true
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/Z1jjNj2/Screenshot-2022-01-25-at-21-47-21.png",
                            "flipped": false
        },
                        {   "name" :"blocker-2",
                            "entries": {
                            "top": true,
                            "right": true,
                            "bottom": false,
                            "left": true
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/d7PC1tj/Screenshot-2022-01-25-at-21-47-15.png",
                            "flipped": false
        },
                        {   "name" :"blocker-3",
                            "entries": {
                            "top": false,
                            "right": true,
                            "bottom": false,
                            "left": true
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/t8G694R/Screenshot-2022-01-25-at-21-47-09.png",
                            "flipped": false
        },
                        {   "name" :"blocker-4",
                            "entries": {
                            "top": true,
                            "right": true,
                            "bottom": true,
                            "left": true
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/7p3TWxm/Screenshot-2022-01-25-at-21-47-05.png",
                            "flipped": false
        },
                        {   "name" :"blocker-5",
                            "entries": {
                            "top": true,
                            "right": true,
                            "bottom": true,
                            "left": false
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/WHDcxGT/Screenshot-2022-01-25-at-21-46-58.png",
                            "flipped": false
        },
                        {   "name" :"blocker-6",
                            "entries": {
                            "top": true,
                            "right": false,
                            "bottom": false,
                            "left": false
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/K6K2Rfx/Screenshot-2022-01-25-at-21-46-54.png",
                            "flipped": false
        },
                        {   "name" :"blocker-7",
                            "entries": {
                            "top": false,
                            "right": true,
                            "bottom": false,
                            "left": false
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/zHgJzn1/Screenshot-2022-01-25-at-21-46-49.png",
                            "flipped": false
        },
                        {   "name" :"blocker-8",
                            "entries": {
                            "top": true,
                            "right": false,
                            "bottom": true,
                            "left": false
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/0rBtPSv/Screenshot-2022-01-25-at-21-46-45.png",
                            "flipped": false
        },
                        {   "name" :"blocker-9",
                            "entries": {
                            "top": false,
                            "right": false,
                            "bottom": true,
                            "left": true
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/F5qLG4v/Screenshot-2022-01-25-at-21-46-40.png",
                            "flipped": false
        }, 
                        {   "name" :"blocker-10",
                            "entries": {
                            "top": false,
                            "right": true,
                            "bottom": true,
                            "left": false
                            },
                            "inverted": false,
                            "image_url": "https://i.ibb.co/Dkr578t/Screenshot-2022-01-25-at-21-46-35.png",
                            "flipped": false
        }],
        "special_cards": {},
        "player_cards" :{
            "minner":{
                "cobalt" : {
                    "image_url": "https://i.ibb.co/CMwXK1X/blue-dwarf.png"
                },
                "brown" : {
                    "image_url": "https://i.ibb.co/5s6K44W/brown-dwarf.png"
                },
                "green" : {
                    "image_url": "https://i.ibb.co/2y7wnCV/green-dwarf.png"
                },
                "purple" : {
                    "image_url": "https://i.ibb.co/s2kVTRV/purple-dwarf.png"
                },
                "blue" : {
                    "image_url": "https://i.ibb.co/7WHTyrG/cobalt-dwarf.png"
                },
                "dark_green" : {
                    "image_url": "https://i.ibb.co/Y7B50YL/green-dwarf.png"
                },
                "red" : {
                    "image_url": "https://i.ibb.co/PYvLYk0/red-dwarf.png"
                }
            },
            "saboteur" : {
                "blue" :{
                "image_url": "https://i.ibb.co/7JNGBv7/saboteur-blue.png"
                },
                "lime" : {
                    "image_url": "https://i.ibb.co/J7xjJN1/saboteur-lime.png"
                },
                "orange" : {
                    "image_url": "https://i.ibb.co/10jfK6T/saboteur-orange.png"
                },
                "yellow" : {
                    "image_url": "https://i.ibb.co/H2Ldmrp/saboteur-yellow.png"
                }
            },
        },
        "card_backs":{
            deck_back : {
            "image_url": "https://i.ibb.co/VLcH52W/deck-back.png"
            },
            nugget_back : {
                "image_url": "https://i.ibb.co/HTkLwT0/gold-back.png"
            },
            character_back : {
                "image_url": "https://i.ibb.co/Yd0x1kQ/char-back.png"
            },
            gold_back : {
                "image_url" : "https://i.ibb.co/LdYgySR/gold-backs-chars.png"
            }
        },
        "gold_card": {
            "name" : "gold_card",
            "image_url": "https://i.ibb.co/Fg1r5Tn/gold-card.png",
            "back_url" : "https://i.ibb.co/QmG1rQL/Screenshot-2022-01-25-at-22-42-46.png",
            "inverted": false,
            "flipped": true,
            "entries": {
                "top": true,
                "right": true,
                "bottom": true,
                "left": true
            }
        },
        "coal_card": {
            "name" : "coal_card",
            "image_url": "https://i.ibb.co/gRRBFQd/coal-card.png",
            "back_url" : "https://i.ibb.co/QmG1rQL/Screenshot-2022-01-25-at-22-42-46.png",
            "inverted": false,
            "flipped": true,
            "entries": {
                "top": true,
                "right": true,
                "bottom": true,
                "left": true
            }
        },
        "nugget_one" : {
            "image_url": "https://i.ibb.co/cNy4hv6/nugget-one.png",
            "back_url": "https://i.ibb.co/HTkLwT0/gold-back.png",
            "inverted": false,
            "flipped": true
        },
        "nugget_two" : {
            "front_url": "https://i.ibb.co/j6Rn6sN/nugget-two.png",
            "back_url": "https://i.ibb.co/HTkLwT0/gold-back.png",
            "inverted": false,
            "flipped": true
        },
        "nugget_three" : {
            "front_url": "https://i.ibb.co/ssVG6PZ/nugget-three.png",
            "back_url": "https://i.ibb.co/HTkLwT0/gold-back.png",
            "inverted": false,
            "flipped": true
        },
    },
   "game_state":{
        "deck": [],
        "player_cards": [],
        "players": [],
            // {
            //     "name": "string",
            //     "hand": [{tile_card Object},{...},{...},{...},{...}]
            //     "player_card": {player_card Object}
            //     "score": number,
            //     ...
            // }
        // ], 
        "game_grid": [],
            // {
            //     "row_ref": number,
            //     "col_ref": number,
            //     "card": {tile_card Object}
            // },
            // {...},
            // ...
        // ],
        "player_turn": null
    }
})



