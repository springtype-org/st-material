import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

@component({tag: 'div'})
export class MwcDrawerContent extends st.component implements ILifecycle {

    class = ['mdc-drawer__content'];

    render() {
        return this.renderChildren();
    }
}