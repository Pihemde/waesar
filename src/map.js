const MAP = [
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe2, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, null, null, null],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, null, null, null],
	[TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, TERRAINS.herbe1, null, null, TERRAINS.rocher1]
];
