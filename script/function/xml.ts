const xml2js = require('xml2js');
export const xmlToJson = xml2js.parseStringPromise;
export const jsonToXml = (json: any) => {
    return new xml2js.Builder({
        headless: true
    }).buildObject(json)
};