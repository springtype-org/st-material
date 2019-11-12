import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import {tsx} from "springtype/web/vdom";

@component()
export class MwcDrawerContent extends st.component implements ILifecycle {

  render() {
    return <div class="mdc-drawer__content">{this.renderChildren()}</div>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawerContent: Partial<MwcDrawerContent>;
    }
  }
}
