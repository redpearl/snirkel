ig.module(
	'game.trace'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTrace = ig.Entity.extend({
    
		size: {x: 20, y: 20},
		zIndex: 100,
		gravityFactor: 0,
		angle: 2,
		speed: 5,
		radius: 4,
	
		type: ig.Entity.TYPE.NONE, // Player friendly group
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.NEVER,
			
		init: function( x, y, settings ) {
			this.parent( x, y, settings );

			this.originalPosX = this.pos.x;
			this.originalPosY = this.pos.y;
			this.lifeTimer = new ig.Timer(4);
			// Add the animations
			ig.game.tweenCameraFocus(this.pos.x, this.pos.y);
			if(ig.game.snirk.lastTrace){
				this.parentTrace = ig.game.snirk.lastTrace;
			}
		},

		draw: function(){
			this.parent();
			this.drawCircle(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, 'white', -this.lifeTimer.delta());
			if(this.parentTrace && !this.parentTrace._killed){
				this.drawLine(this.pos.x - ig.game.screen.x, this.pos.y - ig.game.screen.y, this.parentTrace.pos.x - ig.game.screen.x, this.parentTrace.pos.y - ig.game.screen.y, 'red');
			}
			//this.drawCircle(this.originPointX, this.originPointY, 'white', 3);
		},

		drawCircle: function(x, y, color, size){
			var context = ig.system.context;
			context.beginPath();
			context.arc(x, y, size, 0, 2 * Math.PI, false);
			context.fillStyle = color;
			context.fill();

		},

		drawLine: function(x, y, x2, y2, color){
			var context = ig.system.context;
			context.beginPath();
			context.moveTo(x,y);
			context.lineTo(x2,y2);
			context.strokeStyle = color;
			context.stroke();
		},
    
		update: function() {
			// move!
			//this.parent();
			//this.radius = this.radius*0.99;
			if(this.lifeTimer.delta()>0){
				this.kill();
			}
		}
	});
});
