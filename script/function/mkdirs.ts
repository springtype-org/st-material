import * as fs from 'fs';

const UNIQUE_PATHS = {};

/**
 * Create iterative all directories
 * @param dir the directory path
 */
export const mkdirs = (dir: string): string => {
    const dirs = dir.split('/');
    if (UNIQUE_PATHS[dir] !== true) {
        let index = 0;
        let buildDir = dirs[0];
        do {
            if (!fs.existsSync(buildDir)) {
                fs.mkdirSync(buildDir);
            }
            buildDir += '/' + dirs[++index];
        } while (index < dirs.length);
        UNIQUE_PATHS[dir] = true;
    }
    return dir;
};
