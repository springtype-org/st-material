import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {AttrType} from "springtype/web/component/trait/attr";

@component()
export class MwcH6 extends st.component implements ILifecycle {
    @attr(AttrType.DOM_INTRANSPARENT)
    class: string;

    render() {
        return (
            <h6 class={['mdc-typography--headline6', this.class]}>
                {this.renderChildren()}
            </h6>
        );
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcH6: Partial<MwcH6>;
        }
    }
}
