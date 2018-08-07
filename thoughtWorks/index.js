const Maze = require('./maze')
const testData = [
    '3 3',
    '0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1'
]
const myMaze = new Maze(testData)
console.log(myMaze.render())
