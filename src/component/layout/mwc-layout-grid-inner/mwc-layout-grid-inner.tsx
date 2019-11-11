import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcLayoutGridInner extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];
    
    const classes = ["mdc-layout-grid__inner", ...this.class]
    
    // top-level 
    this.el.setAttribute('class', classes.join(' '));

    return this.virtualSlotChildren.default;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcLayoutGridInner: Partial<MwcLayoutGridInner>;
    }
  }
}
