import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component({tag: 'p'})
export class MwcBody1 extends st.component implements ILifecycle {
  class = ["mdc-typography--body1"];

  render() {
    return this.renderChildren();
  }
}