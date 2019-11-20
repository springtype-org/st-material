import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import tpl from "./mwc-text-area.tpl";
import { MwcBaseTextFieldVariant } from "../mwc-base-textfield/mwc-base-text-field-variant";
import { MwcBaseTextField } from "../mwc-base-textfield";
import { INPUT_PROPERTIES } from "../mwc-base-textfield/mwc-base-text-field";

export interface IMwcTextAreaAttrs {
  name?: string;
  label?: string | false;
  variant?: MwcBaseTextFieldVariant;
  ripple?: boolean;
  disabled?: boolean;
  value?: string;
  shaped?: boolean;
  fullwidth?: boolean;
}

@component({
  tpl,
})
export class MwcTextArea extends st.component<IMwcTextAreaAttrs> implements ILifecycle {

  @ref
  mwcBaseTextFieldRef: MwcBaseTextField;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  variant: MwcBaseTextFieldVariant = MwcBaseTextFieldVariant.FILLED;

  @attr
  ripple: boolean = true;

  @attr
  disabled: boolean = false;

  @attr
  value: string = "";

  @attr
  shaped: boolean = false;

  @attr
  fullWidth: boolean = false;

  getAttribute(name: string): any {
    if (this.mwcBaseTextFieldRef && INPUT_PROPERTIES.indexOf(name) > 0) {
      return this.mwcBaseTextFieldRef.getAttribute(name);
    }
    return super.getAttribute(name);
  }
}