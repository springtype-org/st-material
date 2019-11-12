import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcCaptionText extends st.component implements ILifecycle {
  render() {
    return <p class={["mdc-typography--caption", ...this.elClass]}>{this.renderChildren()}</p>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcCaptionText: Partial<MwcCaptionText>;
    }
  }
}
