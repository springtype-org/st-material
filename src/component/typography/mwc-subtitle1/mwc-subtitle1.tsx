import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcSubtitle1 extends st.component implements ILifecycle {
  render() {
    return <h6 class={["mdc-typography--subtitle1", ...this.elClass]}>{this.renderChildren()}</h6>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcSubtitle1: Partial<MwcSubtitle1>;
    }
  }
}
