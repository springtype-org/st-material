import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcDrawerAppContent extends st.component implements ILifecycle {

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-drawer-app-content", ...this.class];

    return <h3 class={classes}>{this.virtualSlotChildren.default || <fragment />}</h3>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawerAppContent: Partial<MwcDrawerAppContent>;
    }
  }
}
