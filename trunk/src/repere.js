function toRealCoord(coord) {
	var angle = Math.PI/4;

	var transform = Matrix.Rotation(angle);
	var coord = $M([[coord[0]], [coord[1]]]);
	coord = transform.multiply(coord);
	
	return [Math.round(coord.elements[0][0] / Math.sqrt(2) * 58 + SQUARE_WIDTH*MAP_SIZE/2), Math.round(coord.elements[1][0] / Math.sqrt(2) * 30)];
}

function fromRealCoord(coord) {
	var angle = -Math.PI/4;

	var transform = Matrix.Rotation(angle);
	var coord = $M([[(coord[0] - SQUARE_WIDTH*MAP_SIZE/2) / 58 * Math.sqrt(2)], [coord[1] / 30 * Math.sqrt(2)]]);
	coord = transform.multiply(coord);
	
	return [Math.floor(coord.elements[0][0]), Math.floor(coord.elements[1][0])];
}

