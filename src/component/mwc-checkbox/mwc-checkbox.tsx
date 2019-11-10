import { MDCCheckbox } from "@material/checkbox";
import { MDCFormField } from "@material/form-field";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { domRef, newUniqueComponentName } from "springtype/web/vdom";
import tpl from "./mwc-checkbox.tpl";

@component({
  tpl,
})
export class MwcCheckbox extends st.component implements ILifecycle {
  @domRef("input")
  input: HTMLElement;

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

  inputId = newUniqueComponentName();
  checkboxId = newUniqueComponentName();
  formFieldId = newUniqueComponentName();

  mdcCheckbox: MDCCheckbox;
  mdcFormField: MDCFormField;

  mdcRipple: MDCRipple;

  onAfterInitialRender(): void {
    const checkboxEl = this.getEl().querySelector(`#${this.checkboxId}`);
    this.mdcCheckbox = new MDCCheckbox(checkboxEl);
    this.mdcFormField = new MDCFormField(this.getEl().querySelector(`#${this.formFieldId}`));
    this.mdcFormField.input = this.mdcCheckbox;

    if (this.ripple) {
      this.mdcRipple = new MDCRipple(checkboxEl);
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
