import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { domRef, newUniqueComponentName } from "springtype/web/vdom";
import tpl from "./mwc-radio-field.tpl";

@component({
  tpl,
})
export class MwcRadioField extends st.component implements ILifecycle {
 
  @domRef("radio")
  radio: HTMLElement;

  @domRef("formField")
  formField: HTMLElement;

  @attr()
  name: string = "";

  @attr()
  label: string = "";

  @attr()
  ripple: boolean = true;

  @attr()
  disabled: boolean = false;

  @attr()
  checked: boolean = false;

  @attr()
  value: string = "";

  radioId = newUniqueComponentName();
  inputId = newUniqueComponentName();
  formFieldId = newUniqueComponentName();

  mdcRadioButton: MDCRadio;
  mdcFormField: MDCFormField;
  mdcRipple: MDCRipple;

  onAfterElCreate() {
    this.radioId = newUniqueComponentName();
    this.inputId = newUniqueComponentName();
    this.formFieldId = newUniqueComponentName();
  }

  onAfterRender(): void {
    this.mdcRadioButton = new MDCRadio(this.radio);
    this.mdcFormField = new MDCFormField(this.formField);
    this.mdcFormField.input = this.mdcRadioButton;

    if (this.ripple) {
      this.mdcRipple = new MDCRipple(this.radio);
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcRadioButton: Partial<MwcRadioField>;
    }
  }
}
