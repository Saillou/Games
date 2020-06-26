/*
	Player object - Describe player - model
*/

var Player = function(defaultName_, AI_) {
	// - Public members
	this.name = AI_ ? defaultName_ : prompt("Please enter your name", defaultName_);
	this.AI = AI_;
	this.cardsDeck = [];
	this.cardsPut = [];
	this.score = 0;
	this.state = {
	    'driving':  false,
	    'limit':    false,
	    'tire':     false,
	    'gaz':      false,
	    'body':     false,
	};

	// - Private members

	// - Public methods

	// - Private methods
};