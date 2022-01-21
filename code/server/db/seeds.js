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
                        "left": true},
                    "connections": {
                        "left-right": true,
                        "top-bottom": false,
                        "top-right": false,
                        "top-left": false,
                        "left-bottom": false,
                        "right-bottom": false
                    },
                    "inverted": false,
                    "image url": "https://i.ibb.co/JsQNmwQ/left-right.png"
                },
            
                    "path-left-to-bottom-to-right": {
                    "entries": {
                        "top": false,
                        "right": true, 
                        "bottom": true, 
                        "left": true},
                    "connections": {
                        "left-right": true,
                        "top-bottom": false,
                        "top-right": false,
                        "top-left": false,
                        "left-bottom": true,
                        "right-bottom": true
                    },
                    "inverted": false,
                    "image url": "https://i.ibb.co/93x3pmJ/left-to-bottom-to-right.png"
                },
                
                "path-bottom-to-right": {
                "entries": {
                    "top": false,
                    "right": true,
                    "bottom": true, 
                    "left": true
                },
                "connections": {
                    "left-right": false,
                    "top-bottom": false,
                    "top-right": false,
                    "top-left": false,
                    "left-bottom": false,
                    "right-bottom": true
                },
                "inverted": false,
                "image url": "https://i.ibb.co/JQJDfQT/bottom-right.png"
                }
            }
        }
    })

















    //     "player_cards": [
    //         {
    //             "name": "string"
    //             ...
    //         }
    //     ],
    //     "special_cards": [
    //         {
    //             name: "string"
    //             ...
    //         }
    //     ]
    // },
    // "game_state": {     // could add this as an extension to allow game state to persist!?
    //     "deck": [{tile_card Object}, {...}, ...],
    //     "player_cards": [{player_card Object}, {...}, ...],
    //     "special_cards": [{special_card Object}, {...}, ...],
    //     "players": [  
    //         {
    //             "name": "string",
    //             "hand": [{tile_card Object},{...},{...},{...},{...},{player_card Object}],
    //             "score": number,
    //             ...
    //         }
    //     ],  
    //     "game_grid": [
    //         {
    //             "row_ref": number,
    //             "col_ref": number,
    //             "card": {tile_card Object}
    //         }, 
    //         {...}, 
    //         ...
    //     ]  // store game state.
    //     "player_turn": {player Object}
    // }