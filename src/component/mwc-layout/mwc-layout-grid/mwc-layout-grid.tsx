import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { MwcLayoutGridInner } from "../mwc-layout-grid-inner/mwc-layout-grid-inner";

export type MwcLayoutGridAlign = "middle" | "left" | "right";

export interface IMwcLayoutGridAttrs {
  autoWrapInner?: boolean;
  fixedColumnWidth?: boolean;
  align?: MwcLayoutGridAlign;
  innerClass?: string | Array<string>;
}

@component
export class MwcLayoutGrid extends st.component<IMwcLayoutGridAttrs> implements ILifecycle, IMwcLayoutGridAttrs {
  @attr
  autoWrapInner: boolean = true;

  @attr
  fixedColumnWidth: boolean = false;

  @attr
  align: MwcLayoutGridAlign;

  @attr
  innerClass: string | Array<string>;

  onAfterElCreate() {
    const classes = [...this.class];

    if (this.fixedColumnWidth) {
      classes.push("mdc-layout-grid--fixed-column-width");
    }

    if (this.align && this.align !== "middle") {
      classes.push(`mdc-layout-grid--align-${this.align}`);
    }
    this.class = [...classes, "mdc-layout-grid"];

    this.style = {
      ...this.style,
      display: "block",
    };
  }

  render() {
    if (this.autoWrapInner) {
      return <MwcLayoutGridInner class={this.innerClass}>{this.renderChildren()}</MwcLayoutGridInner>;
    } else {
      return this.renderChildren();
    }
  }
}