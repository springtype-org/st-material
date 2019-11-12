import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {AttrType} from "springtype/web/component/trait/attr";

@component()
export class MwcButtonText extends st.component implements ILifecycle {
    @attr(AttrType.DOM_INTRANSPARENT)
    class: string;

    render() {
        return (
            <p  class={['mdc-typography--button', this.class]}>
                {this.renderChildren()}
            </p>
        );
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcButtonText: Partial<MwcButtonText>;
        }
    }
}
