const mustache = require('mustache');
export const renderTemplate = (template: string, token: any): string => {
    return mustache.render(template, token)
};
