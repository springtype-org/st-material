import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {tsx} from "springtype/web/vdom";
import tpl from "./mwc-text-field.tpl";
import {MwcTextFieldVariant} from "./mwc-text-field-variant";


@component({
    tpl
})
export class MwcTextField extends st.component implements ILifecycle {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";
    @attr()
    name: string = '';

    @attr()
    label: string = '';

    @attr()
    variant: MwcTextFieldVariant = MwcTextFieldVariant.FILLED;

    @attr()
    ripple: boolean = true;

    @attr()
    disabled: boolean = false;

    @attr()
    value: string = '';

    @attr()
    shaped = false;

    trailingIconSlot: any | false = false;
    leadingIconSlot: any | false = false;

    onBeforeRender(): void {
        this.trailingIconSlot = this.virtualSlotChildren[MwcTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconSlot = this.virtualSlotChildren[MwcTextField.SLOT_NAME_LEADING_ICON];
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcTextField': Partial<MwcTextField>;
        }
    }
}

