import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcSubtitle1 extends st.component implements ILifecycle {
  render() {
    return <h6 class={["mdc-typography--subtitle1", ...this.class]}>{this.renderChildren()}</h6>;
  }
}