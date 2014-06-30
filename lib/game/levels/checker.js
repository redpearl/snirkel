ig.module( 'game.levels.checker' )
.requires( 'impact.image' )
.defines(function(){
LevelChecker=/*JSON[*/{"entities":[],"layer":[{"name":"bg","width":60,"height":80,"linkWithCollision":false,"visible":true,"tilesetName":"media/checker.png","repeat":false,"preRender":false,"distance":"1","tilesize":16,"foreground":false,"data":[[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0],[1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0],[5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0],[0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,1,2,3,4,1,2,0,0,1,2,3,4,0,0],[0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,5,6,7,8,5,6,0,0,5,6,7,8,0,0]]}]}/*]JSON*/;
LevelCheckerResources=[new ig.Image('media/checker.png')];
});