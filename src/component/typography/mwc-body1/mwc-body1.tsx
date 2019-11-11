import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcBody1 extends st.component implements ILifecycle {
  render() {
    return (
      <p class="mdc-typography--body1">
        <slot />
      </p>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcBody1: Partial<MwcBody1>;
    }
  }
}
