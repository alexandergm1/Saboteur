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
                    "image_url": "https://i.ibb.co/JsQNmwQ/left-right.png"
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
                    "image_url": "https://i.ibb.co/93x3pmJ/left-to-bottom-to-right.png"
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
                    "image_url": "https://ibb.co/y6CjtbC"
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
                    "image_url": "https://i.ibb.co/b290VQf/top-to-right.png"
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
                    "image_url": "https://i.ibb.co/B4R57NG/bottom-to-top.png"
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
                    "image_url": "https://i.ibb.co/mG4wcTk/bottom-to-left-to-top.png"
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
                    "image_url": "https://i.ibb.co/QcsqgnV/cross.png"
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
                    "image_url": "https://i.ibb.co/QcsqgnV/cross.png"

                }
        
        ],

        "special_cards": {},

        "player_cards" :{
            "minner":{
                "cobalt" : {
                    "image_url": "https://ibb.co/vQcr4wr"
                },
                "brown" : {
                    "image_url": "https://ibb.co/VMtw99W"
                },
                "green" : {
                    "image_url": "https://ibb.co/g3MGjfq"
                },
                "purple" : {
                    "image_url": "https://ibb.co/56tRQ4R"
                },
                "blue" : {
                    "image_url": "https://ibb.co/DCN6Kw7"
                },
                "dark_green" : {
                    "image_url": "https://ibb.co/8DgyYT7"
                },
                "red" : {
                    "image_url": "https://ibb.co/BP5pPkF"
                }
            },
            "saboteur" : {
                "blue" :{
                "image_url": "https://ibb.co/xS8MwhV"
                },
                "lime" : {
                    "image_url": "https://ibb.co/KqNxvYP"
                },
                "orange" : {
                    "image_url": "https://ibb.co/CwD5v2Q"
                },
                "yellow" : {
                    "image_url": "https://ibb.co/VN0mXvp"
                }
            },
        },
        
        "card_backs":{
            deck_back : {
            "image_url": "https://ibb.co/234pn5S"
            },
            nugget_back : {
                "image_url": "https://ibb.co/64DYwS2"
            },
            character_back : {
                "image_url": "https://ibb.co/kJfYN1n"
            },
            gold_back : {
                "image_url" : "https://ibb.co/tpQ26BK"
            }
        },
        

        "gold_card": {
            "front_url": "https://ibb.co/xJbk1T3",
            "back_url" : "https://ibb.co/tpQ26BK"
        },

        "coal_card": {
            "front_url": "https://ibb.co/wzzxr87",
            "back_url" : "https://ibb.co/tpQ26BK"
        },
        "nugget_one" : {
            "front_url": "https://ibb.co/8jm1gBr",
            "back_url": "https://ibb.co/64DYwS2"
        },
        "nugget_two" : {
            "front_url": "https://ibb.co/Qbdybtg",
            "back_url": "https://ibb.co/64DYwS2"
        },
        "nugget_three" : {
            "front_url": "https://ibb.co/8P7pdBH",
            "back_url": "https://ibb.co/64DYwS2"
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

 