import {st} from "springtype/core";
import {attr, component, emit, evt} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import {newUniqueComponentName} from "springtype/web/vdom";
import tpl from "./mwc-select.tpl";
import {MDCSelect} from "@material/select/component";
import {MDCRipple} from "@material/ripple";
import {IEvent, IEventListener} from "springtype/web/component/interface";

export interface SelectedData {
    data: any
}

export interface IChangeEvent {
    selected: SelectedData;
}

export interface SelectChangeEvent extends IEvent<IChangeEvent> {
}

@component({
    tpl,
})
export class MwcSelect extends st.component implements ILifecycle {
    static SLOT_NAME_LIST_ITEMS: string = "mwc-select-items-slot";

    @evt
    onStChange: IEventListener<SelectChangeEvent, Event> = evt;

    @attr(AttrType.DOM_INTRANSPARENT)
    name: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    label: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    ripple: boolean = true;

    @attr(AttrType.DOM_INTRANSPARENT)
    disabled: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    value: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    class: string | Array<string>;

    selectId = newUniqueComponentName();

    mdcSelect: MDCSelect;
    mdcRipple: MDCRipple;

    onAfterInitialRender(): void {
        const selectEl = this.el.querySelector(`#${this.selectId}`);
        //@ts-ignore
        this.mdcSelect = new MDCSelect(selectEl);

        //@ts-ignore
        this.mdcSelect.listen('MDCSelect:change', ((evt) => {
            emit<SelectedData>(this.el, "mwc-select-changed", {
                bubbles: true,
                cancelable: true,
                composed: true,
                detail: {
                    data: JSON.parse(evt.detail.value),
                },
            });
        }) as any);

        if (this.ripple) {
            //@ts-ignore
            this.mdcRipple = new MDCRipple(selectEl);
        }
    }


}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcSelect: Partial<MwcSelect>;
        }
    }
}
