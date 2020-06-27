/*

*/
var ZoneCommon = function (ctx_, game_) {
    Widget.call(this, ctx_);

    // Public members
    this.game = game_;

    // Private members
    var modelCardDealt;
    var modelCardThrown;

    // Public methods
    this.draw = function() {
        modelCardDealt = this.game.cardsRemaining.length > 0 ? this.game.cardsRemaining[0] : null;
        modelCardThrown = this.game.modelCardThrown.length > 0 ? this.game.modelCardThrown[0] : null;

        if(modelCardDealt)
            modelCardDealt.visible = false;

        if(modelCardThrown)
            modelCardThrown.visible = true;
    }

};