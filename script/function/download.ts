const request = require('superagent');
/**
 * download an file as string
 * @param url the address to download file
 */
export const download = async  (url: string): Promise<string> => {
    const response = await request.get(url);
    return response.body.toString()
};
