import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

@component({tag: 'p'})
export class MwcTypography extends st.component implements ILifecycle {
    class = ["mdc-typography"];

    render() {
        return this.renderChildren();
    }
}