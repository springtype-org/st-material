import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcListItemTextPrimary extends st.component implements ILifecycle {
  onAfterElCreate() {
    this.elClass = [...this.elClass, "mdc-list-item__primary-text"];
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItemTextPrimary: Partial<MwcListItemTextPrimary>;
    }
  }
}
