import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";
import { MwcLayoutGridInner } from "../mwc-layout-grid-inner/mwc-layout-grid-inner";

@component()
export class MwcLayoutGrid extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  autoWrapInner: boolean = true;

  @attr(AttrType.DOM_INTRANSPARENT)
  fixedColumnWidth: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  align: "middle" | "left" | "right";

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  innerClass: string | Array<string>;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-layout-grid", ...this.class];

    if (this.fixedColumnWidth) {
      classes.push("mdc-layout-grid--fixed-column-width");
    }

    if (this.align && this.align !== "middle") {
      classes.push(`mdc-layout-grid--align-${this.align}`);
    }

    // top-level 
    this.el.setAttribute('class', classes.join(' '));
    this.el.style.display = 'block';

    if (this.autoWrapInner) {
      return (
        <MwcLayoutGridInner class={this.innerClass}>
            {this.renderChildren()}
          </MwcLayoutGridInner>
      );
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
