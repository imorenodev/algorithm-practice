var Maze = (function() {
  var startCoord = {
    row: null,
    col: null
  };
  var endCoord = {
    row: null,
    col: null
  };
  
	var maze = 
	["******E*",
	 "*       *",
	 "* **** *",
	 "* *S*  *",
	 "* * ** *",
	 "* * *  *",
	 "*       *",
	 "********"];
   function printMaze() {
     for (var line in maze) {
       console.log(maze[line]);
     }
   }
   
   function findCoords(key) {
     for (var el in maze) {
       if (maze[el].indexOf(key) > -1) {
         if (key === "S") {
           startCoord.row = el;
           startCoord.col = maze[el].indexOf("S");
         } else if (key === "E") {
           endCoord.row = el;
           endCoord.col = maze[el].indexOf("E");
         }
       }
     }
   }
   
   function printCoords() {
     if (startCoord.row) {
       console.log(startCoord.row + " " + startCoord.col);
     }
     if (endCoord.row) {
       console.log(endCoord.row + " " + endCoord.col);
     }
   }
   
   return {
     printMaze: printMaze,
     printCoords: printCoords,
     findCoords: findCoords
   };
})();
Maze.findCoords("E");
Maze.findCoords("S");
Maze.printCoords();