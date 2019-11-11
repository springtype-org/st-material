import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {tsx} from "springtype/web/vdom";
import tpl from "./mwc-text-area.tpl";
import {MwcBaseTextFieldVariant} from "../mwc-base-textfield/mwc-base-text-field-variant";

@component({
    tpl
})
export class MwcTextArea extends st.component implements ILifecycle {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";
    @attr()
    name: string = '';

    @attr()
    label: string = '';

    @attr()
    variant: MwcBaseTextFieldVariant = MwcBaseTextFieldVariant.FILLED;

    @attr()
    ripple: boolean = true;

    @attr()
    disabled: boolean = false;

    @attr()
    value: string = '';

    @attr()
    shaped = false;

    @attr()
    fullwidth = false;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcTextArea': Partial<MwcTextArea>;
        }
    }
}


