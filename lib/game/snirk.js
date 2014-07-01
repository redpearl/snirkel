ig.module(
	'game.snirk'
)
.requires(
	'impact.entity',
	'game.trace'
)
.defines(function(){

EntitySnirk = ig.Entity.extend({
    
		size: {x: 10, y: 10},
		zIndex: 96,
		gravityFactor: 0,
		angle: 50,
		speed: 5,
		player: true,
		radius: 10,
	
		type: ig.Entity.TYPE.A, // Player friendly group
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.NEVER,
			
		init: function( x, y, settings ) {
			this.parent( x, y, settings );

			this.originalPosX = this.pos.x;
			this.originalPosY = this.pos.y;

			this.originPointX = this.pos.x + 130;
			this.originPointY = this.pos.y;

			this.traceTimer = new ig.Timer(0.25);
			ig.game.snirk = this;
			// Add the animations
		},

		draw: function(){
			this.parent();
			ig.game.drawCircle(this.pos.x + this.size.x/2 - ig.game.screen.x, this.pos.y + this.size.y/2 - ig.game.screen.y, 'green', this.radius);
		},
    
		update: function() {
			// move!
			this.parent();
			var ob = ig.game.rotate_point(this.pos.x, this.pos.y, this.originPointX, this.originPointY, this.angle*ig.system.tick);
			this.pos.x = ob.x;
			this.pos.y = ob.y;

			if(ig.input.pressed('leftClick')){
				// make circle small
				var xlength = this.pos.x - this.originPointX;
				var ylength = this.pos.y - this.originPointY;
				this.originPointX = this.pos.x - xlength/3.5;
				this.originPointY = this.pos.y - ylength/3.5;
				this.angle = 200;
			} else if(ig.input.released('leftClick')){
				// make circle big
				var xlength = this.pos.x - this.originPointX;
				var ylength = this.pos.y - this.originPointY;
				this.originPointX = this.pos.x - xlength*3.5;
				this.originPointY = this.pos.y - ylength*3.5;
				this.angle = 50;
			}
			
			if(this.traceTimer.delta()>0){
				this.traceTimer.reset();
				this.newTrace = ig.game.spawnEntity(EntityTrace, this.pos.x, this.pos.y);
				this.lastTrace = this.newTrace;
			}
		}
	});
});
