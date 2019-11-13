import { MDCTextField } from '@material/textfield';
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import {domRef, newUniqueComponentName} from "springtype/web/vdom";
import { MwcBaseTextFieldVariant } from "./mwc-base-text-field-variant";
import tpl from "./mwc-base-text-field.tpl";

export const INPUT_PROPERTIES = ['name', 'value','type'];
@component({
    tpl
})
export class MwcBaseTextField extends st.component implements ILifecycle {
    static SLOT_NAME_TRAILING_ICON: string = "base-trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "base-leading-icon";

    @domRef('inputRef')
    inputRef: HTMLInputElement;

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
    textareaRows = 2;

    @attr()
    textareaCols = 40;

    @attr()
    fullwidth = false;

    @attr()
    type: 'password' | 'text' = 'text';

    textFieldId: string;
    inputId: string;

    textField: MDCTextField;

    trailingIconActive: boolean = false;
    leadingIconActive: boolean = false;

    onBeforeElCreate() {
        this.textFieldId =  newUniqueComponentName();
        this.inputId = newUniqueComponentName();
    }

    onBeforeRender(): void {
        this.trailingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_LEADING_ICON];
    }

    onAfterRender(): void {
        const textFieldId = this.el.querySelector(`#${this.textFieldId}`);
        this.textField = new MDCTextField(textFieldId);
    }

    getAttribute(name: string): any {
        if(this.inputRef && INPUT_PROPERTIES.indexOf(name) >0){
           return this.inputRef[name];
        }
        return super.getAttribute(name);
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcBaseTextField': Partial<MwcBaseTextField>;
        }
    }
}


