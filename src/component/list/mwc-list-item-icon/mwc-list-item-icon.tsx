import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcListItemIcon extends st.component implements ILifecycle {
  @attr
  type: string;

  @attr
  meta: boolean;

  onAfterElCreate() {
    this.elClass = [...this.elClass, "material-icons", this.meta ? "mdc-list-item__meta" : "mdc-list-item__graphic"];
  }

  render() {
    return <fragment />;
  }

  onAfterRender() {
    this.el.innerText = this.type;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItemIcon: Partial<MwcListItemIcon>;
    }
  }
}
