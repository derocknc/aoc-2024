import fs from 'fs';
import path from 'path';

export function getInput(dir) {
    return fs.readFileSync(path.resolve(dir, './input.txt'), {
        encoding: 'utf-8',
    });
}
