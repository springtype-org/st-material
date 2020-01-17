import {download} from "../../function/download";

export const getSvgContent = async (typedLinks: object) => {
    const downloadedSvg = {};
    for (const icon of Object.keys(typedLinks)) {
        const themes = typedLinks[icon];
        const newIcon = {};
        for (const iconType of Object.keys(themes)) {
            const data = themes[iconType];
            const svgContent = await download(data.link);
            newIcon[iconType] = {...data, content: svgContent};
        }
        downloadedSvg[icon] = newIcon;
    }
    console.log('downloadedSvg', downloadedSvg);
    return downloadedSvg;
};