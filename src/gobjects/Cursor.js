/**
 * Cursor
 */
var Cursor = function() {
	const SIZE = {width: 3, height: 3};

	/**
	 * Constructor
	 * @param gcontext the graphical context
	 */
	var Class = function(gcontext) {
		this.gcontext = gcontext;
		this.gcontext.addEventListener("move", this.onmove, this);
	};
	
	/**
	 * Draw object on canvas
	 */
	Class.prototype.paint = function() {
		if(!this.position) {
			return;
		}
		if (this.position.x == 0 && this.position.y == 0) {
			return;
		}
		
		var c = this.position;
		var x = c.i;
		var y = c.j;
		if(x < 0 || x > MAP_SIZE - 1 || y < 0 || y > MAP_SIZE - 1) {
			return;
		}

		this.gcontext.context.beginPath();
		c = this.gcontext.toRealCoord({i:x, j:y});
		this.gcontext.context.moveTo(c.x, c.y);
		c = this.gcontext.toRealCoord({i:x+1, j:y});
		this.gcontext.context.lineTo(c.x, c.y);
		c = this.gcontext.toRealCoord({i:x+1, j:y+1}); 
		this.gcontext.context.lineTo(c.x, c.y);
		c = this.gcontext.toRealCoord({i:x, j:y+1});
		this.gcontext.context.lineTo(c.x, c.y);
		c = this.gcontext.toRealCoord({i:x, j:y});
		this.gcontext.context.lineTo(c.x, c.y);
		this.gcontext.context.closePath();
		this.gcontext.context.fillStyle = "red";
		this.gcontext.context.globalAlpha = 0.5; // Transparence 
		this.gcontext.context.fill(); // On remplit 
		this.gcontext.context.globalAlpha = 1; // On la reset pour les copains 
	};
	
	Class.prototype.onmove = function(e) {
		this.position = e.position;
	}
	return Class;
}();