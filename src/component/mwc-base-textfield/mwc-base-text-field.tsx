import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import tpl from "./mwc-base-text-field.tpl";
import {MwcBaseTextFieldVariant} from "./mwc-base-text-field-variant";
import {MDCTextField} from '@material/textfield';

@component({
    tpl
})
export class MwcBaseTextField extends st.component implements ILifecycle {
    static SLOT_NAME_TRAILING_ICON: string = "base-trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "base-leading-icon";
    @attr()
    name: string = '';

    @attr()
    label: string | false = false;

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
    textarea = false;

    @attr()
    fullwidth = false;

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
        this.trailingIconActive = !!this.virtualSlotChildren[MwcBaseTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconActive = !!this.virtualSlotChildren[MwcBaseTextField.SLOT_NAME_LEADING_ICON];
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcBaseTextField': Partial<MwcBaseTextField>;
        }
    }
}


