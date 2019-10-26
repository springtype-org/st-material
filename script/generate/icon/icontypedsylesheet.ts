import { ICON_CLASS_PRIMARY_COLOR, ICON_CLASS_SECONDARY_COLOR } from "./mainpulatejsonsvg";
import { ATTRIBUTE_NAME_PRIMARY_COLOR, ATTRIBUTE_NAME_SECONDARY_COLOR, ATTRIBUTE_NAME_SIZE } from "./transformsvgtotsx";

export const generateIconTss = (usePrimaryColor: boolean, useSecondaryColor: boolean): Array<string> => {
    let style =
        '`\n'+
        '    svg {\n' +
        '        width: ${this.'+ATTRIBUTE_NAME_SIZE+' || theme.materialIconSize || \'24px\'};\n' +
        '        height: ${this.'+ATTRIBUTE_NAME_SIZE+' || theme.materialIconSize || \'24px\'};\n' +
        '    }';
    if (usePrimaryColor) {
        style +=
            '\n' +
            '    \'.' + ICON_CLASS_PRIMARY_COLOR + '\' {\n' +
            '        fill: ${this['+ATTRIBUTE_NAME_PRIMARY_COLOR+'] || theme.materialIconPrimaryColor || \'#b3b3b3\'};\n' +
            '    }\n';
    }
    if (useSecondaryColor) {
        style +=
            '\n' +
            '    \'.' + ICON_CLASS_SECONDARY_COLOR + '\' {\n' +
            '        fill: ${this['+ATTRIBUTE_NAME_SECONDARY_COLOR+'] || theme.materialIcoSecondaryColor || \'#000000\'};\n' +
            '    }\n';
    }
    return (style+'`').split('\n');
};
