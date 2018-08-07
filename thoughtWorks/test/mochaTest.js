const assert = require('assert')
const Maze = require('../maze')
const inputs = [
  [
    '3 3',
    '0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1'
  ],
  [
    '-3 -3',
    '0,1 0,2;'
  ],
  [
    '12 1 1 1 1 1 ',
    '0,1 0,2;'
  ],
  [
    '3 3',
    '0asdasdasdsadwefq qasd asd ;'
  ],
  [
    '3 3',
    '1,1 4,1;'
  ],
]

const normalOutput = `[W] [W] [W] [W] [W] [W] [W]
[W] [R] [W] [R] [R] [R] [W]
[W] [R] [W] [R] [W] [R] [W]
[W] [R] [R] [R] [R] [R] [W]
[W] [W] [W] [R] [W] [R] [W]
[W] [R] [R] [R] [W] [R] [W]
[W] [W] [W] [W] [W] [W] [W]`
const errors = ["Incorrect command format", "Maze format error.", "Invalid number format string"]
describe('maze', function () {
  describe('正常输入', function () {
    it('正常返回迷宫', function () {
      const myMaze = new Maze(inputs[0])
      assert.equal(normalOutput, myMaze.render())
    })
  })

  describe('负数', function () {
    it('返回错误', function () {
      const myMaze = new Maze(inputs[1])
      assert.equal(errors[2], myMaze.render())
    })
  })
  describe('字符串A输入错误', function () {
    it('返回错误', function () {
      const myMaze = new Maze(inputs[2])
      assert.equal(errors[2], myMaze.render())
    })
  })
  describe('字符串B输入错误', function () {
    it('返回错误', function () {
      const myMaze = new Maze(inputs[3])
      assert.equal(errors[0], myMaze.render())
    })
  })
  describe('迷宫格式错误', function () {
    it('返回错误', function () {
      const myMaze = new Maze(inputs[4])
      assert.equal(errors[1], myMaze.render())
    })
  })
})
