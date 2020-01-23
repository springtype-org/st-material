import {IExtendedMaterialIcon} from "./iextendedmaterialicon";

export interface IIconMap {
    [iconName: string]: { [version: string]: { [family: string]: IExtendedMaterialIcon } }
}
