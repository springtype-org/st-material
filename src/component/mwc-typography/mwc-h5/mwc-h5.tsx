import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcH5 extends st.component implements ILifecycle {
  render() {
    return <h5 class={["mdc-typography--headline5", ...this.class]}>{this.renderChildren()}</h5>;
  }
}