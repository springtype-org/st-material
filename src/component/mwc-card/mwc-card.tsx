import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import tpl from "./mwc-card.tpl";

@component({
    tpl,
})
export class MwcCard extends st.component implements ILifecycle {
    static SLOT_NAME_PRIMARY: string = "primary-slot";
    static SLOT_NAME_ACTION: string = "action-slot";

    @attr()
    title: string = "";

    onAfterElCreate() {
        this.elClass = [...this.elClass, "mdc-card"];
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcCard: Partial<MwcCard>;
        }
    }
}
