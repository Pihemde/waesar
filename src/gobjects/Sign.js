/**
 * Sign 
 */
var Sign = function() { // FIXME Comment on fait pour hériter ?
	/**
	 * Constructor
	 * @param gcontext the graphical context
	 * @param position absolute position object instance on the game board (first : 0,0 ; second 1,0 ; ...)
	 */
	var Class = function(gcontext) {
		this.gcontext = gcontext;
		this.gcontext.addEventListener("turn", this.onturn, this);
	};
	
	/**
	 * Draw object on canvas
	 */
	Class.prototype.paint = function() {
		switch(this.orientation) {
			case ORIENTATION.N :
				this.gcontext.drawImage(IMAGES.SIGN_BLUE_N, this.position);
				break;
			case ORIENTATION.E :
				this.gcontext.drawImage(IMAGES.SIGN_BLUE_E, this.position);
				break;
			case ORIENTATION.S :
				this.gcontext.drawImage(IMAGES.SIGN_BLUE_S, this.position);
				break;
			case ORIENTATION.W :
				this.gcontext.drawImage(IMAGES.SIGN_BLUE_W, this.position);
				break;
		}
	};
	
	/*
	 * Retrieve a JSON string to save object state
	 */
	Class.prototype.serialize = function() {
		return {
			position: this.position,
			orientation: this.orientation
		};
	};
	
	/*
	 * Set attributes from json object
	 */
	Class.prototype.unserialize = function(datas) {
		this.position = datas.position;
		this.orientation = setData(datas.orientation, ORIENTATION.N);
	};
	
	Class.prototype.onturn = function(event) {
		this.orientation = event.orientation;
	};

	return Class;
}();
