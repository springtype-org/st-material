import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcListItemText extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.class = [...this.class, "mdc-list-item__text"];
  }
  render() {
    return this.renderChildren();
  }
}