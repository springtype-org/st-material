import {ICONS} from "./icon";

export interface IMaterialIcon {
    link: string;
    theme: 'filled' | 'outlined' | 'rounded' | 'two-tone' | 'sharp';
    name: string;
    category: string;
    content?:  string;
}

export const getMaterialIcons = (): Array<IMaterialIcon> => {
    const icons: Array<IMaterialIcon> = [];
    for (let category of Object.keys(ICONS)) {
        for (let iconName of ICONS[category]) {
            icons.push({
                link: `http://fonts.gstatic.com/s/i/materialicons/${iconName}/v1/24px.svg`,
                theme: 'filled',
                name: iconName,
                category: category
            }, {
                link: `http://fonts.gstatic.com/s/i/materialiconsoutlined/${iconName}/v1/24px.svg`,
                theme: 'outlined',
                name: iconName,
                category: category
            }, {
                link: `http://fonts.gstatic.com/s/i/materialiconsround/${iconName}/v1/24px.svg`,
                theme: 'rounded',
                name: iconName,
                category: category
            }, {
                link: `http://fonts.gstatic.com/s/i/materialiconstwotone/${iconName}/v1/24px.svg`,
                theme: 'two-tone',
                name: iconName,
                category: category
            }, {
                link: `http://fonts.gstatic.com/s/i/materialiconssharp/${iconName}/v1/24px.svg`,
                theme: 'sharp',
                name: iconName,
                category: category
            });
        }
    }
    return icons;
};