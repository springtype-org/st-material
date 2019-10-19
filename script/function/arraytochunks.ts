/**
 * create of an on dimensioned array an 2 dimensioned one
 * (create buckets of arrays)
 *
 * [1,2,3,4,5,6,7,8,9] size = 2
 * --- =>
 * [[1,2],[3,4],[5,6],[7,8],[9]]
 *
 * @param array the array that will be split in multiple arrays
 * @param chunkSize the amount of values in a chunk
 */
export const arrayToChunks = (array: Array<any>, chunkSize = 40): Array<any[]> => {
    const result: Array<any[]> = [];
    for (let index = 0; index < array.length; index = index + chunkSize) {
        const chunk: Array<any> = [];
        for (let innerIndex = index; innerIndex < array.length && innerIndex < (index + chunkSize); innerIndex++) {
            chunk.push(array[innerIndex]);
        }
        if (chunk.length > 0) {
            result.push(chunk);
        }
    }
    return result;
};