use saboteur;
db.dropDatabase();

db.game.insertOne({
    "cards": {

        "tile_cards":[{

                "name:" : "path-left-to-right",
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
        
                {   "name:" : "path-left-to-bottom-to-right",
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
            
                {   "name:" : "path-top-to-left",
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

                {   "name:" : "path-bottom-to-left",
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

                {   "name:" : "path-bottom-to-top",
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

                {   "name:" : "path-bottom-to-left-to-top",
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

                {   "name:" : "path-cross",
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

                },

                { "name:" : "start-card",
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
            "image_url": "https://i.ibb.co/qYQ2yxC/deck-back.png"
            },
            nugget_back : {
                "image_url": "https://i.ibb.co/wKpygqT/gold-back.png"
            },
            character_back : {
                "image_url": "https://i.ibb.co/3vqtgzX/char-back.png"
            },
            gold_back : {
                "image_url" : "https://i.ibb.co/LdYgySR/gold-backs-chars.png"
            }
        },

        "gold_card": {
            "image_url": "https://i.ibb.co/Fg1r5Tn/gold-card.png",
            "back_url" : "https://i.ibb.co/LdYgySR/gold-backs-chars.png",
            "inverted": false,
            "flipped": true
        },

        "coal_card": {
            "image_url": "https://i.ibb.co/gRRBFQd/coal-card.png",
            "back_url" : "https://i.ibb.co/LdYgySR/gold-backs-chars.png",
            "inverted": false,
            "flipped": true
        },
        "nugget_one" : {
            "image_url": "https://i.ibb.co/cNy4hv6/nugget-one.png",
            "back_url": "https://i.ibb.co/wKpygqT/gold-back.png",
            "inverted": false,
            "flipped": true
        },
        "nugget_two" : {
            "front_url": "https://i.ibb.co/j6Rn6sN/nugget-two.png",
            "back_url": "https://i.ibb.co/wKpygqT/gold-back.png",
            "inverted": false,
            "flipped": true
        },
        "nugget_three" : {
            "front_url": "https://i.ibb.co/ssVG6PZ/nugget-three.png",
            "back_url": "https://i.ibb.co/wKpygqT/gold-back.png",
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

 