import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component({tag: 'h6'})
export class MwcSubtitle2 extends st.component implements ILifecycle {
   class = ["mdc-typography--subtitle2"];
  render() {
    return this.renderChildren();
  }
}