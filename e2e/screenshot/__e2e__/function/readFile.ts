import * as fs from 'fs';
import * as path from 'path';

export const readFileAsString = (filePath: string): string | undefined => {
    const resolvedPath = path.resolve(process.cwd(), filePath);
    if (fs.existsSync(resolvedPath)) {
        return fs.readFileSync(resolvedPath).toString();
    }
};