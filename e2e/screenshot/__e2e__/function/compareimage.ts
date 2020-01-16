import {IImage} from "../interface/iimage";
import {ICompareImageResult} from "../interface/icompareimageresult";
import {readImage} from "./readimage";

/**
 * compare two images, mark wrong pixels red
 * @param expectedPath the path to expected image
 * @param actualPath the path to actual result
 */
export const compareImage = (expectedPath: string, actualPath: string): ICompareImageResult => {
    return getDiffImage(readImage(expectedPath), readImage(actualPath));
};

/**
 * compare two images, mark wrong pixels red
 * @param expected the expected image
 * @param actual the actual result
 */
export const getDiffImage = (expected: IImage, actual: IImage): ICompareImageResult => {
    let equal = true;
    const result = {...expected};
    for (let y = 0; y < expected.height; y++) {
        for (let x = 0; x < expected.width; x++) {
            const idx = (expected.width * y + x) << 2;
            //RGBA red green blue alpha
            if (expected.data[idx] !== actual.data[idx]
                //green
                || expected.data[idx + 1] !== actual.data[idx + 1]
                //blue
                || expected.data[idx + 2] !== actual.data[idx + 2]
                // opacity
                || expected.data[idx + 3] !== actual.data[idx + 3]) {
                equal = false;
                result.data[idx] = 255;
                result.data[idx + 1] = 0;
                result.data[idx + 2] = 0;
                result.data[idx + 3] = 255;
            }
        }
    }
    return {
        equal: equal,
        image: result
    };
};