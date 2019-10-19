import {download} from "../../function/download";
import {manipulateXML} from "./mainpulatejsonsvg";
import {generateIconTss} from "./iconTypedSyleSheet";
import {ILink} from "../interface/ilink";
import {jsonToXml, xmlToJson} from "../../function/xml";
import {generateTagName} from "../../../templates/customelement/generatetagname";
import {generateClassName} from "../../../templates/customelement/generateclassname";
import {render} from "../../../templates/customelement/customelement.tpl";

const fs = require('fs');


export const CUSTOM_ELEMENT_ICON_REGISTRY: {
    tagName: string;
    className: string;
    usePrimaryColor: boolean;
    useSecondaryColor: boolean;
    category: string;
    type: string;
    theme: string;
}[] = [];
export const ATTRIBUTE_NAME_SIZE = 'size';
export const ATTRIBUTE_NAME_PRIMARY_COLOR = '\'primary-color\'';
export const ATTRIBUTE_NAME_SECONDARY_COLOR = '\'secondary-color\'';

const getIconAttributes = (usePrimaryColor: boolean, useSecondaryColor: boolean): Array<string> => {
    const result = [ATTRIBUTE_NAME_SIZE + '!: string;'];
    if (usePrimaryColor) {
        result.push(`${ATTRIBUTE_NAME_PRIMARY_COLOR}!: string;`)
    }
    if (useSecondaryColor) {
        result.push(`${ATTRIBUTE_NAME_SECONDARY_COLOR}!: string;`)
    }
    return result;
};
export const transformSvgToTsx = async (linksChunk: Array<ILink>, category: string, theme: string, directory: string): Promise<void> => {
    const rawSvgs = await Promise.all(linksChunk.map(chunk => download(chunk.url)));
    const svgJsons = (await Promise.all(rawSvgs.map(raw => xmlToJson(raw))))
        .map(svg => manipulateXML(svg));

    return svgJsons.map(data => {
        return {...data, tsxLines: jsonToXml(data.xmlJson).split('\n')}
    })
        .forEach((data, index) => {
            const type = linksChunk[index].type;

            const tagName = generateTagName(['mwc', 'icon', theme, type]);
            const className = generateClassName(['mwc', 'icon', theme, type]);
            const tsx = render({
                tagName: tagName,
                className: className,
                tsxLines: data.tsxLines,
                attributes: getIconAttributes(data.usePrimaryColor, data.useSecondaryColor),
                tssLines: generateIconTss(data.usePrimaryColor, data.useSecondaryColor)
            });
            CUSTOM_ELEMENT_ICON_REGISTRY.push({
                tagName: tagName,
                className: className,
                usePrimaryColor: data.usePrimaryColor,
                useSecondaryColor: data.useSecondaryColor,
                category: category,
                type: type,
                theme: theme
            });
            fs.writeFileSync(`${directory}/${tagName}.tsx`, tsx);
        });
};