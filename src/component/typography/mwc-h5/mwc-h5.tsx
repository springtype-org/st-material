import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcH5 extends st.component implements ILifecycle {
  render() {
    return <h5 class={["mdc-typography--headline5", ...this.elClass]}>{this.renderChildren()}</h5>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH5: Partial<MwcH5>;
    }
  }
}
