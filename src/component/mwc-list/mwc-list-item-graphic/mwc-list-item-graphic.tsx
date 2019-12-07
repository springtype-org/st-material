import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component({tag: 'i'})
export class MwcListItemGraphic extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.class = [...this.class, "mdc-list-item__graphic"];
  }

  render() {
    return this.renderChildren();
  }
}
