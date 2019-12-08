import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

@component
export class MwcLayoutGridInner extends st.component implements ILifecycle {
    class = [ "mdc-layout-grid__inner"];

  render() {
    return this.renderChildren();
  }
}