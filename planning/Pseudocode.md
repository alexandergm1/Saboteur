Initialise Game

    set players (players)
        post players to API;

    initialise game_grid()
        fetch start card from API;
        fetch gold card from API;
        fetch 2x coal cards from API;
        put start card, gold card & 2x coal card onto game_grid API;

    shuffle deck()
        fetch deck from API;
        shuffle deck;
        put shuffled deck back to API;
    
    shuffle player_card deck()
        fetch player_card deck from API;
        shuffle deck;
        put shuffled player_card deck back to API;       

    set player roles(players)
        for (players in game)
            fetch/delete top player_card from deck API;
            put card to players role API;
    
    deal player hands(players)
        for (players in game)
            fetch/delete top five cards from deck API;
            put cards to players hand API;

    post player_turn player[0] to API; 

Players Turn(player)
    
    grid tile(row_ref, col_ref) = fetch game_grid by (row_ref, col_ref);

    rotate card(card from hand)
        put card from hand !inverted to API;

    place card(card from hand, grid slot)
        if (grid tile != null)
            return "can not place card here";
        else if (tiles neighours conflicts with card_from hand connections )
            return "can not place card here";
        else if (grid slot(card from hand) != connect to start card )
            return "can not place card here";
        else 
            put grid slot(card from hand) to API;
            delete card from hand in game_state.players.hand API;
            put player turn to next player API
    
    discard card(card)
        play selects card from hand;
        press submit discard button ;
        delete card form players hand API;
        fetch/delete top card from deck API;
        put card to players hand API;
        put player turn to next player API;


Conditions for game to end

    if (deck is empty)
    if (path from start card to gold card is made)

    on game end 
        freeze game state;
        play animation;
        display score ;






        

    
        
    


    









