import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";

@component
export class MwcListItemMeta extends st.component implements ILifecycle {
    class = ["mdc-list-item__meta"];

    render() {
        return this.renderChildren();
    }
}