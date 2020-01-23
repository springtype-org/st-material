import {IIconMap} from "../interface/IIconMap";
import * as fs from "fs";
import {mkdirs} from "./mkdirs";

const OUTPUT_ICON_DIRECTORY = 'src/component/mwc-icon';
const MATERIAL_ICON_JSON = `${OUTPUT_ICON_DIRECTORY}/material-icons.json`;
const INDEX_TS = `${OUTPUT_ICON_DIRECTORY}/index.ts`;

const SPLIT_REGEX = /[-_]/;
export const getMWcIconTypeClass = (iconMap: IIconMap) => {
    const icons = [];
    const fileNames = {};
    for (const iconName of Object.keys(iconMap)) {
        const versions = iconMap[iconName];
        for (const version of Object.keys(versions)) {
            const fileName = getFileName(iconName);
            fileNames[`./v${version}/${fileName}`] = true;
            const functionLines = ['import { tsx } from "springtype/web/vdom";'];
            const families = versions[version];
            for (const family of Object.keys(families)) {
                const icon = families[family];

                const functionName = getFunctionName(iconName, family);
                functionLines.push('');
                functionLines.push(`/*`);
                functionLines.push(` * Material Icon: ${icon.name} ${icon.family}`);
                functionLines.push(` * version: V${icon.version}`);
                functionLines.push(` * categories: ${icon.categories.join(', ')}`);
                functionLines.push(` * tags: ${icon.tags.join(', ')}`);
                functionLines.push(` * download link: ${icon.link}`);
                functionLines.push(` */`);
                functionLines.push(`export const ${functionName} = () => {`);
                ('return ' + icon.content).split('\n').forEach(svgLines =>
                    functionLines.push(`    ${svgLines}`)
                );
                functionLines.push('};');
                icon['fileName'] = fileName;
                icon['functionName'] = functionName;
                delete icon['content'];
                icons.push(icon);
            }
            const versionDirectory = `${OUTPUT_ICON_DIRECTORY}/v${version.toLowerCase()}/`;
            mkdirs(versionDirectory);
            fs.writeFileSync(`${versionDirectory}${fileName}.tsx`, functionLines.join('\n'));
        }
    }

    fs.writeFileSync(MATERIAL_ICON_JSON, JSON.stringify(icons, null, 2));
    fs.writeFileSync(INDEX_TS, Object.keys(fileNames).map(v => `export * from "${v}";`).join('\n'));
};

const getFileName = (name: string) => {
    return `mwc-icon-${name.split(SPLIT_REGEX).join('-')}`;
};

const getFunctionName = (name: string, family: string) => {
    const capitalizedName = name.split(SPLIT_REGEX).map(v => capitalize(v)).join('');
    const capitalizedFamily = family.split(SPLIT_REGEX).map(v => capitalize(v)).join('');
    return 'mwcIcon' + capitalizedName + capitalizedFamily;
};

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
};