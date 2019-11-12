import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import tpl from "./mwc-card.tpl";

@component({
    tpl,
})
export class MwcCard extends st.component implements ILifecycle {
    static SLOT_NAME_PRIMARY: string = "mwc-card-primary-slot";
    static SLOT_NAME_ACTION: string = "mwc-card-action-slot";


    @attr(AttrType.DOM_INTRANSPARENT)
    title: string = "";


    @attr(AttrType.DOM_INTRANSPARENT)
    class: string | Array<string>;


    onAfterInitialRender(): void {

    }


}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcCard: Partial<MwcCard>;
        }
    }
}
