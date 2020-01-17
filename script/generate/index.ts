import chalk from "chalk";
import {deletePathOrFile} from "st-rm-rf";
import {getSvgContent} from "./icon/get-svg-content";
import {getMaterialIcons, IMaterialIcon} from "./icon/getMaterialIcons";
import {arrayToChunks} from "../function/arraytochunks";
import * as loading from 'loading-cli';
import {download} from "../function/download";
import {jsonToXml, xmlToJson} from "../function/xml";
import {manipulateXML} from "./icon/mainpulatejsonsvg";

const OUTPUT_DIRECTORY = 'src/component/mwc-icon/';

(async () => {
    console.log(chalk.cyan('start generation of icon files'));
    await deletePathOrFile(OUTPUT_DIRECTORY, false);
    const materialIcons = getMaterialIcons();
    const totalAmount = materialIcons.length;
    let currentAmount = 0;
    const load = loading(getDownloadMessageOfSvg(currentAmount, totalAmount)).start();
    const iconDownloadChunks: Array<Array<IMaterialIcon>> = arrayToChunks(materialIcons, 40);
    const downloadedIcons: Array<IMaterialIcon> = [];
    for (const iconChunk of iconDownloadChunks) {
        const promises: Array<Promise<IMaterialIcon>> = [];
        for (const icon of iconChunk) {
            promises.push(download(icon.link).then(async (svgContent) => {
                    const jsonXml = await xmlToJson(svgContent);
                    const manipulatedJsonXml = manipulateXML(jsonXml);
                    return {...icon, content: jsonToXml(manipulatedJsonXml.xmlJson)};
                })
            );
        }
        const downloaded: Array<IMaterialIcon> = await Promise.all(promises);
        console.log(downloaded[0].content);
        downloadedIcons.concat(downloaded);
        currentAmount += iconChunk.length;
        load.text = getDownloadMessageOfSvg(currentAmount, totalAmount);
    }
    load.stop();
    console.log(chalk.cyan('registered custom elements'));
})();

const getDownloadMessageOfSvg = (amount: number, totalAmount: number) => {
    return `SVG ${amount} of ${totalAmount}`
};