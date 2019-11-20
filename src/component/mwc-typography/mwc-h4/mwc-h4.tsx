import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcH4 extends st.component implements ILifecycle {
  render() {
    return <h4 class={["mdc-typography--headline4", ...this.elClass]}>{this.renderChildren()}</h4>;
  }
}