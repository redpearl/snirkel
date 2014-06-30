ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.snirk',
	'game.pickup',
	'game.levels.checker'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	
	init: function() {
		//this.loadLevel(LevelChecker);
		ig.game.spawnPickups();
		ig.game.spawnEntity(EntitySnirk, 100, 100);
		ig.input.bind( ig.KEY.MOUSE1, 'leftClick' );
		// Initialize your game here; bind keys etc.
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},

	spawnPickups: function(){
		for (i = 26; i >= 0; i--) {
			ig.game.spawnEntity(EntityPickup, Math.random()*500, Math.random()* 500);	
		};
		
	},

	tweenCameraFocus: function(x, y){
		//if(this.cameraShakeTimer.delta()>0){ // disable if shaking
			//TweenMax.killTweensOf(this);
			//TweenMax.killAll(false, true, false);
			TweenMax.to(this.screen, 0.5, {x: x - 160});
			TweenMax.to(this.screen, 0.5, {y: y - 220});
			//this.cameraTimer.reset();
		//}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	},

	rotate_point: function(pointX, pointY, originX, originY, angle) {
	    angle = angle * Math.PI / 180.0;
	    return {
	        x: Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX,
	        y: Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY
	    }
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 480, 1 );

});
