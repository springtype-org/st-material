import {renderTemplate} from "../rendertemplate";
const fs = require('fs');
const path = require('path');

const template =  fs.readFileSync(path.resolve(__dirname,'customelement.mustache'), 'utf8');

export interface ICustomElementToken {
    className: string;
    tagName: string;
    attributes: Array<string>;
    tssLines: Array<string>;
    tsxLines: Array<string>;
}

const addReturn = (array: Array<string> | undefined): Array<string> | undefined => {
    if (!array) {
        return;
    }
    array[0] = 'return ' + array[0];
    return array;
};
export const render = (token: ICustomElementToken): string => {
    const _token = {
        ...token,
        tsxLines: addReturn(token.tsxLines),
        tss: !!token.tssLines,
        attr: !!token.attributes,
        tssLines: addReturn(token.tssLines)
    };
    return renderTemplate(template, _token);
};
