const randomColor = require('randomcolor');

const paper = require('paper')

paper.install(window);
window.onload = function() {

  paper.setup('myCanvas');
  
  const AMT = 700
  
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
  const DEGREE = Math.PI * (1 - 1 / 3)
  const SPIRAL_SIZE = 0.04
  for (var i = 0; i < AMT; i++) {
    const p = new Point(
      400 + rotX(i * DEGREE + 0.2) * (i * SPIRAL_SIZE),
      300 + rotY(i * DEGREE + 0.2) * (i * SPIRAL_SIZE),
    )
    arrPoints.push(p)
  }
  
  const path = new Path(arrPoints)
  // path.closed = true
  path.strokeColor = 'black'
  
  const SPEED = 1.2
  const RANGE = 200
  const OFFSET = 0.008

  view.onFrame = function(event) {
    // oscillating range
    // const oscillation = (Math.sin(event.time * 2) + 1) / 2 // 0~1 sin wave oscillation
    // const r = RANGE * (oscillation * 0.2 + 0.8)
    const r = RANGE
    // On each frame, rotate the path by 3 degrees:
    for (var i = 0; i < path.segments.length; i++) {
      path.segments[i].point.x = arrPoints[i].x + rotX(i * OFFSET + event.time * SPEED) * r
      path.segments[i].point.y = arrPoints[i].y + rotY(i * OFFSET + event.time * SPEED) * r
    }
  }
}

// calc rotation pos based on angle
function rotX(angle) { return Math.cos(angle) }
function rotY(angle) { return Math.sin(angle) }
