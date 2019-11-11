import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcSubtitle2 extends st.component implements ILifecycle {
  render() {
    return (
      <h6 class="mdc-typography--subtitle2">
        {this.renderChildren()}
      </h6>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcSubtitle2: Partial<MwcSubtitle2>;
    }
  }
}
