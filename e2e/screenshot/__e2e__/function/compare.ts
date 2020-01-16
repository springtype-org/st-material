import {compareImage} from "./compareimage";
import {writeImage} from "./writeimage";
import {mkdir} from 'st-mkdir'
import {ICompareResult} from "../interface/Icompareresult";
import *as path from 'path';
import {readFileAsString} from "./readFile";
import {writeFile} from "./writeFile";

export const compare = async (t: any, selector: string, savePath: string, options: object): Promise<ICompareResult> => {
    await t.takeElementScreenshot(selector, savePath, options);
    const expectedPath = `assets/expected/${savePath}`;
    const actualPath = `screenshots/${savePath}`;
    const resultPath = `result/${savePath}`;
    const result = compareImage(expectedPath, actualPath);
    const componentPath = resultPath.substr(0, resultPath.lastIndexOf('/'));
    const jsonFile = path.resolve(componentPath, 'result.json');
    mkdir(componentPath, {silent: true});
    const compareResult = {
        equal: result.equal,
        path: {
            result: resultPath,
            expected: expectedPath,
            actual: actualPath
        }
    };

    //write json
    const config: Array<ICompareResult> = JSON.parse(readFileAsString(jsonFile) || "[]");
    config.push(compareResult);

    writeFile(jsonFile, JSON.stringify(config, null, 2));

    //write image result
    writeImage(resultPath, result.image);
    return compareResult;
};