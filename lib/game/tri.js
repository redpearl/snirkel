ig.module(
	'game.tri'
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityTri = ig.Entity.extend({
    
		size: {x: 10, y: 10},
		zIndex: 96,
		gravityFactor: 0,
		angle: 50,
		speed: 5,
		sidelength: 30,
		color: 'green',
		rotation: 0,
		movelength: 500,

		action: 'scanning',

		// Scanning
		clockwise: true,
		scanning: false,
		scans: 0,
	
		type: ig.Entity.TYPE.A, // Player friendly group
		checkAgainst: ig.Entity.TYPE.BOTH,
		collides: ig.Entity.COLLIDES.NEVER,
			
		init: function( x, y, settings ) {
			this.parent( x, y, settings );

			this.originalPosX = this.pos.x;
			this.originalPosY = this.pos.y;
			this.rotation = Math.random()*360;
			this.initialRotation = this.rotation;
			// Add the animations
		},

		scanForTargets: function(){
			if(this.clockwise && !this.scanning){
				this.scanClockwise();
			}
		},

		scanCounterClockwise: function(){
			this.action = 'scanning';
			TweenMax.to(this, 2, {rotation: this.rotation - 60, onComplete: this.scanComplete.bind(this)});
		},

		scanClockwise: function(){
			this.scanning = true;
			TweenMax.to(this, 2, {rotation: this.rotation + 60, onComplete: this.scanComplete.bind(this)});
		},

		scanComplete: function(){
			this.scans++;
			if(this.clockwise && this.scans < 4){
				this.scanCounterClockwise();
				this.clockwise = false;
			} else if(this.scans < 4){
				this.scanClockwise();
				this.clockwise = true;
			} else {
				this.action = 'moving';
			}
		},

		capture: function(){
			this.color = 'white';
		},

		draw: function(){
			//this.parent();
			ig.game.drawTriangle(this.pos.x + this.size.x/2 - ig.game.screen.x, this.pos.y + this.size.y/2 - ig.game.screen.y, this.sidelength, this.rotation, this.color, this.radius);
		},
    
		update: function() {
			// move!
			//this.parent();
			if(this.action === 'scanning'){
				this.scanForTargets();
			} else if(this.action === 'moving'){
				vectorX = Math.sin(this.rotation);
    			vectorY = Math.cos(this.rotation);
    			TweenMax.to(this.pos, 3, {x: this.pos.x + vectorX*this.movelength});
    			TweenMax.to(this.pos, 3, {y: this.pos.y + vectorY*this.movelength});
    			this.action = '';
			}
		}
	});
});
