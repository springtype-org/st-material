import {download} from "./download";
import {IMaterialIcon} from "../interface/imaterialicon";

interface IMaterialIconResponse {
    host: string;
    asset_url_pattern: string;
    families: Array<string>;
    icons: Array<{
        "name": string;
        "version": number;
        "unsupported_families": Array<string>;
        "categories": Array<string>
        "tags": Array<string>
        "sizes_px": Array<any>
    }>
}

const FAMILY_MAP = {
    "Material Icons": 'filled',
    "Material Icons Outlined": 'outlined',
    "Material Icons Round": 'rounded',
    "Material Icons Sharp": 'sharped',
    "Material Icons Two Tone": 'two-tone'
};

export const getmaterialicons = async (): Promise<Array<IMaterialIcon>> => {
    const iconJson = await download('https://fonts.google.com/metadata/icons');
    const materialResponse: IMaterialIconResponse = JSON.parse(iconJson.substring(iconJson.indexOf("\n") + 1));
    const icons: Array<IMaterialIcon> = [];
    for (const iconResponse of materialResponse.icons) {
        const icon = {
            name: iconResponse.name,
            version: iconResponse.version,
            tags: iconResponse.tags,
            categories: iconResponse.categories
        };
        materialResponse.families
            .filter(family => iconResponse.unsupported_families.indexOf(family) === -1)
            .map(family => {
                return {original: family, mapped: family.split(' ').map(v => v.toLowerCase()).join('')}
            })
            .forEach(family => {
                    const urlPattern = materialResponse.asset_url_pattern
                        .replace('{family}', family.mapped)
                        .replace('{icon}', icon.name)
                        .replace('{version}', '' + icon.version)
                        .replace('{asset}', '24px.svg');

                    icons.push({
                        ...icon,
                        family: FAMILY_MAP[family.original],
                        link: `https://${materialResponse.host}${urlPattern}`
                    })
                }
            );
    }
    return icons;
};