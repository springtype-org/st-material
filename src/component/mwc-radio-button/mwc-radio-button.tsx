import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';
import {MDCRipple} from "@material/ripple";
import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import {domRef, newUniqueComponentName} from "springtype/web/vdom";
import tpl from "./mwc-radio-button.tpl";

@component({
    tpl,
})
export class MwcRadioButton extends st.component implements ILifecycle {
    @domRef("input")
    input: HTMLElement;

    @attr(AttrType.DOM_INTRANSPARENT)
    name: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    label: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    ripple: boolean = true;

    @attr(AttrType.DOM_INTRANSPARENT)
    disabled: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    checked: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    value: string = "";

    @attr(AttrType.DOM_INTRANSPARENT)
    class: string | Array<string>;

    radioId = newUniqueComponentName();
    inputId = newUniqueComponentName();
    formFieldId = newUniqueComponentName();

    mdcRadioButton: MDCRadio;
    mdcFormField: MDCFormField;

    mdcRipple: MDCRipple;

    onAfterInitialRender(): void {

        const checkboxEl = this.el.querySelector(`#${this.radioId}`);
        //@ts-ignore
        this.mdcRadioButton = new MDCRadio(this.el.querySelector('.mdc-radio'));
        //@ts-ignore
        this.mdcFormField = new MDCFormField(this.el.querySelector('.mdc-form-field'));

        this.mdcFormField.input = this.mdcRadioButton;

        if (this.ripple) {
            //@ts-ignore
            this.mdcRipple = new MDCRipple(checkboxEl);
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcRadioButton: Partial<MwcRadioButton>;
        }
    }
}
