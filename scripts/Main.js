/*
	Controller game
*/

// Global variables
let game = new Game();                      // Model
let scene = new Scene("gameTable", game);   // View

// Events
addEventListener('resize', function() {
    scene.draw();
});

// Launch
(function(){
	init();

    // Game loop
    /*
        while(game.state() != end) {
            for(let player of players) {
                if(player.isAI())
                    player.play(game);
                else
                    player.askPlay(game);
            }

            // scene.draw();
            // ... something like that ...
        }
    */
})();

// Functions
function init() {
	game.addPlayer(new Player("Anonymous", true));
	game.addPlayer(new Player("Computer", true));
	game.shuffle();

	scene.draw();
}