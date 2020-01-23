import * as https from 'https'

/**
 * download an file as string
 * @param url the address to download file
 */
export const download = async (url: string): Promise<string> => {
    return await new Promise<string>((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};
