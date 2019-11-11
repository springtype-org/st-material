import { MDCCheckbox } from "@material/checkbox";
import { MDCFormField } from "@material/form-field";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { domRef, newUniqueComponentName } from "springtype/web/vdom";
import tpl from "./mwc-checkbox.tpl";

@component({
  tpl,
})
export class MwcCheckbox extends st.component implements ILifecycle {
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
  indeterminate: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  checked: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  value: string = "";

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;
  
  inputId = newUniqueComponentName();
  checkboxId = newUniqueComponentName();
  formFieldId = newUniqueComponentName();

  mdcCheckbox: MDCCheckbox;
  mdcFormField: MDCFormField;

  mdcRipple: MDCRipple;

  onAfterInitialRender(): void {

    const checkboxEl = this.el.querySelector(`#${this.checkboxId}`);
    this.mdcCheckbox = new MDCCheckbox(checkboxEl);
    this.mdcFormField = new MDCFormField(this.el.querySelector(`#${this.formFieldId}`));
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
