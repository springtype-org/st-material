import {MDCCheckbox} from "@material/checkbox";
import {MDCFormField} from "@material/form-field";
import {MDCRipple} from "@material/ripple";
import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import {domRef, newUniqueComponentName} from "springtype/web/vdom";
import tpl from "./mwc-checkbox.tpl";

@component({
    tpl,
})
export class MwcCheckbox extends st.component implements ILifecycle {
    @domRef("input")
    input: HTMLElement;

    @domRef("formFieldRef")
    formFieldRef: HTMLElement;

    @domRef("checkboxContainerRef")
    checkboxContainerRef: HTMLElement;

    @attr()
    name: string = "";

    @attr()
    label: string = "";

    @attr()
    ripple: boolean = true;

    @attr()
    disabled: boolean = false;

    @attr()
    indeterminate: boolean = false;

    @attr()
    checked: boolean = false;

    @attr()
    value: string = "";

    inputId: string;
    checkboxId: string;
    formFieldId: string;

    mdcCheckbox: MDCCheckbox;
    mdcFormField: MDCFormField;
    mdcRipple: MDCRipple;

    onAfterElCreate() {
        this.inputId = newUniqueComponentName();
        this.checkboxId = newUniqueComponentName();
        this.formFieldId = newUniqueComponentName();
    }

    onAfterRender(): void {

        this.mdcCheckbox = new MDCCheckbox(this.checkboxContainerRef);
        this.mdcFormField = new MDCFormField(this.formFieldRef);
        this.mdcFormField.input = this.mdcCheckbox;

        if (this.ripple) {
            this.mdcRipple = new MDCRipple(this.checkboxContainerRef);
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcCheckbox: Partial<MwcCheckbox>;
        }
    }
}
