import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

export interface IColumnPerDeviceType {
  desktop: number;
  tablet: number;
  phone: number;
}

@component
export class MwcLayoutGridCell extends st.component implements ILifecycle {
  @attr
  columns: number;

  @attr
  align: "top" | "middle" | "bottom";

  @attr
  order: number;

  @attr
  columnsPerDeviceType: IColumnPerDeviceType;

  onAfterElCreate() {
    const classes = [...this.elClass];

    if (typeof this.columns !== "undefined") {
      classes.push(`mdc-layout-grid__cell--span-${this.columns}`);
    }

    if (typeof this.columnsPerDeviceType === "object") {
      for (let deviceType in this.columnsPerDeviceType) {
        classes.push(`mdc-layout-grid__cell--span-${this.columnsPerDeviceType[deviceType]}-${deviceType}`);
      }
    }

    if (typeof this.order !== "undefined") {
      classes.push(`mdc-layout-grid__cell--order-${this.order}`);
    }

    if (this.align) {
      classes.push(`mdc-layout-grid__cell--align-${this.align}`);
    }
    this.elClass = [...classes, "mdc-layout-grid__cell"];

    this.elStyle = {
      ...this.elStyle,
      display: "block",
    };
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcLayoutGridCell: Partial<MwcLayoutGridCell>;
    }
  }
}
