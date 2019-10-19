export const generateClassName = (classNames: Array<string>): string => {
    return classNames.map( className => className.substring(0, 1).toUpperCase() + className.substring(1)).join('');
};