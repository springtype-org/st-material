import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcList extends st.component implements ILifecycle {
  render() {
    return (
      <ul class="mdc-list">
        <slot />
      </ul>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcList: Partial<MwcList>;
    }
  }
}
