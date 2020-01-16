import * as fs from 'fs';
import * as path from 'path';

export const writeFile = (filePath: string, fileContent: string) => {
    fs.writeFileSync(path.resolve(process.cwd(), filePath), fileContent);
};