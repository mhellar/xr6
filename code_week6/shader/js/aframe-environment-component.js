/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	/* global AFRAME, THREE */

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}

	/**
	 * enviroGetSettings() - console function for printing out the current environment settings
	 */
	function enviroGetSettings () {
	  document.querySelector('[environment]').components['environment'].logPreset();
	}

	AFRAME.registerComponent('environment', {
	  schema: {
	    active: {default: false},
	    preset: {default: 'default', oneOf: ['none', 'default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'arches', 'threetowers', 'poison', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris']},
	    seed: {type: 'int', default: 1, min: 0, max: 1000},

	    skyType: {default: 'color', oneOf:['none', 'color', 'gradient', 'atmosphere']},
	    skyColor: {type: 'color'},
	    horizonColor: {type: 'color'},
	    lighting: {default: 'distant', oneOf: ['none', 'distant', 'point']},
	    shadow: {default: false},
	    shadowSize: { default: 10},
	    lightPosition: {type:'vec3', default: {x: 0, y: 1, z: -0.2}},
	    fog: {type:'float', default: 0, min: 0, max: 1},

	    flatShading: {default: false},
	    playArea: {type: 'float', default: 1, min: 0.5, max: 10},

	    ground: {default: 'hills', oneOf:['none', 'flat', 'hills', 'canyon', 'spikes', 'noise']},
	    groundYScale: {type: 'float', default: 3, min: 0, max: 50},
	    groundTexture: {default: 'none', oneOf:['none', 'checkerboard', 'squares', 'walkernoise']},
	    groundColor:  {type: 'color', default: '#553e35'},
	    groundColor2: {type: 'color', default: '#694439'},

	    dressing: {default: 'none', oneOf:['none', 'cubes', 'pyramids', 'cylinders', 'hexagons', 'stones', 'trees', 'mushrooms', 'towers', 'apparatus', 'arches', 'torii','log' ]},
	    dressingAmount: {type: 'int', default: 10, min: 0, max: 1000},
	    dressingColor:  {type: 'color', default: '#795449'},
	    dressingScale: {type: 'float', default: 5, min: 0, max: 100},
	    dressingVariance: {type: 'vec3', default: {x: 1, y: 1, z: 1}},
	    dressingUniformScale: {default: true},
	    dressingOnPlayArea: {type: 'float', default: 0, min: 0, max: 1},

	    grid: {default:'none', oneOf:['none', '1x1', '2x2', 'crosses', 'dots', 'xlines', 'ylines']},
	    gridColor: {type: 'color', default: '#ccc'}
	  },

	  multiple: false,

	  presets: {
	    'none' : {},
	    'default' : {active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 1, z: 0.33}, fog: 0.78, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'checkerboard', groundColor: '#454545', groundColor2: '#5d5d5d', dressing: 'none', dressingAmount: 10, dressingColor: '#795449', dressingScale: 1, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#ccc', shadow: false},
	    'contact': {active: true, seed: 14, skyType: 'gradient', skyColor: '#478d54', horizonColor: '#b696cb', lighting: 'distant', lightPosition: { x: 0, y: 2.01, z: -1}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#2e455f', groundColor2: '#694439', dressing: 'apparatus', dressingAmount: 7, dressingColor: '#657067', dressingScale: 20, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#478d54', shadow: false},
	    'egypt': {active: true, seed: 26, skyType: 'gradient', skyColor: '#1b7660', horizonColor: '#e4b676', lighting: 'distant', lightPosition: { x: 0, y: 1.65, z: -1}, fog: 0.75, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 5, groundTexture: 'walkernoise', groundColor: '#664735', groundColor2: '#6c4b39', dressing: 'pyramids', dressingAmount: 10, dressingColor: '#7c5c45', dressingScale: 5, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
	    'checkerboard': {active: true, seed: 1, skyType: 'gradient', skyColor: '#0d0d0d', horizonColor: '#404040', lighting: 'distant', lightPosition: { x: 0, y: 1, z: -0.2}, fog: 0.81, flatShading: true, playArea: 1, ground: 'hills', groundYScale: 4.81, groundTexture: 'checkerboard', groundColor: '#252525', groundColor2: '#111111', dressing: 'cubes', dressingAmount: 10, dressingColor: '#9f9f9f', dressingScale: 1.51, dressingVariance: { x: 5, y: 20, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#ccc', shadow: false},
	    'forest': {active: true, seed: 8, skyType: 'gradient', skyColor: '#24b59f', horizonColor: '#eff9b7', lighting: 'distant', lightPosition: { x: -1.2, y: 0.88, z: -0.55}, fog: 0.8, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 4.18, groundTexture: 'squares', groundColor: '#937a24', groundColor2: '#987d2e', dressing: 'trees', dressingAmount: 500, dressingColor: '#888b1d', dressingScale: 1, dressingVariance: { x: 10, y: 10, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#c5a543', shadow: false},
	    'goaland': {active: true, seed: 17, skyType: 'gradient', skyColor: '#14645f', horizonColor: '#a3dab8', lighting: 'point', lightPosition: { x: 0.1, y: 4, z: 0.56}, fog: 0.73, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 0.81, groundTexture: 'none', groundColor: '#ae3241', groundColor2: '#db4453', dressing: 'mushrooms', dressingAmount: 150, dressingColor: '#a9313d', dressingScale: 5, dressingVariance: { x: 5, y: 10, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#239893', shadow: false},
	    'yavapai': {active: true, seed: 11, skyType: 'gradient', skyColor: '#239849', horizonColor: '#cfe0af', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#C66344', groundColor2: '#c96b4b', dressing: 'stones', dressingAmount: 500, dressingColor: '#C66344', dressingScale: 0.06, dressingVariance: { x: 0.2, y: 0.1, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
	    'goldmine': {active: true, seed: 53, skyType: 'gradient', skyColor: '#1e1c1a', horizonColor: '#8c7964', lighting: 'point', lightPosition: { x: -0.09, y: 3, z: 0.33}, fog: 0.43, flatShading: true, playArea: 1.08, ground: 'canyon', groundYScale: 50, groundTexture: 'none', groundColor: '#353535', groundColor2: '#454545', dressing: 'hexagons', dressingAmount: 300, dressingColor: '#fe921b', dressingScale: 0.5, dressingVariance: { x: 2, y: 8, z: 2}, dressingUniformScale: true, dressingOnPlayArea: 0.03, grid: 'none', gridColor: '#ccc', shadow: false},
	    'threetowers': {active: true, seed: 5, skyType: 'gradient', skyColor: '#23a06b', horizonColor: '#f5e170', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.26, groundTexture: 'walkernoise', groundColor: '#273a49', groundColor2: '#2b464f', dressing: 'towers', dressingAmount: 3, dressingColor: '#5f6d94', dressingScale: 50, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#239893', shadow: false},
	    'poison': {active: true, seed: 92, skyType: 'gradient', skyColor: '#1ea84a', horizonColor: '#177132', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'none', groundColor: '#851f31', groundColor2: '#912235', dressing: 'hexagons', dressingAmount: 20, dressingColor: '#c7415b', dressingScale: 20, dressingVariance: { x: 20, y: 200, z: 20}, dressingUniformScale: false, dressingOnPlayArea: 0, grid: 'crosses', gridColor: '#1ea84a', shadow: false},
	    'arches': {active: true, seed: 19, skyType: 'atmosphere', skyColor: '#8cbdc8', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 0.16, z: 0.33}, fog: 0.67, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 10, groundTexture: 'walkernoise', groundColor: '#a87d6f', groundColor2: '#795449', dressing: 'arches', dressingAmount: 6, dressingColor: '#795449', dressingScale: 26, dressingVariance: { x: 20, y: 40, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0.04, grid: 'none', gridColor: '#ccc', shadow: false},
	    'tron': {active: true, seed: 14, skyType: 'gradient', skyColor: '#091b39', horizonColor: '#284a9e', lighting: 'distant', lightPosition: { x: -0.72, y: 0.62, z: 0.4}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#061123', groundColor2: '#694439', dressing: 'towers', dressingAmount: 5, dressingColor: '#fb000e', dressingScale: 15, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#fb000e', shadow: false},
	    'japan': {active: true, seed: 14, skyType: 'gradient', skyColor: '#7e5db5', horizonColor: '#b4adda', lighting: 'distant', lightPosition: { x: 1.33, y: 1, z: 0.24}, fog: 0.9, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 25, groundTexture: 'walkernoise', groundColor: '#7e5db5', groundColor2: '#cabdf5', dressing: 'torii', dressingAmount: 4, dressingColor: '#bc5e7c', dressingScale: 15, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
	    'dream': {active: true, seed: 17, skyType: 'gradient', skyColor: '#87faf4', horizonColor: '#b34093', lighting: 'distant', lightPosition: { x: -0.72, y: 0.53, z: 0.97}, fog: 0.8, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 20, groundTexture: 'checkerboard', groundColor: '#b34093', groundColor2: '#c050a2', dressing: 'mushrooms', dressingAmount: 300, dressingColor: '#3cf7ed', dressingScale: 0.2, dressingVariance: { x: 0.2, y: 0.2, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
	    'volcano': {active: true, seed: 92, skyType: 'gradient', skyColor: '#4a070f', horizonColor: '#f62300', lighting: 'point', lightPosition: { x: 0.5, y: 2.25, z: 0}, fog: 0.87, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#fb0803', groundColor2: '#510000', dressing: 'arches', dressingAmount: 15, dressingColor: '#fb0803', dressingScale: 3, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: false, dressingOnPlayArea: 0.2, grid: 'none', gridColor: '#fa0e00', shadow: false},
	    'starry': {active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: -0.01, z: -0.46}, fog: 0.7, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#553e35', groundColor2: '#694439', dressing: 'none', dressingAmount: 100, dressingColor: '#795449', dressingScale: 5, dressingVariance: { x: 1, y: 1, z: 1}, dressingUniformScale: true, grid: '1x1', dressingOnPlayArea: 0, gridColor: '#39d2f2', shadow: false},
	    'osiris': {active: true, seed: 46, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: 0.02, z: -0.46}, fog: 0, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#9e7b47', groundColor2: '#9e7b47', dressing: 'pyramids', dressingAmount: 7, dressingColor: '#9e7b47', dressingScale: 5, dressingVariance: { x: 30, y: 30, z: 30}, dressingUniformScale: true, grid: 'dots', dressingOnPlayArea: 0, gridColor: '#daa452', shadow: false}
	  },

	  init: function () {
	    this.environmentData = {};

	    // stage ground diameter (and sky radius)
	    this.STAGE_SIZE = 200;

	    // data for dressing meshes
	    this.assets = {
	      'arches': [
	        {
	          type: 'mesh',
	          vertices: [409,268,4,351,228,36,336,236,-57,-152,391,69,-135,358,88,-119,330,43,-20,358,-35,-153,357,-47,37,413,-26,-20,411,-14,-302,148,154,-339,121,-126,-389,200,-88,-477,193,-76,-314,346,-19,-314,306,-30,-250,296,-73,-267,237,-82,-212,303,-68,-245,200,-67,-223,304,108,-329,299,107,-289,350,76,-320,342,69,119,373,-39,38,370,8,113,367,52,492,202,-31,462,83,-104,447,71,-80,426,112,25,482,189,-7,222,372,6,121,402,41,87,382,67,221,346,55,559,93,-13,528,47,39,505,21,-111,528,54,-101,616,31,-53,442,256,-15,300,338,19,257,308,-79,408,256,-74,312,352,-26,384,297,-31,437,257,-47,-29,415,53,-232,377,59,-139,335,77,-132,344,2,-18,377,-37,-171,387,-28,-254,384,18,-651,-27,27,-435,-28,179,-345,149,165,-272,-28,23,-215,146,-2,-279,-29,-59,-211,145,-55,-337,-28,-128,-413,247,0,-293,363,24,-214,254,-36,-164,290,33,-284,150,94,-218,362,105,75,369,29,518,147,-63,447,190,-70,445,56,-105,391,185,-60,431,49,-33,459,83,26,470,162,42,130,390,53,167,341,-30,125,394,-45,239,368,-17,91,414,10,450,18,2,449,-27,-9,436,-28,-58,496,-27,-110,582,-28,-140,647,-27,-56,325,325,-45,-307,297,-56,-647,-28,-45,-188,310,-54,-264,197,113,-367,175,139,8,387,82,426,45,-55,114,359,-28,500,27,44,461,-29,13,-512,-27,-151,-152,376,-38,-490,-28,148,12,370,-28,442,160,42,465,194,32,381,183,-33,649,-27,-34,444,16,29,616,-28,25,417,267,-66,-132,352,-34,-322,-27,130,-271,86,-115,-635,-28,-121,-291,203,-99,176,405,-10,561,52,-93,371,305,9,311,237,-22,377,200,-81,-129,406,46,-154,371,99,-82,361,71,-21,354,26,-91,363,-27,-165,413,-12,-414,215,110,-238,127,26,-408,-28,-128,-674,-28,-94,-446,232,-39,-311,226,-90,-255,210,-61,-235,192,-11,-217,218,58,-269,299,124,-386,276,78,-399,281,42,15,373,58,16,393,75,549,107,-46,481,188,-68,409,120,-41,541,81,12,230,368,41,194,350,-50,224,361,-50,604,-28,-10,602,-27,35,486,56,-121,502,69,-120,457,-27,-110,226,317,-40,-584,-28,-124,439,-26,-30,467,-26,39,547,-27,-146,21,368,14,466,229,-29,578,-27,44,609,-27,-96,291,356,-15,290,306,34,255,321,28,231,311,-5,-251,386,50,-183,307,87,-152,307,24,-264,373,-12,-392,-27,190,-333,-28,84,-281,-27,54,-270,-28,-23,-308,-28,-101,-687,-27,-59,39,418,39,413,163,25,404,206,-90,54,400,-31,121,352,8,-454,41,148,-426,9,182,-564,115,3,-427,27,-107,-548,118,-32,-556,122,-53,-517,91,-101,-475,54,140,-461,52,-134,-558,119,-71,-434,286,59,-687,-31,52,-595,146,22,-670,-28,164,-537,166,122,-575,-28,217,-566,159,65,-470,152,136,-712,-29,102,-639,-29,211,-532,-30,181,-442,-30,-100],
	          faces: [76,104,162,1,176,103,103,76,1,2,119,73,73,105,2,2,118,152,45,161,46,46,109,45,3,120,49,49,68,3,3,121,139,139,48,3,4,122,94,94,121,4,6,123,124,9,175,81,10,169,111,10,67,92,88,43,146,11,131,114,11,128,183,13,130,15,90,184,174,90,182,184,130,184,63,14,130,63,15,130,14,16,131,12,15,168,53,18,91,17,131,16,17,65,133,132,65,132,91,67,134,166,166,92,67,20,135,92,20,166,4,4,121,20,22,135,68,25,102,96,25,157,102,69,138,157,69,157,25,39,150,71,71,141,39,28,150,149,149,72,28,142,176,105,36,140,27,27,143,36,32,115,81,32,144,161,161,80,32,77,35,144,34,26,77,78,179,96,145,152,78,178,79,145,80,146,79,147,140,36,143,108,36,143,37,148,74,95,154,154,83,74,72,149,151,151,95,72,38,150,156,40,147,106,70,140,40,40,116,70,42,162,0,35,163,162,43,145,146,46,117,41,47,158,27,48,139,175,122,138,94,157,138,123,52,178,102,52,102,6,52,124,7,7,100,52,53,125,8,57,93,181,56,169,181,59,127,58,60,173,61,62,128,11,11,112,62,65,91,167,65,167,66,126,93,21,22,68,49,72,95,29,142,29,74,74,82,142,75,107,97,75,97,103,76,97,37,104,143,31,78,152,164,78,164,179,79,178,8,97,155,159,107,98,155,83,98,82,154,95,84,39,116,86,86,156,39,87,160,116,24,145,96,162,104,0,105,118,2,43,177,119,44,177,43,91,51,167,44,88,109,46,161,117,3,68,121,3,48,120,4,166,50,50,122,4,5,123,122,123,138,122,110,124,51,170,10,111,110,91,7,7,124,110,8,125,9,9,81,8,186,12,188,92,135,10,11,114,112,64,63,137,13,15,89,89,53,100,64,168,14,14,168,15,89,100,16,16,12,89,100,18,16,17,91,132,112,19,61,18,7,91,19,17,132,133,127,59,133,59,61,136,21,22,134,127,133,20,92,166,121,135,20,158,31,27,21,135,22,23,137,136,24,102,178,178,145,24,25,179,69,26,94,138,27,140,70,27,70,141,150,177,71,28,177,150,29,142,73,73,119,29,142,82,30,30,176,142,107,75,82,31,143,27,33,81,175,31,41,104,115,79,8,32,33,144,80,115,32,33,175,139,35,162,42,77,139,34,163,26,179,163,179,164,78,96,145,177,29,119,108,143,148,148,37,159,97,159,37,74,83,82,38,149,150,156,150,39,40,106,87,87,116,40,140,147,40,161,144,42,42,117,161,41,0,104,41,117,0,0,117,42,164,118,163,1,163,118,118,176,1,118,105,176,152,118,164,43,152,145,43,119,2,71,109,141,47,41,158,44,71,177,45,109,88,45,88,146,46,47,109,141,47,27,167,50,166,49,120,165,139,121,94,5,122,50,123,51,124,157,6,102,157,123,6,100,8,178,5,167,51,6,124,52,100,178,52,53,168,125,125,165,120,54,125,168,9,48,175,120,9,125,93,10,135,181,101,56,57,169,10,59,172,61,67,170,171,67,171,127,58,127,171,129,186,113,60,61,172,61,173,112,62,112,173,174,189,129,165,64,23,64,137,23,165,22,49,64,54,168,17,114,131,17,112,114,66,133,65,19,132,133,19,133,61,134,133,66,166,134,66,166,66,167,93,135,21,68,135,121,23,136,22,94,34,139,25,96,179,26,138,69,69,179,26,30,103,176,116,141,70,39,141,116,73,142,105,143,76,37,26,35,77,103,97,76,77,144,33,33,139,77,38,151,149,80,161,45,80,45,146,81,115,8,107,155,97,82,98,107,95,151,84,38,156,85,86,116,160,96,102,24,72,29,28,29,95,74,75,30,82,108,147,36,88,44,43,91,110,51,170,67,10,11,183,131,64,14,63,89,15,53,100,7,18,112,17,19,127,134,67,136,126,21,158,41,31,33,32,81,115,80,79,177,28,29,43,2,152,71,44,109,47,46,41,141,109,47,167,5,50,123,5,51,100,53,8,125,54,165,9,120,48,93,57,10,59,58,172,174,185,189,165,54,64,165,23,22,94,26,34,30,75,103,143,104,76,26,163,35,38,85,151,192,182,191,183,128,201,12,13,89,181,169,57,186,153,113,188,183,99,184,182,63,185,13,189,180,181,93,186,99,153,189,186,129,185,184,130,186,13,12,187,93,126,193,199,194,194,196,193,200,187,195,187,197,195,187,126,197,197,190,194,190,136,137,190,196,194,63,182,192,63,192,196,192,198,196,191,182,55,193,196,198,194,199,197,195,197,199,136,197,126,190,137,63,190,63,196,197,136,190,192,191,198,201,99,183,90,55,182,181,180,101,185,130,13,186,188,99,186,189,13,187,180,93,200,101,187,183,188,131,184,185,174,180,187,101,16,18,17,12,131,188,35,42,144,163,1,162,76,162,1,79,146,145]
	        }
		  ],
		  'log': [
	        {
	          type: 'mesh',
	          vertices: [-1191,376,-121,-1261,378,144,-479,296,209,-448,338,88,-911,361,-42,-1137,-307,-331,-431,-69,-31,-435,-166,-72,-1321,-302,362,-1265,-465,149,-472,-283,292,-488,-164,455,-1319,218,359,-485,221,453,-468,339,290,-1114,-48,-414,-1134,213,-334,-689,216,-169,-501,18,-165,-1209,-403,-37,-455,-221,170,-1342,-41,442,-493,29,516,-1194,-467,-116,-452,-284,91,222,-288,14,246,-392,336,259,-287,480,262,52,479,252,157,334,-428,26,-135,-433,218,-74,225,51,13,219,-119,-42,232,-393,158,265,-117,534,238,157,156,229,115,248,727,-317,261,701,-226,386,656,68,380,654,158,253,695,67,-27,722,-80,-72,742,-317,106,674,-79,431,691,78,68,740,-227,-21,669,158,98,1193,21,67,1161,147,105,1552,75,114,1507,-34,72,1141,-193,346,1181,-190,216,1455,-223,206,1469,-231,330,1055,138,444,1063,9,487,1550,-60,473,1587,54,438,1149,147,183,1588,137,216,1163,-105,178,1470,-148,108,1096,-118,449,1505,-169,432,1116,223,208,1076,219,338,1601,129,340,1201,-108,110,1544,-57,419,1571,26,393,1572,87,231,1546,42,157,1486,-120,152,1475,-175,224,1511,-136,389,1582,81,321,1513,-37,127,1485,-181,314,-1253,274,112,-1296,154,274,-1462,198,231,-1422,308,83,-1200,273,-88,-1353,421,-176,-1363,306,-139,-1314,-42,337,-1298,-239,276,-1497,226,364,-1521,-43,450,-1256,-362,116,-1142,-47,-309,-1267,-50,-503,-1298,-49,-386,-1157,150,-249,-1159,-243,-246,-1202,-363,-84,-1290,240,-413,-1315,170,-318,-1292,-339,-410,-1336,-517,-171,-1345,-401,-135,-1317,-268,-316,-1287,-278,-430,-1314,-229,-328,-1472,159,268,-1435,-515,124,-1425,-400,87,-1490,-44,333,-1431,423,118,85,12,22,-5,-74,-22,-226,233,-209,-166,322,-186,-106,72,97,23,102,96,-205,365,-93,-288,303,-59,-123,-37,24,-301,222,-131,-309,433,-226,-321,362,-287,-237,322,-301,-174,369,-250,-219,437,-203,-42,538,-585,-122,532,-607,-132,460,-645,-59,421,-647,-4,470,-610,-45,532,-719,-72,572,-682,-128,550,-669,-135,497,-698,-83,486,-729,-338,705,-934,-327,732,-928,-338,742,-903,-356,721,-892,-356,698,-911,530,-123,149,509,-218,239,697,-508,-4,727,-449,-91,417,-279,55,473,-161,36,647,-455,-165,567,-517,-123,439,-315,181,598,-550,-24,749,-604,-192,774,-631,-106,803,-556,-58,795,-482,-115,762,-511,-197,1192,-500,-132,1186,-552,-128,1189,-564,-77,1198,-520,-51,1200,-481,-85,-1478,293,294,-583,217,-130],
			  faces: [0,1,2,3,4,5,6,7,8,9,10,11,1,12,13,14,15,16,17,18,9,19,20,10,12,21,22,13,16,0,4,17,23,5,7,24,21,8,11,22,7,6,25,11,10,26,27,14,13,28,29,30,31,32,33,10,20,34,26,13,22,35,28,31,3,36,32,24,7,25,34,22,11,27,35,3,2,37,36,27,26,38,39,29,28,40,41,33,32,42,43,26,34,44,38,28,35,45,40,32,36,46,42,34,25,47,44,35,27,39,45,36,37,41,48,25,33,43,47,49,50,51,52,53,54,55,56,57,58,59,60,50,61,62,51,54,63,64,55,58,65,66,59,67,68,69,62,70,49,52,64,65,53,56,66,68,57,60,69,60,59,71,72,51,62,73,74,55,64,75,76,59,66,77,71,62,69,78,73,64,52,79,75,66,56,80,77,69,60,72,78,52,51,74,79,56,55,76,80,39,38,53,65,79,74,73,72,79,73,78,72,73,72,76,79,80,76,77,77,76,72,72,71,77,76,75,79,47,43,49,70,48,41,68,67,45,39,65,58,44,47,63,54,42,46,61,50,40,45,58,57,38,44,54,53,43,42,50,49,41,40,57,68,81,82,83,84,85,0,86,87,8,21,88,89,1,0,85,81,21,12,90,91,9,8,89,92,93,15,94,95,16,15,93,96,97,98,93,98,85,96,92,85,98,89,88,92,88,82,81,88,85,92,88,81,85,98,96,93,86,99,100,87,101,102,103,104,94,105,106,95,90,12,82,107,102,108,109,103,91,90,107,110,9,92,109,108,16,96,100,99,82,88,110,107,23,19,102,5,23,102,101,0,16,99,86,92,98,103,109,15,5,105,94,88,21,91,110,98,97,104,103,96,85,87,100,1,81,84,111,112,113,114,115,116,117,118,119,113,120,121,114,117,112,115,118,120,116,119,121,121,119,122,123,115,114,124,125,119,118,126,122,114,121,123,124,118,115,125,126,122,126,127,128,124,123,129,130,126,125,131,127,123,122,128,129,125,124,130,131,127,131,132,133,129,128,134,135,131,130,136,132,128,127,133,134,130,129,135,136,132,136,137,138,134,133,139,140,136,135,141,137,133,132,138,139,135,134,140,141,141,140,139,138,137,142,143,144,145,146,147,148,149,143,150,151,144,147,142,145,148,150,146,149,151,151,149,152,153,145,144,154,155,149,148,156,152,144,151,153,154,148,145,155,156,152,156,157,158,154,153,159,160,156,155,161,157,153,152,158,159,155,154,160,161,161,160,159,157,159,158,161,159,157,25,6,30,33,6,5,15,18,30,46,36,48,61,46,48,67,62,61,67,2,1,14,41,37,29,37,2,14,29,64,63,70,63,47,70,102,19,9,108,34,20,24,20,19,23,24,5,101,104,97,97,106,105,5,106,97,93,95,83,162,111,84,82,12,162,83,162,12,1,111,17,4,18,18,4,163,163,4,3,31,18,163,31,30]
			}
	      ],
	      'stones': [
	        {
	          type: 'mesh',
	          vertices: [-376,189,42,230,223,-310,353,162,-62,414,-23,-67,256,90,-475,24,85,-526,-418,-16,57,-432,66,-40,-199,151,-376,-155,49,467,-91,289,201,293,197,91,81,-17,-480,42,108,431,-359,-17,-250,383,-19,-243,194,-15,270,-272,180,293,-86,212,262,234,54,297,395,97,-302,-123,-21,-444,-416,-19,-123,-323,-18,267,-100,-16,429,-300,96,-361,163,-19,409,118,201,-431,-241,-18,391,-130,274,-309,306,-19,-399,-221,96,404],
	          faces: [31,18,17,0,17,18,3,20,2,18,11,10,29,27,8,27,29,1,0,18,10,10,29,0,16,19,26,11,2,1,20,30,4,20,3,15,30,12,4,4,12,5,5,27,4,4,27,20,21,25,5,7,8,25,22,7,14,7,25,14,23,28,31,0,7,17,24,26,9,31,28,9,8,27,5,2,20,1,13,19,18,10,11,1,19,13,26,3,11,19,19,16,3,11,3,2,11,18,19,20,15,30,29,10,1,25,21,14,8,5,25,5,12,21,6,7,22,7,6,23,8,0,29,8,7,0,23,31,7,13,31,9,18,31,13,9,28,24,26,13,9,27,1,20,7,31,17]
	        },
	        {
	          type: 'mesh',
	          vertices: [-217,34,-153,198,90,20,212,85,169,-131,93,171,197,113,30,173,121,164,315,29,-16,219,24,189,282,50,-102,232,38,-181,-195,-9,-166,-156,30,-207,-51,-9,-231,-180,91,-173,-19,73,-204,-280,23,96,-242,100,107,3,158,-82,109,88,221,275,-10,-40,236,-10,-135,-178,49,184,-1,-10,-243,265,-11,109,-12,-9,237,-36,46,251,-233,86,-81,93,77,-171,-163,133,69,18,16,263,296,44,93,131,-12,-226,-89,-10,-201,-273,-10,-51,-240,-9,110,190,-12,192,-253,-11,-92,42,43,-258,-115,-11,238,168,99,-88,-285,-10,24,71,124,-158,298,-10,10,116,150,-24,-282,44,39],
	          faces: [44,16,26,13,26,16,0,26,13,27,14,41,4,5,1,7,30,2,28,5,43,41,39,27,17,43,41,43,4,39,13,28,17,17,41,13,28,43,17,24,29,38,29,35,7,18,25,29,5,18,2,18,5,3,30,42,6,30,35,23,19,20,8,8,20,9,9,39,8,1,30,8,31,37,9,11,14,37,14,27,37,32,11,12,11,37,12,11,0,13,33,40,44,44,26,33,33,0,36,34,38,15,44,40,15,21,3,16,27,39,9,2,30,1,21,25,3,16,3,28,28,3,5,4,43,5,41,43,39,13,16,28,25,21,38,38,29,25,7,18,29,29,24,35,18,7,2,18,3,25,30,23,42,30,7,35,8,30,6,6,19,8,6,42,19,8,39,1,37,31,22,27,9,37,9,20,31,10,11,32,11,10,0,12,37,22,14,13,41,14,11,13,33,26,0,36,0,10,21,44,15,16,44,21,15,40,34,38,21,15,4,1,39,5,2,1]
	        },
	        {
	          type: 'mesh',
	          vertices: [-101,102,57,99,35,102,40,72,80,59,14,-168,-186,22,45,-176,25,-30,66,-7,146,153,-7,53,-110,47,-96,-90,-8,-146,150,-7,-12,-200,-7,8,-173,-7,-55,55,46,-60,125,-7,110,136,30,-10,-149,58,68,-15,82,-71,98,-7,-86,-34,-6,-194,-33,-7,171,-36,65,137,38,-8,-192,-103,-9,147,-12,62,-152],
	          faces: [2,17,0,17,8,0,17,24,8,19,24,22,5,11,4,2,13,17,17,13,24,21,23,20,1,2,21,7,15,1,7,10,15,5,9,12,15,18,13,0,5,16,0,8,5,1,15,2,10,18,15,3,13,18,24,3,22,11,23,4,4,16,5,16,4,23,24,13,3,15,13,2,6,1,21,6,21,20,6,14,1,2,0,21,1,14,7,3,18,22,8,24,19,8,19,9,12,11,5,5,8,9,16,23,21,16,21,0]
	        },
	        {
	          type: 'mesh',
	          vertices: [86,55,-18,58,38,73,97,-12,79,135,7,10,-93,-11,-72,-133,5,33,13,68,-32,94,-11,-57,-90,52,53,-24,-11,-106,-13,-10,104,-75,49,-69,-12,18,114,49,-12,-96,-46,-11,-85,-119,-11,-26,48,5,-111,-58,-11,105,-117,-12,52,-5,35,-93,123,-11,7],
	          faces: [5,8,11,2,3,1,8,1,6,11,8,6,6,19,11,10,12,17,20,7,3,3,7,16,16,0,3,16,9,19,14,4,9,15,18,5,5,11,15,18,17,5,19,0,16,1,3,0,0,6,1,19,6,0,12,8,17,2,1,12,12,10,2,1,8,12,3,2,20,16,13,9,16,7,13,19,4,11,15,11,4,17,8,5,9,4,19]
	        }
	      ],
	      'torii': [
	        {
	          type: 'mesh',
	          mirror: true,
	          flatShading: true,
	          vertices: [692,966,-52,661,834,-52,692,966,52,661,834,52,0,894,-52,0,776,-52,0,894,52,0,776,52,518,935,52,345,913,52,170,899,52,162,779,52,328,790,52,494,808,52,170,899,-52,345,913,-52,518,935,-52,494,808,-52,328,790,-52,162,779,-52,0,618,16,0,697,16,0,618,-16,0,697,-16,586,618,16,586,697,16,586,618,-16,586,697,-16,331,-29,-75,331,766,-52,369,-29,-65,357,766,-45,396,-29,-37,377,766,-26,406,-29,0,384,766,0,396,-29,37,377,766,26,369,-29,65,357,766,45,331,-29,75,331,766,52,294,-29,65,305,766,45,267,-29,37,286,766,26,257,-29,0,279,766,0,267,-29,-37,286,766,-26,294,-29,-65,305,766,-45,0,777,85,0,681,33,333,762,-75,333,806,-75,371,762,-65,371,806,-65,398,762,-37,398,806,-37,408,762,0,408,806,0,398,762,37,398,806,37,371,762,65,371,806,65,333,762,75,333,806,75,296,762,65,296,806,65,268,762,37,268,806,37,258,762,0,258,806,0,268,762,-37,268,806,-37,296,762,-65,296,806,-65,0,681,-33,0,777,-85,52,681,33,52,777,85,52,681,-33,52,777,-85],
	          faces: [4,10,14,1,13,17,11,6,7,0,3,1,16,1,17,4,19,5,14,18,19,15,17,18,3,8,13,13,9,12,12,10,11,19,7,5,19,12,11,18,13,12,16,2,0,15,8,16,14,9,15,23,26,22,27,24,26,25,20,24,26,20,22,23,25,27,29,30,28,31,32,30,33,34,32,35,36,34,37,38,36,39,40,38,41,42,40,43,44,42,45,46,44,47,48,46,49,50,48,51,28,50,55,56,54,57,58,56,59,60,58,61,62,60,63,64,62,79,81,83,65,66,64,82,53,78,67,68,66,81,53,80,69,70,68,83,80,82,71,72,70,79,82,78,73,74,72,75,63,59,75,76,74,77,54,76,60,68,76,4,6,10,1,3,13,11,10,6,0,2,3,16,0,1,4,14,19,14,15,18,15,16,17,3,2,8,13,8,9,12,9,10,19,11,7,19,18,12,18,17,13,16,8,2,15,9,8,14,10,9,23,27,26,27,25,24,25,21,20,26,24,20,23,21,25,29,31,30,31,33,32,33,35,34,35,37,36,37,39,38,39,41,40,41,43,42,43,45,44,45,47,46,47,49,48,49,51,50,51,29,28,55,57,56,57,59,58,59,61,60,61,63,62,63,65,64,79,52,81,65,67,66,82,80,53,67,69,68,81,52,53,69,71,70,83,81,80,71,73,72,79,83,82,73,75,74,59,57,55,55,77,75,75,73,71,71,69,75,67,65,63,63,61,59,59,55,75,75,69,67,67,63,75,75,77,76,77,55,54,76,54,56,56,58,76,60,62,68,64,66,68,68,70,72,72,74,68,76,58,60,62,64,68,68,74,76]
	        }
	      ],
	      'hexagons': [
	        {type: 'extrude', vertices: [-0.198, -0.302, 0.197, -0.3, 0.372, 0, 0.199, 0.298, -0.202, 0.298, -0.368, 0] }
	      ],
	      'towers': [
	        {type: 'extrude', vertices:  [-0.054, -0.178, -0.007, -0.182, 0.069, -0.027, 0.189, 0.079, 0.178, 0.124, -0.007, 0.097, -0.145, 0.182, -0.178, 0.144, -0.079, -0.021]},
	        {type: 'lathe', segments: 4, vertices: [0.004, 0.02, 0.012, 0.092, 0.042, 0.166, 0.067, 0.55, 0.101, 0.594, 0.105, 0.838, 0.193, 0.934, 0.18, 0.994]},
	        {type: 'lathe', segments: 5, vertices: [0.069, 0.216, 0.067, 0.562, 0.126, 0.562, 0.128, 0.774, 0.191, 0.774, 0.193, 0.986]}
	      ],
	      'trees': [
	        {type: 'lathe', noise: 0.015, segments: 6, vertices: [0.000001, 0.826, 0.054, 0.832, 0.105, 0.854, 0.136, 0.9, 0.136, 0.958, 0.118, 0.994]},
	        {type: 'lathe', noise: 0.015, segments: 14, vertices:  [0.000001, 0.01, 0.069, 0.022, 0.13, 0.068, 0.178, 0.18, 0.189, 0.32, 0.191, 0.59, 0.193, 0.75, 0.138, 0.79, 0.018, 0.808, 0.018, 0.996]},
	        {type: 'lathe', noise: 0.015, segments: 14, vertices: [0.000001, 0.436, 0.126, 0.46, 0.201, 0.57, 0.219, 0.72, 0.154, 0.846, 0.028, 0.884, 0.034, 0.996]}
	      ],
	      'apparatus': [
	        {type: 'lathe', segments: 10, vertices: [0.000001, 0.23, 0.042, 0.23, 0.069, 0.36, 0.038, 0.362, 0.038, 0.372, 0.06, 0.372, 0.073, 0.572, 0.024, 0.572, 0.024, 0.67, 0.069, 0.67, 0.075, 0.722, 0.097, 0.724, 0.105, 0.852, 0.083, 0.902, 0.065, 0.902, 0.065, 0.924, 0.128, 0.924, 0.146, 0.996]},
	        {type: 'lathe', segments: 16, vertices: [0.000001, 0.232, 0.229, 0.182, 0.486, 0.07, 0.356, 0.182, 0.213, 0.242, 0.154, 0.242, 0.144, 0.262, 0.178, 0.262, 0.126, 0.314, 0.04, 0.328, 0.038, 0.374, 0.058, 0.374, 0.071, 0.408, 0.026, 0.406, 0.03, 0.42, 0.091, 0.418, 0.034, 0.496, 0.01, 0.498, 0.03, 0.506, 0.014, 0.998]},
	      ],
	      'mushrooms': [
	        {type: 'lathe', noise: 0.02, segments: 14, vertices:  [0.000001, 0.006, 0.13, 0.018, 0.341, 0.084, 0.437, 0.144, 0.492, 0.234, 0.484, 0.246, 0.276, 0.232, 0.107, 0.284, 0.046, 0.346, 0.062, 0.852, 0.097, 0.956, 0.166, 0.998]},
	        {type: 'lathe', noise: 0.02, segments: 10, vertices:  [0.000001, 0.562, 0.091, 0.572, 0.172, 0.61, 0.223, 0.666, 0.256, 0.74, 0.258, 0.806, 0.246, 0.824, 0.062, 0.826, 0.065, 0.948, 0.097, 0.998]},
	        {type: 'lathe', noise: 0.02, segments: 10, vertices:  [0.000001, 0.768, 0.099, 0.772, 0.219, 0.802, 0.306, 0.844, 0.352, 0.886, 0.352, 0.908, 0.118, 0.904, 0.107, 0.93, 0.115, 0.966, 0.14, 0.996]}
	      ]
	    };

	    // scale down dressing meshes (coordinates were saved in integers for better compression)
	    for (var i in this.assets){
	      for (var j = 0; j < this.assets[i].length; j++) {
	        var asset = this.assets[i][j];
	        if (asset.type != 'mesh') continue;
	        for (var v = 0, len = asset.vertices.length; v < len; v++) {
	          asset.vertices[v] /= 1000.0;
	        }
	      }
	    }

	    // save current scene fog
	    this.userFog = this.el.sceneEl.getAttribute('fog');

	    // create sky
	    this.sky = document.createElement('a-sky');
	    this.sky.setAttribute('radius', this.STAGE_SIZE);
	    this.sky.setAttribute('theta-length', 110);
	    this.sky.classList.add('environment');

	    // stars are created when needed
	    this.stars = null;

	    // create ground
	    this.groundMaterial = null;
	    this.ground = document.createElement('a-entity');
	    this.ground.setAttribute('rotation', '-90 0 0');
	    this.ground.classList.add('environmentGround');
	    this.ground.classList.add('environment');
	    this.groundCanvas = null;
	    this.groundTexture = null;
	    this.groundMaterial = null;
	    this.groundGeometry = null;

	    this.dressing = document.createElement('a-entity');
	    this.dressing.classList.add('environmentDressing');
	    this.dressing.classList.add('environment');

	    this.gridCanvas = null;
	    this.gridTexture = null;

	    // create lights (one ambient hemisphere light, and one directional for the sun)
	    this.hemilight = document.createElement('a-entity');
	    this.hemilight.classList.add('environment');
	    this.hemilight.setAttribute('position', '0 50 0');
	    this.hemilight.setAttribute('light', {
	      type: 'hemisphere',
	      color: '#CEE4F0',
	      intensity: 0.4
	    });
	    this.sunlight = document.createElement('a-entity');
	    this.sunlight.classList.add('environment');
	    this.sunlight.setAttribute('position', this.data.lightPosition);
	    this.sunlight.setAttribute('light', {intensity: 0.6});

	    // add everything to the scene
	    this.el.appendChild(this.hemilight);
	    this.el.appendChild(this.sunlight);
	    this.el.appendChild(this.ground);
	    this.el.appendChild(this.dressing);
	    this.el.appendChild(this.sky);
	  },

	  // returns a fog color from a specific sky type and sun height
	  getFogColor: function (skyType, sunHeight) {

	    var fogColor;
	    if (skyType == 'color' || skyType == 'none'){
	      fogColor = new THREE.Color(this.environmentData.skyColor);
	    }
	    else if (skyType == 'gradient'){
	      fogColor = new THREE.Color(this.environmentData.horizonColor);
	    }
	    else if (skyType == 'atmosphere')
	    {
	      var fogRatios = [        1,       0.5,      0.22,       0.1,      0.05,     0];
	      var fogColors = ['#C0CDCF', '#81ADC5', '#525e62', '#2a2d2d', '#141616', '#000'];

	      if (sunHeight <= 0) return '#000';

	      sunHeight = Math.min(1, sunHeight);

	      for (var i = 0; i < fogRatios.length; i++){
	        if (sunHeight > fogRatios[i]){
	          var c1 = new THREE.Color(fogColors[i - 1]);
	          var c2 = new THREE.Color(fogColors[i]);
	          var a = (sunHeight - fogRatios[i]) / (fogRatios[i - 1] - fogRatios[i]);
	          c2.lerp(c1, a);
	          fogColor = c2;
	          break;
	        }
	      }
	    }
	    // dim down the color
	    fogColor.multiplyScalar(0.9);
	    // mix it a bit with ground color
	    fogColor.lerp(new THREE.Color(this.data.groundColor), 0.3);

	    return '#' + fogColor.getHexString();
	  },

	  update: function (oldDataNonPreset) {
	    var oldData;

	    if (!this.data.preset) {
	      oldData = oldDataNonPreset;
	      this.environmentData = this.data;
	    } else {
	      oldData = AFRAME.utils.clone(this.environmentData);
	      this.environmentData = {};
	      Object.assign(this.environmentData, this.data);
	      Object.assign(this.environmentData, this.presets[this.data.preset]);
	      Object.assign(this.environmentData, this.el.components.environment.attrValue);
	      console.log(this.environmentData);
	    }

	    var skyType = this.environmentData.skyType;
	    var sunPos = new THREE.Vector3(this.environmentData.lightPosition.x, this.environmentData.lightPosition.y, this.environmentData.lightPosition.z);
	    sunPos.normalize();

	    // update light colors and intensities
	    if (this.sunlight) {
	      this.sunlight.setAttribute('position', this.environmentData.lightPosition);
	      if (skyType != 'atmosphere') {
	        // dim down the sky color for the light
	        var skycol = new THREE.Color(this.environmentData.skyColor);
	        skycol.r = (skycol.r + 1.0) / 2.0;
	        skycol.g = (skycol.g + 1.0) / 2.0;
	        skycol.b = (skycol.b + 1.0) / 2.0;
	        this.hemilight.setAttribute('light', {'color': '#' + skycol.getHexString()});
	        this.sunlight.setAttribute('light', {'intensity': 0.6});
	        this.hemilight.setAttribute('light', {'intensity': 0.6});
	      }
	      else {
	        this.sunlight.setAttribute('light', {'intensity': 0.1 + sunPos.y * 0.5});
	        this.hemilight.setAttribute('light', {'intensity': 0.1 + sunPos.y * 0.5});
	      }

	      this.sunlight.setAttribute('light', {
	        castShadow: this.environmentData.shadow,
	        shadowCameraLeft: -this.environmentData.shadowSize,
	        shadowCameraBottom: -this.environmentData.shadowSize,
	        shadowCameraRight: this.environmentData.shadowSize,
	        shadowCameraTop: this.environmentData.shadowSize
	      });
	    }

	    // update sky colors
	    if (skyType !== oldData.skyType ||
	      this.environmentData.skyColor != oldData.skyColor ||
	      this.environmentData.horizonColor != oldData.horizonColor) {

	      this.sky.removeAttribute('material');

	      var mat = {};
	      mat.shader = {'none': 'flat', 'color': 'flat', 'gradient': 'gradientshader', 'atmosphere': 'skyshader'}[skyType];
	      if (this.stars) {
	        this.stars.setAttribute('visible', skyType == 'atmosphere');
	      }
	      if (skyType == 'color') {
	        mat.color = this.environmentData.skyColor;
	        mat.fog = false;
	      }
	      else if (skyType == 'gradient') {
	        mat.topColor = this.environmentData.skyColor;
	        mat.bottomColor = this.environmentData.horizonColor;
	      }
	      this.sky.setAttribute('material', mat);
	    }

	    // set atmosphere sun position and stars
	    if (skyType == 'atmosphere') {
	      this.sky.setAttribute('material', {'sunPosition': sunPos});
	      this.setStars((1 - Math.max(0, (sunPos.y + 0.08) * 8)) * 2000 );
	    }

	    // set fog color
	    if (this.environmentData.fog > 0) {
	      this.el.sceneEl.setAttribute('fog', {
	        color: this.getFogColor(skyType, sunPos.y),
	        far: (1.01 - this.environmentData.fog) * this.STAGE_SIZE * 2
	      });
	    }
	    else {
	      this.el.sceneEl.removeAttribute('fog');
	    }

	    // scene lights
	    this.sunlight.setAttribute('light', {type: this.environmentData.lighting == 'point' ? 'point' : 'directional'});
	    this.sunlight.setAttribute('visible', this.environmentData.lighting !== 'none');
	    this.hemilight.setAttribute('visible', this.environmentData.lighting !== 'none');

	    // check if ground geometry needs to be calculated
	    var updateGroundGeometry =
	      !this.groundGeometry ||
	      this.environmentData.seed != oldData.seed ||
	      this.environmentData.ground != oldData.ground ||
	      this.environmentData.playArea != oldData.playArea ||
	      this.environmentData.flatShading != oldData.flatShading;

	    // check if any parameter of the ground was changed, and update it
	    if (updateGroundGeometry ||
	        this.environmentData.groundColor != oldData.groundColor ||
	        this.environmentData.groundColor2 != oldData.groundColor2 ||
	        this.environmentData.groundYScale != oldData.groundYScale ||
	        this.environmentData.groundTexture != oldData.groundTexture ||
	        this.environmentData.gridColor != oldData.gridColor ||
	        this.environmentData.grid != oldData.grid
	        )
	    {
	      this.updateGround(updateGroundGeometry);
	      // set bounce light color to ground color
	      if (this.hemilight) this.hemilight.setAttribute('light', {'groundColor': this.environmentData.groundColor});
	    }

	    // update dressing
	    if (this.environmentData.seed != oldData.seed ||
	        this.environmentData.dressingOnPlayArea != oldData.dressingOnPlayArea ||
	        this.environmentData.dressing != oldData.dressing ||
	        this.environmentData.flatShading != oldData.flatShading ||
	        this.environmentData.dressingAmount != oldData.dressingAmount ||
	        this.environmentData.dressingScale != oldData.dressingScale ||
	        this.environmentData.dressingColor != oldData.dressingColor  ||
	        this.environmentData.dressingVariance.x != oldData.dressingVariance.x ||
	        this.environmentData.dressingVariance.y != oldData.dressingVariance.y ||
	        this.environmentData.dressingVariance.z != oldData.dressingVariance.z ||
	        this.environmentData.dressingUniformScale != oldData.dressingUniformScale
	      ) {
	      this.updateDressing();
	    }

	    this.sky.setAttribute('visible', skyType !== 'none');

	    this.el.setAttribute('visible', this.environmentData.active);
	    if (!this.environmentData.active) {
	      if (this.userFog) {
	        this.el.sceneEl.setAttribute('fog', this.userFog);
	      }
	      else {
	        this.el.sceneEl.removeAttribute('fog');
	      }
	    }

	    // dump current component settings to console
	    this.dumpParametersDiff();
	  },

	  // logs current parameters to console, for saving to a preset
	  logPreset: function () {
	    var str = '{';
	    for (var i in this.schema){
	      if (i == 'preset') continue;
	      str += i + ': ';
	      var type = this.schema[i].type;
	      if (type == 'vec3') {
	        str += '{ x: ' + this.environmentData[i].x + ', y: ' + this.environmentData[i].y + ', z: ' + this.environmentData[i].z + '}';
	      }
	      else if (type == 'string' || type == 'color') {
	        str += '"' + this.environmentData[i] + '"';
	      }
	      else {
	        str += this.environmentData[i];
	      }
	      str += ', ';
	    }
	    str += '}';
	    console.log(str);
	  },

	  // dumps current component settings to console.
	  dumpParametersDiff: function () {

	    // trim number to 3 decimals
	    function dec3 (v) {
	      return Math.floor(v * 1000) / 1000;
	    }

	    var params = [];
	    var usingPreset = this.data.preset != 'none' ? this.presets[this.data.preset] : false;

	    if (usingPreset) {
	      params.push('preset: ' + this.data.preset);
	    }

	    for (var i in this.schema) {
	      if (i == 'preset' || (usingPreset && usingPreset[i] === undefined)) {
	        continue;
	      }
	      var def = usingPreset ? usingPreset[i] : this.schema[i].default;
	      var data = this.environmentData[i];
	      var type = this.schema[i].type;
	      if (type == 'vec3') {
	        var coords = def;
	        if (typeof(def) == 'string') {
	          def = def.split(' ');
	          coords = {x: def[0], y: def[1], z: def[2]};
	        }
	        if (dec3(coords.x) != dec3(data.x) || dec3(coords.y) != dec3(data.y) || dec3(coords.z) != dec3(data.z)) {
	          params.push(i + ': ' + dec3(data.x) + ' ' + dec3(data.y) + ' ' + dec3(data.z));
	        }
	      }
	      else {
	        if (def != data) {
	          if (this.schema[i].type == 'number') {
	            data = dec3(data);
	          }
	          params.push(i + ': ' + data);
	        }
	      }
	    }
	    console.log('%c' + params.join('; '), 'color: #f48;font-weight:bold');
	  },

	  // Custom Math.random() with seed. Given this.environmentData.seed and x, it always returns the same "random" number
	  random: function (x) {
	    return parseFloat('0.' + Math.sin(this.environmentData.seed * 9999 * x).toString().substr(7));
	  },


	  // updates ground attributes, and geometry if required
	  updateGround: function (updateGeometry) {

	    var resolution = 64; // number of divisions of the ground mesh

	    if (updateGeometry) {
	      var visibleground = this.environmentData.ground != 'none';
	      this.ground.setAttribute('visible', visibleground);
	      if (!visibleground) {
	        return;
	      }

	      if (!this.groundGeometry) {
	        this.groundGeometry = new THREE.PlaneGeometry(this.STAGE_SIZE + 2, this.STAGE_SIZE + 2, resolution - 1, resolution - 1);
	      }
	      var perlin = new PerlinNoise();
	      var verts = this.groundGeometry.vertices;
	      var numVerts = this.groundGeometry.vertices.length;
	      var frequency = 10;
	      var inc = frequency / resolution;

	      for (var i = 0, x = 0, y = 0; i < numVerts; i++) {
	        if (this.environmentData.ground == 'flat') {
	          verts[i].z = 0;
	          continue;
	        }

	        var h;
	        switch (this.environmentData.ground) {
	          case 'hills': {
	            h = Math.max(0, perlin.noise(x, y, 0));
	            break;
	          }
	          case 'canyon': {
	            h = 0.2 + perlin.noise(x, y, 0) * 0.8;
	            h = Math.min(1, Math.pow(h, 2) * 10);
	            break;
	          }
	          case 'spikes': {
	            h = this.random(i) < 0.02 ? this.random(i + 1) : 0;
	            break;
	          }
	          case 'noise': {
	            h = this.random(i) < 0.35 ? this.random(i + 1) : 0;
	            break;
	          }
	        }

	        h += this.random(i + 2) * 0.1; // add some randomness

	        // flat ground in the center
	        var xx = x * 2 / frequency - 1;
	        var yy = y * 2 / frequency - 1;
	        var pa = this.environmentData.playArea;
	        xx = Math.max(0, Math.min(1, (Math.abs(xx) - (pa - 0.9)) * (1 / pa) ));
	        yy = Math.max(0, Math.min(1, (Math.abs(yy) - (pa - 0.9)) * (1 / pa) ));
	        h *= xx > yy ? xx : yy;
	        if (h < 0.01) h = 0; // stick to the floor

	        // set height
	        verts[i].z = h;

	        // calculate next x,y ground coordinates
	        x += inc;
	        if (x >= 10) {
	          x = 0;
	          y += inc;
	        }
	      }

	      this.groundGeometry.computeFaceNormals();
	      if (this.environmentData.flatShading) {
	        this.groundGeometry.computeFlatVertexNormals();
	      }
	      else {
	        this.groundGeometry.computeVertexNormals();
	      }

	      this.groundGeometry.verticesNeedUpdate = true;
	      this.groundGeometry.normalsNeedUpdate = true;
	    }

	    // apply Y scale. There's no need to recalculate the geometry for this. Just change scale
	    this.ground.setAttribute('scale', {z: this.environmentData.groundYScale});

	    // update ground, playarea and grid textures.
	    var groundResolution = 2048;
	    var texMeters = 20; // ground texture of 20 x 20 meters
	    var texRepeat = this.STAGE_SIZE / texMeters;

	    if (!this.groundCanvas || this.groundCanvas.width != groundResolution) {
	      this.gridCanvas = document.createElement('canvas');
	      this.gridCanvas.width = groundResolution;
	      this.gridCanvas.height = groundResolution;
	      this.gridTexture = new THREE.Texture(this.gridCanvas);
	      this.gridTexture.wrapS = THREE.RepeatWrapping;
	      this.gridTexture.wrapT = THREE.RepeatWrapping;
	      this.gridTexture.repeat.set(texRepeat, texRepeat);

	      this.groundCanvas = document.createElement('canvas');
	      this.groundCanvas.width = groundResolution;
	      this.groundCanvas.height = groundResolution;
	      this.groundTexture = new THREE.Texture(this.groundCanvas);
	      this.groundTexture.wrapS = THREE.RepeatWrapping;
	      this.groundTexture.wrapT = THREE.RepeatWrapping;
	      this.groundTexture.repeat.set(texRepeat, texRepeat);

	      // ground material diffuse map is the regular ground texture and the grid texture
	      // is used in the emissive map. This way, the grid is always equally visible, even at night.
	      this.groundMaterialProps = {
	        map: this.groundTexture,
	        emissive: new THREE.Color(0xFFFFFF),
	        emissiveMap: this.gridTexture
	      };

	      // use .shading for A-Frame < 0.7.0 and .flatShading for A-Frame >= 0.7.0
	      if (new THREE.Material().hasOwnProperty('shading')) {
	        this.groundMaterialProps.shading = this.environmentData.flatShading ? THREE.FlatShading : THREE.SmoothShading;
	      } else {
	        this.groundMaterialProps.flatShading = this.environmentData.flatShading;
	      }

	      this.groundMaterial = new THREE.MeshLambertMaterial(this.groundMaterialProps);
	    }

	    var groundctx = this.groundCanvas.getContext('2d');
	    var gridctx = this.gridCanvas.getContext('2d');

	    this.drawTexture(groundctx, groundResolution, texMeters);

	    gridctx.fillStyle = '#000000';
	    gridctx.fillRect(0, 0, groundResolution, groundResolution);
	    this.drawGrid(gridctx, groundResolution, texMeters);

	    this.groundTexture.needsUpdate = true;
	    this.gridTexture.needsUpdate = true;

	    if (updateGeometry) {
	      var mesh = new THREE.Mesh(this.groundGeometry, this.groundMaterial);
	      this.ground.setObject3D('mesh', mesh);
	    }
	    else {
	      this.ground.getObject3D('mesh').material = this.groundMaterial;
	    }

	    this.ground.setAttribute('shadow', {
	      cast: false,
	      receive: this.environmentData.shadow
	    });
	  },

	  // draw grid to a canvas context
	  drawGrid: function (ctx, size, texMeters) {

	    if (this.environmentData.grid == 'none') return;

	    // one grid feature each 2 meters

	    var num = Math.floor(texMeters / 2);
	    var step = size / (texMeters / 2); // 2 meters == <step> pixels
	    var i, j, ii;

	    ctx.fillStyle = this.environmentData.gridColor;

	    switch (this.environmentData.grid) {
	      case '1x1':
	      case '2x2': {
	        if (this.environmentData.grid == '1x1') {
	          num = num * 2;
	          step = size / texMeters;
	        }
	        for (i = 0; i < num; i++) {
	          ii = Math.floor(i * step);
	          ctx.fillRect(0, ii, size, 1);
	          ctx.fillRect(ii, 0, 1, size);
	        }
	        break;
	      }
	      case 'crosses': {
	        var l = Math.floor(step / 20);
	        for (i = 0; i < num + 1; i++) {
	          ii = Math.floor(i * step);
	          for (j = 0; j < num + 1; j++) {
	            var jj = Math.floor(-l + j * step);
	            ctx.fillRect(jj, ii, l * 2, 1);
	            ctx.fillRect(ii, jj, 1, l * 2);
	          }
	        }
	        break;
	      }
	      case 'dots': {
	        for (i = 0; i < num + 1; i++) {
	          for (j = 0; j < num + 1; j++) {
	            ctx.beginPath(); ctx.arc(Math.floor(j * step), Math.floor(i * step), 4, 0, Math.PI * 2); ctx.fill();
	          }
	        }
	        break;
	      }
	      case 'xlines': {
	        for (i = 0; i < num; i++) {
	          ctx.fillRect(Math.floor(i * step), 0, 1, size);
	        }
	        break;
	      }
	      case 'ylines': {
	        for (i = 0; i < num; i++) {
	          ctx.fillRect(0, Math.floor(i * step), size, 1);
	        }
	        break;
	      }
	    }
	  },

	  // draw ground texture to a canvas context
	  drawTexture: function(ctx, size, texMeters) {
	    // fill all with ground Color
	    ctx.fillStyle = this.environmentData.groundColor;
	    ctx.fillRect(0, 0, size, size);

	    var i, col, col1, col2, im, imdata, numpixels;

	    if (this.environmentData.groundTexture == 'none') return;
	    switch(this.environmentData.groundTexture) {
	      case 'checkerboard': {
	        ctx.fillStyle = this.environmentData.groundColor2;
	        var num = Math.floor(texMeters / 2);
	        var step = size / (texMeters / 2); // 2 meters == <step> pixels
	        for (i = 0; i < num + 1; i += 2) {
	          for (var j = 0; j < num + 1; j ++) {
	            ctx.fillRect(Math.floor((i + j % 2) * step), Math.floor(j * step), Math.floor(step), Math.floor(step));
	          }
	        }
	        break;
	      }
	      case 'squares': {
	        var numSquares = 16;
	        var squareSize = size / numSquares;
	        col1 = new THREE.Color(this.environmentData.groundColor);
	        col2 = new THREE.Color(this.environmentData.groundColor2);
	        for (i = 0; i < numSquares * numSquares; i++) {
	          col = this.random(i + 3) > 0.5 ? col1.clone() : col2.clone();
	          col.addScalar(this.random(i + 3) * 0.1 - 0.05);
	          ctx.fillStyle = '#' + col.getHexString();
	          ctx.fillRect((i % numSquares) * squareSize, Math.floor(i / numSquares) * squareSize, squareSize, squareSize);
	        }
	        break;
	      }
	      case 'noise': {
	      // TODO: fix
	        imdata = ctx.getImageData(0, 0, size, size);
	        im = imdata.data;
	        col1 = new THREE.Color(this.environmentData.groundColor);
	        col2 = new THREE.Color(this.environmentData.groundColor2);
	        var diff = new THREE.Color(col2.r - col1.r, col2.g - col1.g, col2.b - col1.b);
	        var perlin = new PerlinNoise();
	        for (i = 0, j = 0, numpixels = im.length; i < numpixels; i += 4, j++){
	          //console.log( (j % size) / size, j / size)
	          var rnd = perlin.noise((j % size) / size * 3, j / size / size * 3, 0);
	          im[i + 0] = Math.floor((col1.r + diff.r * rnd) * 255);
	          im[i + 1] = Math.floor((col1.g + diff.g * rnd) * 255);
	          im[i + 2] = Math.floor((col1.b + diff.b * rnd) * 255);
	        }
	        ctx.putImageData(imdata, 0, 0);
	        break;
	      }
	      case 'walkernoise': {
	        var s = Math.floor(size / 2);
	        var tex = document.createElement('canvas');
	        tex.width = s;
	        tex.height = s;
	        var texctx = tex.getContext('2d');
	        texctx.fillStyle = this.environmentData.groundColor;
	        texctx.fillRect(0, 0, s, s);
	        imdata = texctx.getImageData(0, 0, s, s);
	        im = imdata.data;
	        col1 = new THREE.Color(this.environmentData.groundColor);
	        col2 = new THREE.Color(this.environmentData.groundColor2);
	        var walkers = [];
	        var numwalkers = 1000;
	        for (i = 0; i < numwalkers; i++) {
	          col = col1.clone().lerp(col2, Math.random());
	          walkers.push({
	            x: Math.random() * s,
	            y: Math.random() * s,
	            r: Math.floor(col.r * 255),
	            g: Math.floor(col.g * 255),
	            b: Math.floor(col.b * 255)
	          });
	        }
	        var iterations = 5000;
	        for (var it = 0; it< iterations; it++){
	          for (i = 0; i < numwalkers; i++) {
	            var walker = walkers[i];
	            var pos = Math.floor((walker.y * s + walker.x)) * 4;
	            im[pos + 0] = walker.r;
	            im[pos + 1] = walker.g;
	            im[pos + 2] = walker.b;
	            walker.x += Math.floor(Math.random() * 3) - 1;
	            walker.y += Math.floor(Math.random() * 3) - 1;
	            if (walker.x >= s) walker.x = walker.x - s;
	            if (walker.y >= s) walker.y = walker.y - s;
	            if (walker.x < 0) walker.x = s + walker.x;
	            if (walker.y < 0) walker.y = s + walker.y;
	          }
	        }
	        texctx.putImageData(imdata, 0, 0);
	        ctx.drawImage(tex, 0, 0, size, size);
	        break;
	      }
	    }
	  },

	  // returns an array of THREE.Geometry for set dressing
	  getAssetGeometry: function(data) {
	    if (!data) return null;
	    var geoset = [];
	    var self = this;

	    function applyNoise(geo, noise) {
	      var n = new THREE.Vector3();
	      for (var i = 0, numVerts = geo.vertices.length; i < numVerts; i++) {
	        n.x = (self.random(i) - 0.5) * noise;
	        n.y = (self.random(i + numVerts) - 0.5) * noise;
	        n.z = (self.random(i + numVerts * 2) - 0.5) * noise;
	        geo.vertices[i].add(n);
	      }
	    }

	    var i, geo, verts;

	    for (var j = 0; j < data.length; j++) {

	      if (data[j].type == 'lathe') {
	        var maxy = -99999;
	        var points = [];
	        verts = data[j].vertices;
	        for (i = 0; i < verts.length; i += 2) {
	          points.push(new THREE.Vector2(verts[i], verts[i + 1]));
	          if (verts[i + 1] > maxy) {
	            maxy = verts[i + 1];
	          }
	        }
	        geo = new THREE.LatheGeometry(points, data[j]['segments'] || 8);
	        geo.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI, 0, 0)));
	        geo.applyMatrix(new THREE.Matrix4().makeTranslation(0, maxy, 0));
	        if (data[j]['noise']) applyNoise(geo, data[j].noise);
	        geoset.push(geo);
	      }

	      else if (data[j].type == 'extrude') {
	        var shape = new THREE.Shape();
	        verts = data[j].vertices;
	        for (i = 0; i < verts.length; i+= 2) {
	          if (i == 0) shape.moveTo(verts[i], verts[i + 1]);
	          else shape.lineTo(verts[i], verts[i + 1]);
	        }
	        geo = new THREE.ExtrudeGeometry(shape, {amount: 1, bevelEnabled: false});
	        geo.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(-Math.PI / 2, 0, 0)));
	        if (data[j]['noise']) applyNoise(geo, data[j].noise);
	        geoset.push(geo);
	      }

	      else if (data[j].type == 'mesh') {
	        geo = new THREE.Geometry();
	        verts = data[j].vertices;
	        var faces = data[j].faces;
	        for (var v = 0; v < verts.length; v += 3) {
	          geo.vertices.push(new THREE.Vector3(verts[v], verts[v + 1], verts[v + 2]));
	        }
	        for (var f = 0; f < faces.length; f += 3) {
	          geo.faces.push(new THREE.Face3(faces[f], faces[f + 1], faces[f + 2]));
	        }
	        if (this.environmentData.flatShading || data[j]['flatShading']) {
	          geo.computeFaceNormals();
	        }
	        else {
	          geo.computeVertexNormals();
	        }

	        if (data[j]['mirror']) {
	          geo.merge(geo, new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(0, Math.PI, 0)));
	        }

	        if (data[j]['noise']) applyNoise(geo, data[j].noise);
	        geoset.push(geo);
	      }
	    }
	    return geoset;
	  },

	  // updates set dressing
	  updateDressing: function () {
	    var dressing = new THREE.Object3D();
	    this.dressing.setAttribute('visible', this.environmentData.dressing != 'none');
	    if (this.environmentData.dressing == 'none') {
	      return;
	    }
	    var geometry = new THREE.Geometry(); // mother geometry that will hold all instances

	    // get array of geometries
	    var geoset;
	    switch (this.environmentData.dressing){
	      case 'cubes': {
	        geoset = [new THREE.BoxGeometry(1, 1, 1)];
	        geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
	        break;
	      }
	      case 'pyramids': {
	        geoset = [new THREE.ConeGeometry(1, 1, 4, 1, true)];
	        geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
	        break;
	      }
	      case 'cylinders': {
	        geoset = [new THREE.CylinderGeometry(0.5, 0.5, 1, 8, 1, true)];
	        geoset[0].applyMatrix(new THREE.Matrix4().makeTranslation(0, 0.5, 0));
	        break;
	      }
	      default: {
	        geoset = this.getAssetGeometry(this.assets[this.environmentData.dressing]);
	        if (!geoset) return;
	        break;
	      }
	    }

	    for (var i = 0, r = 88343; i < this.environmentData.dressingAmount; i++, r++) {

	      var geo = geoset[Math.floor(this.random(33 + i) * geoset.length)];
	/*
	      // change vertex colors
	      var color = new THREE.Color(0xFFFFFF).multiplyScalar(1 - this.random(66 + i) * 0.3);

	      for (var f = 0, fl = geo.faces.length; f < fl; f++) {
	        var face = geo.faces[f];
	        for (var v = 0; v < 3; v++) {
	          p = geo.vertices[face[faceindex[v]]]; // get vertex position
	          var floorao =  p.y / 4 + 0.75;
	          face.vertexColors[v] = new THREE.Color(color.r * floorao, color.g * floorao, color.b * floorao);
	        }
	      }
	*/
	      // set random position, rotation and scale
	      var ds = this.environmentData.dressingScale;
	      var dv = new THREE.Vector3(this.environmentData.dressingVariance.x, this.environmentData.dressingVariance.y, this.environmentData.dressingVariance.z);
	      var distance;
	      var onPlayArea = this.random(r) < this.environmentData.dressingOnPlayArea;
	      if (onPlayArea) {
	        distance = this.random(r + 1) * 15;
	      }
	      else {
	        distance = 10 + Math.max(dv.x, dv.z) + 10 * this.random(r + 1) + this.random(r + 2) * this.STAGE_SIZE / 3;
	      }

	      var direction = this.random(r + 3) * Math.PI * 2;
	      var matrix = new THREE.Matrix4();
	      var scale = this.random(r + 4);
	      var uniformScale = this.environmentData.dressingUniformScale;

	      matrix.compose(
	        // position
	        new THREE.Vector3(
	          Math.cos(direction) * distance,
	          0,
	          Math.sin(direction) * distance
	          ),
	        // rotation
	        new THREE.Quaternion().setFromAxisAngle(
	          new THREE.Vector3(0, 1, 0),
	          (this.random(r + 5) - 0.5) * dv.length() * Math.PI * 2
	          ),
	        // scale
	        new THREE.Vector3(
	           ds + (uniformScale ? scale : this.random(r + 6)) * dv.x,
	           ds + (uniformScale ? scale : this.random(r + 7)) * dv.y,
	           ds + (uniformScale ? scale : this.random(r + 8)) * dv.z
	          )
	        );

	      // merge with mother geometry
	      geometry.merge(geo, matrix);
	    }

	    // convert geometry to buffergeometry
	    var bufgeo = new THREE.BufferGeometry();
	    bufgeo.fromGeometry(geometry);

	    // setup material
	    var material = new THREE.MeshLambertMaterial({
	      color: new THREE.Color(this.environmentData.dressingColor),
	      vertexColors: THREE.VertexColors
	    });

	    if (this.environmentData.flatShading) {
	      bufgeo.computeVertexNormals();
	    }

	    // create mesh
	    var mesh = new THREE.Mesh(bufgeo, material);
	    dressing.add(mesh);
	    // add to scene
	    this.dressing.setObject3D('mesh', dressing);
	  },

	  // initializes the BufferGeometry for the stars
	  createStars: function() {
	    var numStars = 2000;
	    var geometry = new THREE.BufferGeometry();
	    var positions = new Float32Array( numStars * 3 );
	    var radius = this.STAGE_SIZE - 1;
	    var v = new THREE.Vector3();
	    for (var i = 0; i < positions.length; i += 3) {
	      v.set(this.random(i + 23) - 0.5, this.random(i + 24), this.random(i + 25) - 0.5);
	      v.normalize();
	      v.multiplyScalar(radius);
	      positions[i  ] = v.x;
	      positions[i+1] = v.y;
	      positions[i+2] = v.z;
	    }
	    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
	    geometry.setDrawRange(0, 0); // don't draw any yet
	    var material = new THREE.PointsMaterial({size: 0.01, color: 0xCCCCCC, fog: false});
	    this.stars.setObject3D('mesh', new THREE.Points(geometry, material));
	  },

	  // Sets the number of stars visible. Calls createStars() to initialize if needed.
	  setStars: function (numStars) {
	    if (!this.stars){
	      this.stars = document.createElement('a-entity');
	      this.stars.id= 'stars';
	      this.createStars();
	      this.el.appendChild(this.stars);
	    }
	    numStars = Math.floor(Math.min(2000, Math.max(0, numStars)));
	    this.stars.getObject3D('mesh').geometry.setDrawRange(0, numStars);
	  }
	});

	// atmosphere sky shader. From https://github.com/aframevr/aframe/blob/master/examples/test/shaders/shaders/sky.js
	AFRAME.registerShader('skyshader', {
	  schema: {
	    luminance: { type: 'number', default: 1, min: 0, max: 2, is: 'uniform' },
	    turbidity: { type: 'number', default: 2, min: 0, max: 20, is: 'uniform' },
	    reileigh: { type: 'number', default: 1, min: 0, max: 4, is: 'uniform' },
	    mieCoefficient: { type: 'number', default: 0.005, min: 0, max: 0.1, is: 'uniform' },
	    mieDirectionalG: { type: 'number', default: 0.8, min: 0, max: 1, is: 'uniform' },
	    sunPosition: { type: 'vec3', default: {x: 0, y: 0, z: -1}, is: 'uniform' },
	    color: {type: 'color', default: '#fff'} //placeholder to remove warning
	  },

	  vertexShader: [
	    'varying vec3 vWorldPosition;',
	    'void main() {',
	    'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
	    'vWorldPosition = worldPosition.xyz;',
	    'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
	    '}'
	  ].join('\n'),

	  fragmentShader: [
	    'uniform sampler2D skySampler;',
	    'uniform vec3 sunPosition;',
	    'varying vec3 vWorldPosition;',

	    'vec3 cameraPos = vec3(0., 0., 0.);',

	    'uniform float luminance;',
	    'uniform float turbidity;',
	    'uniform float reileigh;',
	    'uniform float mieCoefficient;',
	    'uniform float mieDirectionalG;',

	    // constants for atmospheric scattering'
	    'const float e = 2.71828182845904523536028747135266249775724709369995957;',
	    'const float pi = 3.141592653589793238462643383279502884197169;',

	    // refractive index of air
	    'const float n = 1.0003;',
	    // number of molecules per unit volume for air at'
	    'const float N = 2.545E25;' ,
	    // 288.15K and 1013mb (sea level -45 celsius)
	    // depolatization factor for standard air
	    'const float pn = 0.035;',
	    // wavelength of used primaries, according to preetham
	    'const vec3 lambda = vec3(680E-9, 550E-9, 450E-9);',

	    // mie stuff
	    // K coefficient for the primaries
	    'const vec3 K = vec3(0.686, 0.678, 0.666);',
	    'const float v = 4.0;',

	    // optical length at zenith for molecules
	    'const float rayleighZenithLength = 8.4E3;',
	    'const float mieZenithLength = 1.25E3;',
	    'const vec3 up = vec3(0.0, 1.0, 0.0);',

	    'const float EE = 1000.0;',
	    'const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;',
	    // 66 arc seconds -> degrees, and the cosine of that

	    // earth shadow hack'
	    'const float cutoffAngle = pi/1.95;',
	    'const float steepness = 1.5;',

	    'vec3 totalRayleigh(vec3 lambda)',
	    '{',
	    'return (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn));',
	    '}',

	    // see http://blenderartists.org/forum/showthread.php?321110-Shaders-and-Skybox-madness
	    // A simplied version of the total Rayleigh scattering to works on browsers that use ANGLE
	    'vec3 simplifiedRayleigh()',
	    '{',
	    'return 0.0005 / vec3(94, 40, 18);',
	    '}',

	    'float rayleighPhase(float cosTheta)',
	    '{   ',
	    'return (3.0 / (16.0*pi)) * (1.0 + pow(cosTheta, 2.0));',
	    '}',

	    'vec3 totalMie(vec3 lambda, vec3 K, float T)',
	    '{',
	    'float c = (0.2 * T ) * 10E-18;',
	    'return 0.434 * c * pi * pow((2.0 * pi) / lambda, vec3(v - 2.0)) * K;',
	    '}',

	    'float hgPhase(float cosTheta, float g)',
	    '{',
	    'return (1.0 / (4.0*pi)) * ((1.0 - pow(g, 2.0)) / pow(1.0 - 2.0*g*cosTheta + pow(g, 2.0), 1.5));',
	    '}',

	    'float sunIntensity(float zenithAngleCos)',
	    '{',
	    'return EE * max(0.0, 1.0 - exp(-((cutoffAngle - acos(zenithAngleCos))/steepness)));',
	    '}',

	    '// Filmic ToneMapping http://filmicgames.com/archives/75',
	    'float A = 0.15;',
	    'float B = 0.50;',
	    'float C = 0.10;',
	    'float D = 0.20;',
	    'float E = 0.02;',
	    'float F = 0.30;',
	    'float W = 1000.0;',

	    'vec3 Uncharted2Tonemap(vec3 x)',
	    '{',
	    'return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;',
	    '}',

	    'void main() ',
	    '{',
	    'float sunfade = 1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);',

	    'float reileighCoefficient = reileigh - (1.0* (1.0-sunfade));',

	    'vec3 sunDirection = normalize(sunPosition);',

	    'float sunE = sunIntensity(dot(sunDirection, up));',

	    // extinction (absorbtion + out scattering)
	    // rayleigh coefficients

	    'vec3 betaR = simplifiedRayleigh() * reileighCoefficient;',

	    // mie coefficients
	    'vec3 betaM = totalMie(lambda, K, turbidity) * mieCoefficient;',

	    // optical length
	    // cutoff angle at 90 to avoid singularity in next formula.
	    'float zenithAngle = acos(max(0.0, dot(up, normalize(vWorldPosition - cameraPos))));',
	    'float sR = rayleighZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));',
	    'float sM = mieZenithLength / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));',

	    // combined extinction factor
	    'vec3 Fex = exp(-(betaR * sR + betaM * sM));',

	    // in scattering
	    'float cosTheta = dot(normalize(vWorldPosition - cameraPos), sunDirection);',

	    'float rPhase = rayleighPhase(cosTheta*0.5+0.5);',
	    'vec3 betaRTheta = betaR * rPhase;',

	    'float mPhase = hgPhase(cosTheta, mieDirectionalG);',
	    'vec3 betaMTheta = betaM * mPhase;',

	    'vec3 Lin = pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * (1.0 - Fex),vec3(1.5));',
	    'Lin *= mix(vec3(1.0),pow(sunE * ((betaRTheta + betaMTheta) / (betaR + betaM)) * Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up, sunDirection),5.0),0.0,1.0));',

	    //nightsky
	    'vec3 direction = normalize(vWorldPosition - cameraPos);',
	    'float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]',
	    'float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]',
	    'vec2 uv = vec2(phi, theta) / vec2(2.0*pi, pi) + vec2(0.5, 0.0);',
	    // vec3 L0 = texture2D(skySampler, uv).rgb+0.1 * Fex;
	    'vec3 L0 = vec3(0.1) * Fex;',

	    // composition + solar disc
	    'float sundisk = smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);',
	    'L0 += (sunE * 19000.0 * Fex)*sundisk;',

	    'vec3 whiteScale = 1.0/Uncharted2Tonemap(vec3(W));',

	    'vec3 texColor = (Lin+L0);   ',
	    'texColor *= 0.04 ;',
	    'texColor += vec3(0.0,0.001,0.0025)*0.3;',

	    'float g_fMaxLuminance = 1.0;',
	    'float fLumScaled = 0.1 / luminance;     ',
	    'float fLumCompressed = (fLumScaled * (1.0 + (fLumScaled / (g_fMaxLuminance * g_fMaxLuminance)))) / (1.0 + fLumScaled); ',

	    'float ExposureBias = fLumCompressed;',

	    'vec3 curr = Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);',
	    'vec3 color = curr*whiteScale;',

	    'vec3 retColor = pow(color,vec3(1.0/(1.2+(1.2*sunfade))));',

	    'gl_FragColor.rgb = retColor;',

	    'gl_FragColor.a = 1.0;',
	    '}'
	  ].join('\n')
	});


	// gradient sky shader

	AFRAME.registerShader('gradientshader', {
	  schema: {
	    topColor: {type: 'color', default: '1 0 0', is: 'uniform'},
	    bottomColor: {type: 'color', default: '0 0 1', is: 'uniform'}
	  },

	  vertexShader: [
	    'varying vec3 vWorldPosition;',
	    'void main() {',
	    ' vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
	    ' vWorldPosition = worldPosition.xyz;',
	    ' gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',
	    '}'
	  ].join('\n'),

	  fragmentShader: [
	    'uniform vec3 bottomColor;',
	    'uniform vec3 topColor;',
	    'uniform float offset;',
	    'varying vec3 vWorldPosition;',
	    'void main() {',
	    ' float h = normalize( vWorldPosition ).y;',
	    ' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), 0.8 ), 0.0 ) ), 1.0 );',
	    '}'
	  ].join('\n')
	});

	// perlin noise generator
	// from https://gist.github.com/banksean/304522

	var PerlinNoise = function(r) {
	  if (r == undefined) r = Math;
	  this.grad3 = [[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]];
	  this.p = [];
	  var i;
	  for (i=0; i<256; i++) {
	    this.p[i] = Math.floor(r.random(666)*256);
	  }
	  // To remove the need for index wrapping, double the permutation table length
	  this.perm = [];
	  for(i=0; i<512; i++) {
	    this.perm[i]=this.p[i & 255];
	  }
	};

	PerlinNoise.prototype.dot = function(g, x, y, z) {
	  return g[0]*x + g[1]*y + g[2]*z;
	};

	PerlinNoise.prototype.mix = function(a, b, t) {
	  return (1.0-t)*a + t*b;
	};

	PerlinNoise.prototype.fade = function(t) {
	  return t*t*t*(t*(t*6.0-15.0)+10.0);
	};

	// Classic Perlin noise, 3D version
	PerlinNoise.prototype.noise = function(x, y, z) {
	  // Find unit grid cell containing point
	  var X = Math.floor(x);
	  var Y = Math.floor(y);
	  var Z = Math.floor(z);

	  // Get relative xyz coordinates of point within that cell
	  x = x - X;
	  y = y - Y;
	  z = z - Z;

	  // Wrap the integer cells at 255 (smaller integer period can be introduced here)
	  X = X & 255;
	  Y = Y & 255;
	  Z = Z & 255;

	  // Calculate a set of eight hashed gradient indices
	  var gi000 = this.perm[X+this.perm[Y+this.perm[Z]]] % 12;
	  var gi001 = this.perm[X+this.perm[Y+this.perm[Z+1]]] % 12;
	  var gi010 = this.perm[X+this.perm[Y+1+this.perm[Z]]] % 12;
	  var gi011 = this.perm[X+this.perm[Y+1+this.perm[Z+1]]] % 12;
	  var gi100 = this.perm[X+1+this.perm[Y+this.perm[Z]]] % 12;
	  var gi101 = this.perm[X+1+this.perm[Y+this.perm[Z+1]]] % 12;
	  var gi110 = this.perm[X+1+this.perm[Y+1+this.perm[Z]]] % 12;
	  var gi111 = this.perm[X+1+this.perm[Y+1+this.perm[Z+1]]] % 12;

	  // The gradients of each corner are now:
	  // g000 = grad3[gi000];
	  // g001 = grad3[gi001];
	  // g010 = grad3[gi010];
	  // g011 = grad3[gi011];
	  // g100 = grad3[gi100];
	  // g101 = grad3[gi101];
	  // g110 = grad3[gi110];
	  // g111 = grad3[gi111];
	  // Calculate noise contributions from each of the eight corners
	  var n000= this.dot(this.grad3[gi000], x, y, z);
	  var n100= this.dot(this.grad3[gi100], x-1, y, z);
	  var n010= this.dot(this.grad3[gi010], x, y-1, z);
	  var n110= this.dot(this.grad3[gi110], x-1, y-1, z);
	  var n001= this.dot(this.grad3[gi001], x, y, z-1);
	  var n101= this.dot(this.grad3[gi101], x-1, y, z-1);
	  var n011= this.dot(this.grad3[gi011], x, y-1, z-1);
	  var n111= this.dot(this.grad3[gi111], x-1, y-1, z-1);
	  // Compute the fade curve value for each of x, y, z
	  var u = this.fade(x);
	  var v = this.fade(y);
	  var w = this.fade(z);
	   // Interpolate along x the contributions from each of the corners
	  var nx00 = this.mix(n000, n100, u);
	  var nx01 = this.mix(n001, n101, u);
	  var nx10 = this.mix(n010, n110, u);
	  var nx11 = this.mix(n011, n111, u);
	  // Interpolate the four results along y
	  var nxy0 = this.mix(nx00, nx10, v);
	  var nxy1 = this.mix(nx01, nx11, v);
	  // Interpolate the two last results along z
	  var nxyz = this.mix(nxy0, nxy1, w);

	  return nxyz;
	};


/***/ })
/******/ ]);