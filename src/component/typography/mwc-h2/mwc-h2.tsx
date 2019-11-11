import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcH2 extends st.component implements ILifecycle {
  render() {
    return (
      <h2 class="mdc-typography--headline2">
        <slot />
      </h2>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH2: Partial<MwcH2>;
    }
  }
}
