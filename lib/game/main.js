ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.snirk',
	'game.pickup',
	'game.tri',
	'impact.debug.debug',
	'game.levels.checker'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),
	
	screenshake: function (force, duration) {
		TweenMax.killTweensOf(this.screen);
		this.camShakePower = force;
		this.cameraShakeTimer.set(duration);
		
		this.cameraPosX = this.screen.x;
		this.cameraPosY = this.screen.y;
	},
	
	init: function() {
		//this.loadLevel(LevelChecker);
		ig.game.spawnPickups();
		ig.game.spawnTris();
		ig.game.spawnEntity(EntitySnirk, 100, 100);
		ig.input.bind( ig.KEY.MOUSE1, 'leftClick' );
		
		this.initVariables();
		// Initialize your game here; bind keys etc.
	},

	checkIfPickupsInside: function () {
		var traces = ig.game.getEntitiesByType(EntityTrace);
		var vertX = [];
		var vertY = [];
		var amount = 0;
		traces.forEach(function(trace){
			if(trace.color === 'blue'){
				amount++;
				vertX.push(trace.pos.x);
				vertY.push(trace.pos.y);
			}
		})

		var pickups = ig.game.getEntitiesByType(EntityPickup);

		pickups.forEach(function(pickup){
			if(ig.game.isPointInPolygon(amount, vertX, vertY, pickup.pos.x, pickup.pos.y)){
				pickup.capture();
			}
		})
	},

	checkIfTrisInside: function () {
		var traces = ig.game.getEntitiesByType(EntityTrace);
		var vertX = [];
		var vertY = [];
		var amount = 0;
		traces.forEach(function(trace){
			if(trace.color === 'blue'){
				amount++;
				vertX.push(trace.pos.x);
				vertY.push(trace.pos.y);
			}
		})

		var pickups = ig.game.getEntitiesByType(EntityTri);

		pickups.forEach(function(tri){
			if(ig.game.isPointInPolygon(amount, vertX, vertY, tri.pos.x, tri.pos.y)){
				tri.capture();
			}
		})
	},

	isPointInPolygon: function( nvert, vertx, verty, testx, testy) {
		var i, j = 0;
		c = false;
		for (i = 0, j = nvert-1; i < nvert; j = i++) {
		if ( ((verty[i]>testy) != (verty[j]>testy)) && (testx < (vertx[j]-vertx[i]) * (testy-verty[i]) / (verty[j]-verty[i]) + vertx[i]) )
			c = !c;
		}
		return c;
	},

	initVariables: function(){
		this.cameraShakeTimer = new ig.Timer(0);
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},

	spawnTris: function(){
		for (i = 0; i >= 0; i--) {
			ig.game.spawnEntity(EntityTri, Math.random()*200, Math.random()* 200);	
		};
	},

	spawnPickups: function(){
		for (i = 26; i >= 0; i--) {
			ig.game.spawnEntity(EntityPickup, Math.random()*500, Math.random()* 500);	
		};
		
	},

	lineIntersect: function(x1,y1,x2,y2, x3,y3,x4,y4) {
	    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
	    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
	    if (isNaN(x)||isNaN(y)) {
	        return false;
	    } else {
	        if (x1>=x2) {
	            if (!(x2<=x&&x<=x1)) {return false;}
	        } else {
	            if (!(x1<=x&&x<=x2)) {return false;}
	        }
	        if (y1>=y2) {
	            if (!(y2<=y&&y<=y1)) {return false;}
	        } else {
	            if (!(y1<=y&&y<=y2)) {return false;}
	        }
	        if (x3>=x4) {
	            if (!(x4<=x&&x<=x3)) {return false;}
	        } else {
	            if (!(x3<=x&&x<=x4)) {return false;}
	        }
	        if (y3>=y4) {
	            if (!(y4<=y&&y<=y3)) {return false;}
	        } else {
	            if (!(y3<=y&&y<=y4)) {return false;}
	        }
	    }
	    return true;
	},

	tweenCameraFocus: function(x, y){
		//if(this.cameraShakeTimer.delta()>0){ // disable if shaking
			//TweenMax.killTweensOf(this);
			//TweenMax.killAll(false, true, false);
			if(this.cameraShakeTimer.delta()>0){
				TweenMax.to(this.screen, 0.5, {x: x - 160});
				TweenMax.to(this.screen, 0.5, {y: y - 220});
			} else {
				this.cameraPosX = x - 160;
				this.cameraPosY = y - 220;
				
			}
			//this.cameraTimer.reset();
		//}
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		
		// Add your own drawing code here
		var x = ig.system.width/2,
			y = ig.system.height/2;
			if(this.cameraShakeTimer.delta()<0){
				this.screen.x = this.cameraPosX + this.camShakePower*Math.random();
				this.screen.y = this.cameraPosY + this.camShakePower*Math.random();
			}
		
		//this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	},

	// Draw shapes
	drawTriangle: function(x, y, sidelength, rotation, color, size){
		var context = ig.system.context;
		
		context.save();
		context.translate(x, y);
		context.rotate(rotation*Math.PI/180);
		context.beginPath();
		context.moveTo(0, sidelength/2);
		context.lineTo(sidelength/2, -sidelength);
		context.lineTo(-sidelength/2, - sidelength);
		context.fillStyle = color;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#003300';
		context.stroke();
		context.restore();
	},

	drawCircle: function(x, y, color, size){
		var context = ig.system.context;
		context.beginPath();
		context.arc(x, y, size, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = '#003300';
		context.stroke();
	},

	drawLine: function(x, y, x2, y2, color){
		var context = ig.system.context;
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(x2,y2);
		context.strokeStyle = color;
		context.stroke();
	},

	rotate_point: function(pointX, pointY, originX, originY, angle) {
	    angle = angle * Math.PI / 180.0;
	    return {
	        x: (Math.cos(angle) * (pointX-originX) - Math.sin(angle) * (pointY-originY) + originX),
	        y: (Math.sin(angle) * (pointX-originX) + Math.cos(angle) * (pointY-originY) + originY)
	    }
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 480, 1 );

});
