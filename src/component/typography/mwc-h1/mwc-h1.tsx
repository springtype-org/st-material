import { st } from "springtype/core";
import {attr, component} from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import {AttrType} from "springtype/web/component/trait/attr";

@component()
export class MwcH1 extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  class: string;

  render() {
    return (
      <h1 class={['mdc-typography--headline1', this.class]}>
        {this.renderChildren()}
      </h1>
    );
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcH1: Partial<MwcH1>;
    }
  }
}
