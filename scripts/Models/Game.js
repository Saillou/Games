/*
	Game object - Describe game - model
*/

var Game = function () {
    // - Public members
    this.players = [];
    this.modelCardThrown = [];
    this.cardsRemaining = [];

    // - Private members

    // - Public methods
    this.addPlayer = function(player) {
        this.players.push(player);
    };
    this.shuffle = function () {
        /* to do */
    };

    // - Private methods

};