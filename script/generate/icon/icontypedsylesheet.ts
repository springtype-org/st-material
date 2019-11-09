import {ICON_CLASS_PRIMARY_COLOR, ICON_CLASS_SECONDARY_COLOR} from "./mainpulatejsonsvg";
import {ATTRIBUTE_NAME_PRIMARY_COLOR, ATTRIBUTE_NAME_SECONDARY_COLOR, ATTRIBUTE_NAME_SIZE} from "./transformsvgtotsx";

export const generateIconTss = (tagName: string, usePrimaryColor: boolean, useSecondaryColor: boolean): Array<string> => {
    let style =
        'css`\n' +
        '   ' + tagName + '> svg {\n' +
        '        width: ${theme.materialIconSize || this.' + ATTRIBUTE_NAME_SIZE + '};\n' +
        '        height: ${theme.materialIconSize || this.' + ATTRIBUTE_NAME_SIZE + '};\n' +
        '    }';
    if (usePrimaryColor) {
        style +=
            '\n' +
            '    ' + tagName + ' > .' + ICON_CLASS_PRIMARY_COLOR + ' {\n' +
            '        fill: ${theme.materialIconPrimaryColor || this[' + ATTRIBUTE_NAME_PRIMARY_COLOR + ']};\n' +
            '    }';
    }
    if (useSecondaryColor) {
        style +=
            '\n' +
            '    ' + tagName + ' > .' + ICON_CLASS_SECONDARY_COLOR + ' {\n' +
            '        fill: ${theme.materialIcoSecondaryColor || this[' + ATTRIBUTE_NAME_SECONDARY_COLOR + ']};\n' +
            '    }';
    }
    return (style + '`').split('\n');
};
