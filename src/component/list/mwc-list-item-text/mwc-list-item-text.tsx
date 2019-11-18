import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcListItemText extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.elClass = [...this.elClass, "mdc-list-item__text"];
  }
  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItemText: Partial<MwcListItemText>;
    }
  }
}
