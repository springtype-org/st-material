import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcH1 extends st.component implements ILifecycle {
  render() {
    return <h1 class={["mdc-typography--headline1", ...this.elClass]}>{this.renderChildren()}</h1>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH1: Partial<MwcH1>;
    }
  }
}
