import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

export interface IMwcListDividerAttrs {
    padded?: boolean;
    inset?: boolean;
}

@component
export class MwcListDivider extends st.component<IMwcListDividerAttrs> implements ILifecycle {

    @attr
    padded: boolean = false;

    @attr
    inset: boolean = false;

    class = ["mdc-list-divider"];

    style = {
        display: "block",
    };

    onAfterElCreate() {
        if (this.padded) {
            this.el.classList.add("mdc-list-divider--padded");
        }

        if (this.inset) {
            this.el.classList.add("mdc-list-divider--inset");
        }
    }

    render() {
        return <fragment/>;
    }
}