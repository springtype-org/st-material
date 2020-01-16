import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";

export interface IColumnPerDeviceType {
    desktop: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    tablet: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    phone: 1 | 2 | 3 | 4;
}

export enum Size {
    full=1, half=2, third=3,quarter=4
}

export interface ISizePerDeviceType {
    desktop: Size.full | Size.half | Size.third | Size.quarter;
    tablet: Size.full | Size.half | Size.quarter;
    phone: Size.full | Size.half | Size.quarter;
}

export type MwcLayoutGridCellAlign = "top" | "middle" | "bottom";

export interface IMwcLayoutGridCellAttrs {
    columns?: number;
    align?: MwcLayoutGridCellAlign;
    order?: number;
    columnsPerDeviceType?: IColumnPerDeviceType;
    sizePerDeviceType?: ISizePerDeviceType;
}

@component
export class MwcLayoutGridCell extends st.component<IMwcLayoutGridCellAttrs> implements ILifecycle {
    @attr
    columns: number | false = false;

    @attr
    align: MwcLayoutGridCellAlign | false = false;

    @attr
    order: number | false = false;

    @attr
    columnsPerDeviceType: IColumnPerDeviceType | false = false;

    @attr
    sizePerDeviceType: ISizePerDeviceType | false = false;

    class = ["mdc-layout-grid__cell"];

    style = {
        display: "block",
    };

    onAfterElCreate() {

        if (this.columns) {
            this.el.classList.add(`mdc-layout-grid__cell--span-${this.columns}`);
        }

        if (this.columnsPerDeviceType) {
                this.el.classList.add(`mdc-layout-grid__cell--span-${this.columnsPerDeviceType.phone}-phone`);
                this.el.classList.add(`mdc-layout-grid__cell--span-${this.columnsPerDeviceType.tablet}-tablet`);
                this.el.classList.add(`mdc-layout-grid__cell--span-${this.columnsPerDeviceType.desktop}-desktop`);
        } else if(this.sizePerDeviceType) {
                this.el.classList.add(`mdc-layout-grid__cell--span-${4/this.sizePerDeviceType.phone.valueOf()}-phone`);
                this.el.classList.add(`mdc-layout-grid__cell--span-${8/this.sizePerDeviceType.tablet.valueOf()}-tablet`);
                this.el.classList.add(`mdc-layout-grid__cell--span-${12/this.sizePerDeviceType.desktop.valueOf()}-desktop`);
        }

        if (this.order) {
            this.el.classList.add(`mdc-layout-grid__cell--order-${this.order}`);
        }

        if (this.align) {
            this.el.classList.add(`mdc-layout-grid__cell--align-${this.align}`);
        }
    }

    render() {
        return this.renderChildren();
    }
}