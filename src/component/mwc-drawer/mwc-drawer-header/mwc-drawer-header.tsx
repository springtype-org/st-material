import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcDrawerHeader extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.class = [...this.class, "mdc-drawer__header"];

    this.style = {
      ...this.style,
      display: "block",
    };
  }

  render() {
    return this.renderChildren();
  }
}
