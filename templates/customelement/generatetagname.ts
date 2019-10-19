export const generateTagName = (tags: Array<string>): string => {
    return tags.map(v => v.toLowerCase()).join('-');
};