/*
	Scene object - Describe graphic interface - view
*/

var Scene = function(id_, game_) {
	// - Public members
	this.game = game_;
	
	// - Private members
	var ctx = document.getElementById(id_).getContext('2d');
	
	var zoneCommon = new ZoneCommon(ctx);
	var zonePlayerTop = new ZonePlayerTop(ctx);
	var zonePlayerBot = new ZonePlayerBot(ctx);
	
	// - Public methods
	this.draw = function() {
	    draw(this.game);
	}
	
	// - Private methods
	function draw(game) {
        // Adapt canvas
	    ctx.canvas.width = ctx.canvas.offsetWidth;
	    ctx.canvas.height = ctx.canvas.offsetHeight;
		
        // Widgets
        zoneCommon.draw(game);

        if (game.players.length < 2)
            return;

        zonePlayerBot.draw(game.players[0]);
        zonePlayerTop.draw(game.players[1]);
	}
}