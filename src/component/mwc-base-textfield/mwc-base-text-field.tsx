import { MDCTextField } from "@material/textfield";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { newUniqueComponentName } from "springtype/web/vdom";
import { MwcBaseTextFieldVariant } from "./mwc-base-text-field-variant";
import tpl from "./mwc-base-text-field.tpl";

export const INPUT_PROPERTIES = ["name", "value", "type"];

export type MwcBaseTextFieldInputTypes = "password" | "text";

export interface IMwcBaseTextFieldAttrs {
  name?: string;
  label?: string | false;
  variant?: MwcBaseTextFieldVariant;
  disabled?: boolean;
  value?: string;
  shaped?: boolean;
  textarea?: boolean;
  type?: MwcBaseTextFieldInputTypes;
  textareaCols?: number;
  textareaRows?: number;
  fullWidth?: boolean;
}

@component({
  tpl,
})
export class MwcBaseTextField extends st.component<IMwcBaseTextFieldAttrs> implements ILifecycle {
  static SLOT_NAME_TRAILING_ICON: string = "base-trailing-icon";
  static SLOT_NAME_LEADING_ICON: string = "base-leading-icon";

  @ref
  inputRef: HTMLInputElement;

  @attr
  name: string = "";

  @attr
  label: string | false = false;

  @attr
  variant: MwcBaseTextFieldVariant = MwcBaseTextFieldVariant.FILLED;

  @attr
  disabled: boolean = false;

  @attr
  value: string = "";

  @attr
  shaped: boolean = false;

  @attr
  isTextarea: boolean = false;

  @attr
  textareaRows: number = 2;

  @attr
  textareaCols: number = 40;

  @attr
  fullWidth: boolean = false;

  @attr
  type: "password" | "text" = "text";

  @ref
  textfieldRef: HTMLElement;
  inputId: string;

  mdcComponent: MDCTextField;

  trailingIconActive: boolean = false;
  leadingIconActive: boolean = false;

  onBeforeElCreate() {
    this.inputId = newUniqueComponentName();
  }
  
  onBeforeRender(): void {
    this.trailingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_TRAILING_ICON];
    this.leadingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_LEADING_ICON];
  }

  onAfterRender(): void {
    this.mdcComponent = new MDCTextField(this.textfieldRef);
  }

  getAttribute(name: string): any {
    if (this.inputRef && INPUT_PROPERTIES.indexOf(name) > 0) {
      return this.inputRef[name];
    }
    return super.getAttribute(name);
  }

  onDisconnect() {
    this.mdcComponent.destroy();
  }
}