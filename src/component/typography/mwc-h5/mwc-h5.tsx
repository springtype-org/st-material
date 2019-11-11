import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcH5 extends st.component implements ILifecycle {
  render() {
    return (
      <h5 class="mdc-typography--headline5">
        <slot />
      </h5>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH5: Partial<MwcH5>;
    }
  }
}