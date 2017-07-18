const randomColor = require('randomcolor');

const paper = require('paper')

paper.install(window);
window.onload = function() {
  paper.setup('myCanvas');
  const path = new Path()
  // path.closed = true
  path.strokeColor = 'black'
  
  const arrPoints = []
  
  const tool = new paper.Tool();
  tool.onMouseDown = function(event) {
      // Create a new path every time the mouse is clicked
      path.add(event.point)
      arrPoints.push(event.point)
  }
  tool.onMouseDrag = function(event) {
      // Add a point to the path every time the mouse is dragged
      path.add(event.point)
      arrPoints.push(event.point)
  }
  tool.minDistance = 2;
  
  const SPEED = 5
  const RANGE = 5
  const OFFSET = 3
  view.onFrame = function(event) {
    for (var i = 0; i < path.segments.length; i++) {
      path.segments[i].point.x = arrPoints[i].x + rotX(i * OFFSET + event.time * SPEED) * RANGE
      path.segments[i].point.y = arrPoints[i].y + rotY(i * OFFSET + event.time * SPEED) * RANGE
    }

  }
}

// calc rotation pos based on angle
function rotX(angle) { return Math.cos(angle) }
function rotY(angle) { return Math.sin(angle) }
