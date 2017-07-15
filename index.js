const randomColor = require('randomcolor');

const paper = require('paper')

paper.install(window);
window.onload = function() {

  paper.setup('myCanvas');
  
  const AMT = 5000
  
  const arrPoints = []
  
  // total random connection
  // for (var i = 0; i < AMT; i++) {
  //   const p = new Point(
  //     100 + Math.random() * 600,
  //     100 + Math.random() * 400,      
  //   )
  //   arrPoints.push(p)
  // }
  
  // spiral
  for (var i = 0; i < AMT; i++) {
    const p = new Point(
      400 + rotX(i * 0.5) * (i * 0.3),
      300 + rotY(i * 0.5) * (i * 0.3),
    )
    arrPoints.push(p)
  }
  
  const path = new Path(arrPoints)
  // path.closed = true
  path.strokeColor = 'black'
  
  const SPEED = 2
  const RANGE = 10
  const OFFSET = 1
  

  view.onFrame = function(event) {
    // On each frame, rotate the path by 3 degrees:
    for (var i = 0; i < path.segments.length; i++) {
      path.segments[i].point.x = arrPoints[i].x + rotX(i * OFFSET + event.time * SPEED) * RANGE
      path.segments[i].point.y = arrPoints[i].y + rotY(i * OFFSET + event.time * SPEED) * RANGE
    }
  }
}

// calc rotation pos based on angle
function rotX(angle) { return Math.cos(angle) }
function rotY(angle) { return Math.sin(angle) }
