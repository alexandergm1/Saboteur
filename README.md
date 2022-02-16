<h1>Browser Game - Saboteur</h1>


<h2>Project Brief</h2>
Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with.
Write your own MVP with some specific goals to be achieved based on the game you choose to model.
You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.

<h3>Saboteur</h3>
The card laying game <a href="https://www.ultraboardgames.com/saboteur/game-rules.php">Saboteur</a> was choosen.

<h3>Saboteur Mechanics </h3>
<ul>
  <li>At the start of each round, players are randomly allocated one of two roles:
    <ul>
      <li>Miners must place tiles to make a path from the start card to the (face-down) gold card.</li>
      <li>Saboteurs must hide their identity and derail the miners’ efforts by placing blocker tile cards and by using deception.</li>
    </ul>
  </li>
  <li>Depending on whether saboteurs or miners won the round, gold cards (of varying value) are divided up between the winning players.</li>			
  <li>Game is played for three rounds, and player with most gold wins!</li>
</ul>

<h2>MVP & Extensions</h2>
<table style="width: 100%;">
  <tr>
    <th>Must Have</th>
    <th>Should Have</th>
    <th>Could Have</th>
  </tr>
  <tr>
    <td>Game board where cards can be placed
</td>
    <td>Each player dealt a character card</td>
    <td>Multiplayer mode</td>
  </tr>
  <tr>
    <td>Be able to place cards on the board</td>
    <td>Basic CPU opponents</td>
    <td>Chat box</td>
  </tr>
  <tr>
    <td>A hand of cards</td>
    <td>Players can take turns</td>
    <td>Splash Screen</td>
  </tr>
  <tr>
    <td>Be able to get new cards</td>
    <td>Players can only play legal moves</td>
    <td>Special Cards</td>
  </tr>
  <tr>
    <td>Display face down end cards when card path connects to them</td>
    <td>Game should have ways to end</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Be able to rotate cards 180°</td>
    <td></td>
  </tr>
</table>

<h1>Playable Demo</h1>
  This version is the end point that we achived in the one week timeframe that we had for this project. Please note that only Single Player Mode is functional and that it was only tested to run in Chrome with a laptop view window.<br><br>
  
  <p align="center">
  <a href="https://saboteur-online.netlify.app/">>>click to play<<</a> <br><br>
  </p>
  
  As a team we were delighted to get to MVP as we had set it out in the time we were given.  However, whilst this is a working demo there are some critical bugs and issues that need to be addressed before it could be considered to be in a finished state.  The table summarises these and sets out further work that we would like to do to complete the project.
  


  

<h1>Screenshots</h1>
<h3>Splash Screen</h3>

<img width="100%" alt="splashscreen" src="https://user-images.githubusercontent.com/93034150/152196475-c394b722-0472-4037-a352-45184c6ed409.png">

<h3>Game Play</h3>

<img width="1555" alt="Gameplay" src="https://user-images.githubusercontent.com/93034150/152196590-3c63027b-58b2-44d3-b8f1-8a899d9bf9d7.png">

<h1>API, Libraries, Resources</h1>

https://reactjs.org/<br>
https://expressjs.com/<br>
https://nodejs.org/en/<br>
https://www.mongodb.com/<br>
https://www.npmjs.com/package/react-beautiful-dnd<br>
https://socket.io/<br>

<h1>Project set up</h1>
<table>
  <tr>
    <td>Front-end (client)</td>
    <td>Back-end (server)</td>
  </tr>
  <tr>
    <td>npm install</td>
    <td>npm install</td>
  </tr>
  <tr>
    <td>npm start</td>
    <td>npm run seeds</td>
  </tr>
  <tr>
    <td></td>
    <td>npm run server:dev</td>
  </tr>
</table>
