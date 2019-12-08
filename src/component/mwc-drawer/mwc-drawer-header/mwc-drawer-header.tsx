import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcDrawerHeader extends st.component implements ILifecycle {
    class = ["mdc-drawer__header"];
    style = {
      display: "block"
    };

  render() {
    return this.renderChildren();
  }
}
