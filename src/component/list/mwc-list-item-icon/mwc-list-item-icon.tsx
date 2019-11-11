import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcListItemIcon extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  type: string;
  
  @attr(AttrType.DOM_INTRANSPARENT)
  meta: boolean;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["material-icons", this.meta ? "mdc-list-item__meta" : "mdc-list-item__graphic", ...this.class];

    this.el.setAttribute("class", classes.join(" "));
    
    // TODO: Support return primitive type
    return <fragment />;
  }

  onAfterRender() {
    this.el.innerText = this.type;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItemIcon: Partial<MwcListItemIcon>;
    }
  }
}
