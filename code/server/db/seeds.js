use saboteur;
db.dropDatabase();

db.game.insertMany([
{
    "cards": {
        "tile_cards": [
            {
                "name": "path-left-to-right",     // Type of card, ie 'straight' or 'right turn'
                "entries": {"top": false, "right": true, "bottom": false, "left": true},    // Boolean values, read backwards for inverted cards.
                "connections": {
                    "left-right": true,
                    "top-bottom": false,
                    "top-right": false,
                    "top-left": false,
                    "left-bottom": false,
                    "right-bottom": false
                 },    // Boolean values, read backwards for inverted cards.
                "inverted": false,
                "image url": "https://i.ibb.co/JsQNmwQ/left-right.png"
            }
        ],

    }
}

















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