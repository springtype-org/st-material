import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

@component({tag: 'h2'})
export class MwcH2 extends st.component implements ILifecycle {
    class = ["mdc-typography--headline2"];

    render() {
        return this.renderChildren();
    }
}