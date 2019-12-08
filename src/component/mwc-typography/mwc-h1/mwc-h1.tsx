import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component({tag: 'h1'})
export class MwcH1 extends st.component implements ILifecycle {

  class = ["mdc-typography--headline1"];

  render() {
    return this.renderChildren();
  }

}