import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
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