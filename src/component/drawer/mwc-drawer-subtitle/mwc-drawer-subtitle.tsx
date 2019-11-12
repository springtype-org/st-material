import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcDrawerSubtitle extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.elStyle = {
      ...this.elStyle,
      display: "block",
    };

    this.elClass = [...this.elClass, "mdc-drawer__subtitle"];
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawerSubtitle: Partial<MwcDrawerSubtitle>;
    }
  }
}
