const randomColor = require('randomcolor');

const paper = require('paper')

paper.install(window);

// calc rotation pos based on angle
function rotX(angle) {
  return Math.cos(angle)
}
function rotY(angle) {
  return Math.sin(angle)
}

window.onload = function() {
  paper.setup('myCanvas');
  
  const path = new Path.Line()

  path.add(new Point(400, 300))
  
  const AMT = 40
  
  const arrPoints = []
  
  for (var i = 0; i < AMT; i++) {
    const p = new Point(
      100 + Math.random() * 600,
      100 + Math.random() * 400,      
    )
    arrPoints.push(p)
    path.add(p)
  }
  
  path.strokeColor = 'black'
  
  // console.log(path.segments);
  // for (var i = 2; i < path.segments.length; i++) {
  //   console.log(i);
  //   console.log(path.segments[i].point)
  // }
  
  const SPEED = 2
  const RANGE = 100
  const OFFSET = 1

  view.onFrame = function(event) {
    // On each frame, rotate the path by 3 degrees:
    // path.rotate(3);
    for (var i = 2; i < path.segments.length - 1; i++) {
      const pIndex = i - 2
      path.segments[i].point.x = arrPoints[pIndex].x + rotX(i * OFFSET + event.time * SPEED) * RANGE
      path.segments[i].point.y = arrPoints[pIndex].y + rotY(i * OFFSET + event.time * SPEED) * RANGE
    }
  }
}
