import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";
import { MwcLayoutGridInner } from "../mwc-layout-grid-inner/mwc-layout-grid-inner";

@component()
export class MwcLayoutGrid extends st.component implements ILifecycle {
  @attr()
  autoWrapInner: boolean = true;

  @attr()
  fixedColumnWidth: boolean = false;

  @attr()
  align: "middle" | "left" | "right";

  @attr()
  innerClass: string | Array<string>;

  onAfterElCreate() {
    const classes = [...this.elClass];

    if (this.fixedColumnWidth) {
      classes.push("mdc-layout-grid--fixed-column-width");
    }

    if (this.align && this.align !== "middle") {
      classes.push(`mdc-layout-grid--align-${this.align}`);
    }
    this.elClass = [...classes, "mdc-layout-grid"];

    this.elStyle = {
      ...this.elStyle,
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

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcLayoutGrid: Partial<MwcLayoutGrid>;
    }
  }
}
