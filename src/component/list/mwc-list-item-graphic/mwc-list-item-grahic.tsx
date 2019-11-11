import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcListItemGraphic extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-list-item__graphic", ...this.class];

    this.el.setAttribute("class", classes.join(" "));

    return this.virtualSlotChildren.default || <fragment />;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItemText: Partial<MwcListItemGraphic>;
    }
  }
}