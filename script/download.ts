import chalk from "chalk";
import * as loading from 'loading-cli';
import {getmaterialicons} from "./function/getmaterialicons";
import {arrayToChunks} from "./function/arraytochunks";
import {IMaterialIcon} from "./interface/imaterialicon";
import {getMWcIconTypeClass} from "./function/getmwcicontypeclass";
import {getSvg} from "./function/getsvg";
import {IIconMap} from "./interface/iiconmap";
import {IExtendedMaterialIcon} from "./interface/iextendedmaterialicon";

(async () => {
    console.log(chalk.cyan('Downloading material icons'));
    const materialIcons: Array<IMaterialIcon> = await getmaterialicons();
    const totalAmount = materialIcons.length;

    console.log(chalk.cyan('Found ' + totalAmount + ' icons'));
    let currentAmount = 0;
    const load = loading(getMessageOfSvg(currentAmount, totalAmount)).start();

    const iconDownloadChunks: Array<Array<IMaterialIcon>> = arrayToChunks(materialIcons, 200);
    const iconMap: IIconMap = {};

    for (const iconChunk of iconDownloadChunks) {
        const promises: Array<Promise<IExtendedMaterialIcon>> = iconChunk.map(icon => getSvg(icon));
        const exIconChunks: Array<IExtendedMaterialIcon> = await Promise.all(promises);
        exIconChunks.forEach(icon => {
                if (!iconMap[icon.name]) {
                    iconMap[icon.name] = {}
                }
                if (!iconMap[icon.name][icon.version]) {
                    iconMap[icon.name][icon.version] = {}
                }
                iconMap[icon.name][icon.version][icon.family] = icon;
            }
        );
        currentAmount += iconChunk.length;
        load.text = getMessageOfSvg(currentAmount, totalAmount);
    }
    load.stop();
    console.log(chalk.cyan('downloading done'));

    getMWcIconTypeClass(iconMap);
})();

const getMessageOfSvg = (amount: number, totalAmount: number) => {
    return `SVG ${amount} of ${totalAmount}`
};