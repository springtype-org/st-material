import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcDrawerAppContent extends st.component implements ILifecycle {

  @attr()
  fixed: boolean = false;

  onAfterElCreate() {

    const classes = [...this.elClass, "mdc-drawer-app-content"];

    if (this.fixed) {
      classes.push("mdc-top-app-bar--fixed-adjust");
    }
    this.elClass = classes;
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawerAppContent: Partial<MwcDrawerAppContent>;
    }
  }
}
