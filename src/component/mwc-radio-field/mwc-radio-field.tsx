import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { newUniqueComponentName } from "springtype/web/vdom";
import tpl from "./mwc-radio-field.tpl";

export interface IMwcRadioFieldAttrs {
  name?: string;
  label?: string;
  ripple?: boolean;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
}

@component({
  tpl,
})
export class MwcRadioField extends st.component<IMwcRadioFieldAttrs> implements ILifecycle {
  @ref
  radioRef: HTMLElement;

  @ref
  formFieldRef: HTMLElement;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  ripple: boolean = true;

  @attr
  disabled: boolean = false;

  @attr
  checked: boolean = false;

  @attr
  value: string = "";

  inputId: string;

  mdcRadioButton: MDCRadio;
  mdcFormField: MDCFormField;
  mdcRipple: MDCRipple;

  onBeforeElCreate() {
    this.inputId = newUniqueComponentName();
  }

  onAfterRender(): void {
    this.mdcRadioButton = new MDCRadio(this.radioRef);
    this.mdcFormField = new MDCFormField(this.formFieldRef);
    this.mdcFormField.input = this.mdcRadioButton;

    if (this.ripple) {
      this.mdcRipple = new MDCRipple(this.radioRef);
    }
  }

  onDisconnect() {
    this.mdcRadioButton.destroy();
    this.mdcFormField.destroy();
    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }
  }
}