import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

export interface IColumnPerDeviceType {
  desktop: number;
  tablet: number;
  phone: number;
}

@component()
export class MwcLayoutGridCell extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  columns: number;

  @attr(AttrType.DOM_INTRANSPARENT)
  align: "top" | "middle" | "bottom";

  @attr(AttrType.DOM_INTRANSPARENT)
  order: number;

  @attr(AttrType.DOM_INTRANSPARENT)
  columnsPerDeviceType: IColumnPerDeviceType;

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];
    
    const classes = ["mdc-layout-grid__cell", ...this.class];

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

    // top-level 
    this.el.setAttribute('class', classes.join(' '));
    this.el.style.display = 'block';

    return this.virtualSlotChildren.default || <fragment />;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcLayoutGridCell: Partial<MwcLayoutGridCell>;
    }
  }
}
