import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcButtonText extends st.component implements ILifecycle {
  render() {
    return <p class={["mdc-typography--button", ...this.class]}>{this.renderChildren()}</p>;
  }
}