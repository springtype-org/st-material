import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcH3 extends st.component implements ILifecycle {
  render() {
    return <h3 class={["mdc-typography--headline3", ...this.elClass]}>{this.renderChildren()}</h3>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH3: Partial<MwcH3>;
    }
  }
}
