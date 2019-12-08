import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";

export interface IColumnPerDeviceType {
    desktop: number;
    tablet: number;
    phone: number;
}

export type MwcLayoutGridCellAlign = "top" | "middle" | "bottom";

export interface IMwcLayoutGridCellAttrs {
    columns?: number;
    align?: MwcLayoutGridCellAlign;
    order?: number;
    columnsPerDeviceType?: IColumnPerDeviceType;
}

@component
export class MwcLayoutGridCell extends st.component<IMwcLayoutGridCellAttrs> implements ILifecycle {
    @attr
    columns: number;

    @attr
    align: MwcLayoutGridCellAlign;

    @attr
    order: number;

    @attr
    columnsPerDeviceType: IColumnPerDeviceType;

    class = ["mdc-layout-grid__cell"];

    style = {
        display: "block",
    };

    onAfterElCreate() {

        if (typeof this.columns !== "undefined") {
            this.el.classList.add(`mdc-layout-grid__cell--span-${this.columns}`);
        }

        if (typeof this.columnsPerDeviceType === "object") {
            for (let deviceType in this.columnsPerDeviceType) {
                this.el.classList.add(`mdc-layout-grid__cell--span-${this.columnsPerDeviceType[deviceType]}-${deviceType}`);
            }
        }

        if (typeof this.order !== "undefined") {
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