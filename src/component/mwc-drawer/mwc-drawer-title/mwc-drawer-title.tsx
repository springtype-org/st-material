import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcDrawerTitle extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.style = {
      ...this.style,
      display: "block",
    };

    this.class = [...this.class, "mdc-drawer__title"];
  }

  render() {
    return this.renderChildren();
  }
}