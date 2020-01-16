import {PNG} from 'pngjs/browser';
import * as path from 'path'
import * as fs from 'fs'
import {IImage} from "../interface/iimage";

const write = PNG.sync.write;
export const writeImage = (imagePath: string, image: IImage): void => {
    const absoluteImagePath = path.resolve(process.cwd(), imagePath);
    fs.writeFileSync(absoluteImagePath,  write(image));
};