import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

@component({tag: 'div'})
export class MwcDrawerContent extends st.component implements ILifecycle {

    onAfterElCreate(): void {
        this.class = ['mdc-drawer__content', ...this.class];
    }

    render() {
        return this.renderChildren();
    }
}