import {mkdirs} from "./mkdirs";
import {download} from "./download";
import {jsonToXml, xmlToJson} from "./xml";
import {manipulatexml} from "./manipulatexml";
import {IMaterialIcon} from "../interface/imaterialicon";
import {IExtendedMaterialIcon} from "../interface/iextendedmaterialicon";

const OUTPUT_ASSET_DIRECTORY = 'assets';
export const FAMILY_PLACEHOLDER = '{family}';
export const getSvg = async (icon: IMaterialIcon): Promise<IExtendedMaterialIcon> => {

    const path = `${OUTPUT_ASSET_DIRECTORY}/${icon.family}`;
    // do call this often
        mkdirs(path);

    const svgContent = await download(icon.link);
    const jsonXml = await xmlToJson(svgContent);
    const manipulatedJsonXml = manipulatexml(jsonXml);
    const iconContent = jsonToXml(manipulatedJsonXml.xmlJson);

    return {
        ...icon,
        content: iconContent
    }
};