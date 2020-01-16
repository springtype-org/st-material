export interface ICompareResult {
    equal: boolean;
    path: {
        result: string;
        expected: string;
        actual: string;
    }
}