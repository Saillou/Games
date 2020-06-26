/*

*/

var Widget = function(ctx_) {
	this.ctx 		= ctx_;
	
	this.top 		= 0;
	this.left 		= 0;
	this.width 		= 0;
	this.height 	= 0;
	this.color		= null;
	
	// Setters
	this.setPos = function(x_, y_) {
		this.left = x_;
		this.top = y_;
	};
	this.setSize = function(w_, h_) {
		this.width = w_;
		this.height = h_;
	};	
	this.setBackground = function(color_) {
		this.color = color_;
	};
	
	// Methods
	this.draw = function() {
		let w = this.ctx.canvas.width/100;
		let h = this.ctx.canvas.height/100;

		this.ctx.clearRect(this.left * w, this.top * h, this.width * w, this.height * h);
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.left * w, this.top * h, this.width * w, this.height * h);
	};
};