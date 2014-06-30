ig.module(
	'game.trace'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTrace = ig.Entity.extend({
    
		size: {x: 6, y: 6},
		zIndex: 100,
		gravityFactor: 0,
		angle: 2,
		speed: 5,
		radius: 4,
		color: 'white',
		lineColor: 'red',
	
		type: ig.Entity.TYPE.NONE, // Player friendly group
		checkAgainst: ig.Entity.TYPE.NONE,
		collides: ig.Entity.COLLIDES.NEVER,
			
		init: function( x, y, settings ) {
			this.parent( x, y, settings );

			this.originalPosX = this.pos.x;
			this.originalPosY = this.pos.y;
			this.lifeTimer = new ig.Timer(3);
			// Add the animations
			ig.game.tweenCameraFocus(this.pos.x, this.pos.y);
			if(ig.game.snirk.lastTrace){
				this.parentTrace = ig.game.snirk.lastTrace;
				ig.game.snirk.lastTrace.childTrace = this;
				ig.game.traceAmount = 0;
				if(this.checkNewTrace() ){
					if(ig.game.traceAmount > 2){
						ig.game.screenshake(15, 0.5);
						ig.game.checkIfPickupsInside();
					}
				}
			}
		},

		colorTraces: function () {
			this.color = 'blue';
			this.lineColor = 'green';
			if(this.childTrace){
				this.childTrace.colorTraces();
			}
		},

		checkNewTrace: function () {
			ig.game.traceAmount++;
			if(!this.parentTrace || this.parentTrace._killed){
				return false;
			}
			if(ig.game.lineIntersect(ig.game.snirk.pos.x, ig.game.snirk.pos.y, ig.game.snirk.newTrace.pos.x, ig.game.snirk.newTrace.pos.y, this.pos.x, this.pos.y, this.parentTrace.pos.x, this.parentTrace.pos.y)){
				if(ig.game.traceAmount > 2){
					this.colorTraces();
				}
				return true;
			} else {
				if(this.parentTrace && !this.parentTrace._killed){
					return this.parentTrace.checkNewTrace();
				} else {
					return false;
				}
			}
			
		},

		draw: function(){
			this.parent();
			this.drawCircle(this.pos.x + this.size.x/2 - ig.game.screen.x, this.pos.y + this.size.y/2 - ig.game.screen.y, this.color, -this.lifeTimer.delta());
			if(this.parentTrace && !this.parentTrace._killed){
				this.drawLine(this.pos.x + this.size.x/2 - ig.game.screen.x, this.pos.y + this.size.y/2 - ig.game.screen.y, this.parentTrace.pos.x + this.parentTrace.size.x/2 - ig.game.screen.x, this.parentTrace.pos.y + this.parentTrace.size.y/2 - ig.game.screen.y, this.lineColor);
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
