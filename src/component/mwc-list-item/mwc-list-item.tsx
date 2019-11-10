import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcListItem extends st.component implements ILifecycle {

  @attr()
  tabindex: number = 0;

  render() {
    return (
      <li class="mdc-list-item" tabIndex={this.tabindex}>
        <slot />
      </li>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItem: Partial<MwcListItem>;
    }
  }
}
