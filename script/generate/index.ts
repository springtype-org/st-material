import chalk from "chalk";
import {THEMES, URL_REPLACE_TOKEN} from "./icon/theme";
import {mkdirs} from "../function/mkdirs";
import {removePathOrFile} from "st-rm-rf";
import {ICONS} from "./icon/icon";
import {arrayToChunks} from "../function/arraytochunks";
import {CUSTOM_ELEMENT_ICON_REGISTRY, transformSvgToTsx} from "./icon/transformsvgtotsx";
import {ILink} from "./interface/ilink";

const OUTPUT_DIRECTORY = 'src/component/mwc-icon/';

(async () => {
    console.log(chalk.cyan('start generation of icon files'));
    await removePathOrFile(OUTPUT_DIRECTORY, false);

    for (const theme of Object.keys(THEMES)) {
        const directory = OUTPUT_DIRECTORY + theme;
        const url = THEMES[theme];
        console.log('- creating directory ' + directory);
        mkdirs(directory);

        for (let category of Object.keys(ICONS)) {
            const types: Array<string> = ICONS[category];
            const links: Array<ILink> = types.map(type => {
                return {type: type, url: url.replace(URL_REPLACE_TOKEN, type)}
            });
            const linksChunked: Array<Array<ILink>> = arrayToChunks(links, 100);
            for (let linkChunk of linksChunked) {
                await transformSvgToTsx(linkChunk, category, theme, directory);
            }
        }
    }

    console.log(chalk.cyan('registered custom elements'));
    console.log(CUSTOM_ELEMENT_ICON_REGISTRY);
})();
