use saboteur;
db.dropDatabase();

db.game.insertOne({
    "cards": {

        "tile_cards":{

                "path-left-to-right": {
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
                    "image url": "https://i.ibb.co/JsQNmwQ/left-right.png"
                },
        
                "path-left-to-bottom-to-right": {
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
                    "image url": "https://i.ibb.co/93x3pmJ/left-to-bottom-to-right.png"
                },
            
                "path-top-to-left": {
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
                    "image url": "https://i.ibb.co/JQJDfQT/bottom-right.png"
                },

                "path-bottom-to-left": {
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
                    "image url": "https://i.ibb.co/b290VQf/top-to-right.png"
                },

                "path-bottom-to-top": {
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
                    "image url": "https://i.ibb.co/B4R57NG/bottom-to-top.png"
                },

                "path-bottom-to-left-to-top": {
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
                    "image url": "https://i.ibb.co/mG4wcTk/bottom-to-left-to-top.png"
                },

                "path-cross": {
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
                    "image url": "https://i.ibb.co/QcsqgnV/cross.png"
                },

                "start-card": {
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
                    "image url": null
                }
        
        },

        "special_cards": {},

        "player_cards" :{
            "miner" : {
                "image url": null
            },

            "saboteur" : {
                "image url": null
            }
        },
        
        "card_back":{
            "image url": null
        },

        "gold_card": {
            "image url": null
        },

        "coal_card": {
            "image url": null
        }
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

 