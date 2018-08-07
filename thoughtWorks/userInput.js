const readline = require('readline')
const Maze = require('./maze')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lineLength = 2
var data = []

rl.on('line', function (line) {
    data.push(line)
    if (lineLength == data.length) {
        main()
        rl.close()
    }
})
function main() {
    const myMaze = new Maze(data)
    console.log(myMaze.render())
}