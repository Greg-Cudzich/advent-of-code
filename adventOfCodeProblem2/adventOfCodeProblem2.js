const fs = require("fs");

let data = fs.readFileSync("adventOfCodeProblem2/problem2Input.txt", { encoding: "utf8" });

data = data.split("\n");

var sum = 0;
var formattedInnerData = {};
var formattedData = {}
for (index in data) {
    var currentGame = data[index];
    var firstSplit = currentGame.split(":");
    var test = firstSplit[1].split(";");
    var previousIndex = -1;
    for (index2 in test) {
        var currentGames = test[index2].split(",");
        for (index3 in currentGames) {
            var colorPatterns = currentGames[index3];
            var keyActualToUse = colorPatterns.split(" ").pop()
            var valueActualToUse = colorPatterns.trim().substring(0, 2).trim()
            if (previousIndex != index) {
                formattedInnerData = {
                    [keyActualToUse]: []
                }
            }
            if (formattedInnerData[keyActualToUse] && formattedInnerData[keyActualToUse].length > 0) {
                formattedInnerData[keyActualToUse].push(valueActualToUse);
            } else {
                formattedInnerData[keyActualToUse] = [valueActualToUse]
            }
            previousIndex = index
        }
    }
    formattedData[firstSplit[0].replace(/\D/g, '')] = formattedInnerData
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

var sum = 0;
for (index in formattedData) {
    var validRed = true
    var validGreen = true
    var validBlue = true
    var maxRed = 0;
    var maxGreen = 0;
    var maxBlue = 0;
    var maxOverall;
    var actualGameCheck = formattedData[index]
    for (const [key, value] of Object.entries(actualGameCheck)) {

        if (key == "red") {
            maxRed = value.max()
            //Part 1
            // if (value.some(el => el > 12)) {
            //     validRed = false
            // }

        }
        if (key == "green") {
            maxGreen = value.max()
            //Part 1
            // if (value.some(el => el > 13)) {
            //     validGreen = false
            // }
        }
        if (key == "blue") {
            maxBlue = value.max()
            //Part 1
            // if (value.some(el => el > 14)) {
            //     validBlue = false
            // }
        }
    }

    var maxOverall = maxRed * maxGreen * maxBlue
    sum += maxOverall;
    //Part 1
    // if (validRed == true && validBlue == true && validGreen == true) {
    //     sum += parseInt(index);
    // }
}
console.log("HERE SUM", sum)