import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import tpl from "./mwc-text-field.tpl";
import {DEFAULT_TEXT_FIELD_VARIANT, MwcTextFieldVariant} from "./mwc-text-field-variant";
import {MDCTextField} from '@material/textfield';

@component({
    tpl
})
export class MwcTextField extends st.component implements ILifecycle {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";
    @attr()
    name: string = '';

    @attr()
    label: string  = '';

    @attr()
    variant: MwcTextFieldVariant = DEFAULT_TEXT_FIELD_VARIANT;

    @attr()
    ripple: boolean = true;

    @attr()
    disabled: boolean = false;

    @attr()
    value: string = '';

    @attr()
    shaped = false;

    textFieldId = newUniqueComponentName();
    inputId = newUniqueComponentName();

    textField: MDCTextField;

    trailingIconActive: boolean = false;
    leadingIconActive: boolean = false;

    onAfterInitialRender(): void {
        const textFieldId = this.el.querySelector(`#${this.textFieldId}`);
        this.textField = new MDCTextField(textFieldId);
    }

    onBeforeRender(): void {
        this.trailingIconActive = !!this.virtualSlotChildren[MwcTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconActive = !!this.virtualSlotChildren[MwcTextField.SLOT_NAME_LEADING_ICON];
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcTextField': Partial<MwcTextField>;
        }
    }
}


