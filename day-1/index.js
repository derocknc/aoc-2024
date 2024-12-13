import { getInput } from "../utils/index.js";
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = getInput(__dirname);

const pairs = data
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/).map(Number));

const cleanedPairs = pairs.map((pair) => [pair[0], pair[1]]);

const left = [];
const right = [];

cleanedPairs.forEach((pair) => {
    left.push(pair[0]); // 14832
    right.push(pair[1]); // 78161
});

const sort = (arr) => arr.sort((a, b) => a - b);

const sortedLeft = sort(left);
const sortedRight = sort(right);

const summedDiff = sortedLeft.reduce((acc, curr, i) => {
    const diff = Math.abs(curr - sortedRight[i]);
    return acc + diff;
}, 0);

let total = 0;

sortedLeft.forEach((id) => {
    const matches = sortedRight.filter((currentId) => currentId === id);
    if (matches.length) {
        total += (id * matches.length);
    }
});

console.log('total: ', total);
