const fs = require("fs");
const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

let data = fs.readFileSync("adventOfCodeProblem1/adventOfCode.txt", { encoding: "utf8" });

data = data.split("\n");

let total = 0;

data.forEach((element) => {
    const numbers = [];
    let wordStartCursor = 0;
    let cursor = 1;

    while (cursor <= element.length) {
        const stringSliceToInspect = element.slice(wordStartCursor, cursor);

        if (!isNaN(Number(stringSliceToInspect[stringSliceToInspect.length - 1]))) {
            numbers.push(stringSliceToInspect[stringSliceToInspect.length - 1]);
            wordStartCursor = cursor;
        } else {
            let indexToPush = -1;

            Object.keys(nums).forEach((num, index) => {
                if (stringSliceToInspect.includes(num)) {
                    indexToPush = index;
                }
            });

            if (indexToPush !== -1) {
                numbers.push(String(Object.values(nums)[indexToPush]));
                wordStartCursor = cursor - 1;
            }
        }

        cursor++;
    }

    const [first = 0, last = 0] = [numbers[0], numbers[numbers.length - 1]];
    total += Number(first + last);
});

console.log(total);