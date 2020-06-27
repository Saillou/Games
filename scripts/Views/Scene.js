/*
	Scene object - Describe graphic interface - view
*/

var Scene = function(id_, game_) {
	// - Public members
	this.game = game_;

	// - Private members
	var ctx = document.getElementById(id_).getContext('2d');
	
	var zoneCommon = new ZoneCommon(ctx, this.game);
	var zonePlayerTop = new ZonePlayerTop(ctx, game.players[1]);
	var zonePlayerBot = new ZonePlayerBot(ctx, game.players[0]);
	
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
        zoneCommon.draw();

        if (game.players.length < 2)
            return;

        zonePlayerBot.draw();
        zonePlayerTop.draw();
	}
}