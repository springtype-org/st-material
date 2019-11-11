import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcListGroup extends st.component implements ILifecycle {
  static SLOT_NAME_HEADER: string = "header";

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;
  
  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];
    
    const classes = ["mdc-list-group", ...this.class];

    this.el.setAttribute("class", classes.join(" "));

    if (this.virtualSlotChildren.header) {
      return [<div class="mdc-list-group__subheader">{this.virtualSlotChildren.header}</div>, this.virtualSlotChildren.default];
    } else {
      return this.virtualSlotChildren.default || <fragment />;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListGroup: Partial<MwcListGroup>;
    }
  }
}
