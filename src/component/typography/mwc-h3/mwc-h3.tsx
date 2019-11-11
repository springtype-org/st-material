import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcH3 extends st.component implements ILifecycle {
  render() {
    return (
      <h3 class="mdc-typography--headline3">
        {this.renderChildren()}
      </h3>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH3: Partial<MwcH3>;
    }
  }
}
