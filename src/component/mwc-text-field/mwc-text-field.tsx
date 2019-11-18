import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { MwcTextFieldVariant } from "./mwc-text-field-variant";
import tpl from "./mwc-text-field.tpl";
import { MwcBaseTextField } from "../mwc-base-textfield";
import { INPUT_PROPERTIES } from "../mwc-base-textfield/mwc-base-text-field";

@component({
  tpl,
})
export class MwcTextField extends st.component implements ILifecycle {
  static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
  static SLOT_NAME_LEADING_ICON: string = "leading-icon";
  @ref
  mwcBaseTextFieldRef!: MwcBaseTextField;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  variant: MwcTextFieldVariant = MwcTextFieldVariant.FILLED;

  @attr
  ripple: boolean = true;

  @attr
  disabled: boolean = false;

  @attr
  value: string = "";

  @attr
  shaped = false;

  @attr
  type: "password" | "text" = "text";

  trailingIconSlot: any | false = false;
  leadingIconSlot: any | false = false;

  onBeforeRender(): void {
    this.trailingIconSlot = this.virtualNode.slotChildren[MwcTextField.SLOT_NAME_TRAILING_ICON];
    this.leadingIconSlot = this.virtualNode.slotChildren[MwcTextField.SLOT_NAME_LEADING_ICON];
  }

  getAttribute(name: string): any {
    if (this.mwcBaseTextFieldRef && INPUT_PROPERTIES.indexOf(name) > 0) {
      return this.mwcBaseTextFieldRef.getAttribute(name);
    }
    return super.getAttribute(name);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTextField: Partial<MwcTextField>;
    }
  }
}
