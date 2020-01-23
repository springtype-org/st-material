import {IMwcIconType} from "../interface/imwcicontype";

export const getMwcIconTagsClass = (types: Array<IMwcIconType>): string => {
    const lines: Array<string> = ['export const MwcIconTags:  {[key: string]: Array<string>} = {'];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const tags = type.tags.map(v => `'${v}'`).join(', ');
        lines.push(`    '${type.name}': [${tags}],`)
    }
    return lines.join('\n') + '}';
};