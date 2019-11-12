import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcDrawerContent extends st.component implements ILifecycle {

  onAfterElCreate() {
    this.elClass = [...this.elClass, "mdc-drawer__content"];
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawerContent: Partial<MwcDrawerContent>;
    }
  }
}
