export interface IImage{
    width: number;
    height: number
    depth: number;
    interlance: boolean;
    palette: boolean;
    color: boolean;
    alpha: boolean;
    bpp: number;
    colorType: number;
    data: Buffer;
    gamma: number;
}