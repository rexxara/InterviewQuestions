module.exports = class Maze {
    constructor(data) {
        this.error = false
        if (data.length < 2) {
            return this.error = "Incorrect command format"
        }
        const matchStrA = data[0].trim()
        let matchStrB = data[1].trim()
        matchStrB = matchStrB.charAt(matchStrB.length - 1) === ";" ? matchStrB.slice(0, -1) : matchStrB
        const ruleA = /^[1-9]\d*\s[1-9]\d*$/
        const ruleB = /^([0-9]+,[0-9]+\s[0-9]+,[0-9]+;)*([0-9]+,[0-9]+\s[0-9]+,[0-9]+;?)$/
        if (!ruleA.test(matchStrA)) {
            return this.error = "Invalid number format string"
        }
        const colAndRow = matchStrA.split(" ").map((v, k) => parseInt(v))
        if (colAndRow.length !== 2) {
            return this.error = "Incorrect command format"
        }
        this.mazeCol = colAndRow[0] * 2 + 1
        this.mazeRow = colAndRow[1] * 2 + 1
        if (matchStrB.length === 0) {
            this.connections = []
            return 
        }
        if (!ruleB.test(matchStrB)) {
            return this.error = "Incorrect command format"
        }
        const connections = matchStrB.split(";").map((v, k) => {
            const subArr = v.split(" ")
            const coordinateA = subArr[0].split(",").map((v, k) => parseInt(v) * 2 + 1)
            const coordinateB = subArr[1].split(",").map((v, k) => parseInt(v) * 2 + 1)
            if (this.outOfRange(coordinateA) || this.outOfRange(coordinateB) || this.notNeighbor(coordinateA, coordinateB)) {
                return this.error = "Maze format error."
            }
            const roadCoordinate = `${(coordinateA[0] + coordinateB[0]) / 2},${(coordinateA[1] + coordinateB[1]) / 2}`
            return roadCoordinate
        })

        this.connections = connections
    }
    arrGenerator() {
        const { connections, mazeCol, mazeRow } = this
        let array = new Array(mazeCol)
        for (let i = 0; i < mazeCol; i++) {
            array[i] = new Array
            for (let j = 0; j < mazeRow; j++) {
                if (this.isInteger((i - 1) / 2) && this.isInteger((j - 1) / 2) || (connections.includes(`${i},${j}`))) {
                    array[i][j] = '[R]'
                } else {
                    array[i][j] = '[W]'
                }
            }
        }
        return array
    }
    isInteger(obj) {
        return typeof obj === 'number' && obj % 1 === 0
    }
    outOfRange(coordinate) {
        return (coordinate[0] >= 0 && coordinate[0] <= this.mazeCol) && (coordinate[1] >= 0 && coordinate[1] <= this.mazeRow) ? false : true
    }
    notNeighbor(coordinateA, coordinateB) {
        let res = true
        if ((coordinateA[0] === coordinateB[0] && Math.abs(coordinateA[1] - coordinateB[1]) === 2)
            || (coordinateA[1] === coordinateB[1] && Math.abs(coordinateA[0] - coordinateB[0]) === 2)) {
            res = false
        }
        return res
    }
    render() {
        if (this.error) {
            return this.error
        } else {
            return this.arrGenerator().map((v, k) => {
                return v.join(" ")
            }).join("\n")
        }
    }
}