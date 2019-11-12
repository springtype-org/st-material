import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {AttrType} from "springtype/web/component/trait/attr";

@component()
export class MwcTypography extends st.component implements ILifecycle {
    @attr(AttrType.DOM_INTRANSPARENT)
    class: string;

    render() {
        return (
            <p class={['mdc-typography', this.class]}>
                {this.renderChildren()}
            </p>
        );
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcTypography: Partial<MwcTypography>;
        }
    }
}
