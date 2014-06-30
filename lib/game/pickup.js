ig.module(
	'game.pickup'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityPickup = ig.Entity.extend({
    
		size: {x: 20, y: 20},
		zIndex: 100,
		gravityFactor: 0,
		angle: 2,
		speed: 5,
		radius: 8,
	
		type: ig.Entity.TYPE.A, // Player friendly group
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.NEVER,
			
		init: function( x, y, settings ) {
			this.parent( x, y, settings );

			this.originalPosX = this.pos.x;
			this.originalPosY = this.pos.y;
		},

		draw: function(){
			this.parent();
			this.drawCircle(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, 'blue', 8);
			//this.drawCircle(this.originPointX, this.originPointY, 'white', 3);
		},

		drawCircle: function(x, y, color, size){
			var context = ig.system.context;
			context.beginPath();
			context.arc(x, y, size, 0, 2 * Math.PI, false);
			context.fillStyle = color;
			context.fill();

		},

		check: function(other){
			if(other.player){
				this.kill();
			}
		},
    
		update: function() {
			// move!
			this.parent();
			//this.radius = this.radius*0.99;
			
		}
	});
});
