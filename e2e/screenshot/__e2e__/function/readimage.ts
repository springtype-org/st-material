import {PNG} from 'pngjs/browser';
import * as path from 'path'
import * as fs from 'fs'
import {IImage} from "../interface/iimage";

const read = PNG.sync.read;
export const readImage = (imagePath: string): IImage => {
    const absoluteImagePath = path.resolve(process.cwd(), imagePath);
    const fileData = fs.readFileSync(absoluteImagePath);
    return read(fileData);
};