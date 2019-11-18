import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import tpl from "./mwc-text-area.tpl";
import { MwcBaseTextFieldVariant } from "../mwc-base-textfield/mwc-base-text-field-variant";
import { MwcBaseTextField } from "../mwc-base-textfield";
import { INPUT_PROPERTIES } from "../mwc-base-textfield/mwc-base-text-field";

@component({
  tpl,
})
export class MwcTextArea extends st.component implements ILifecycle {
  @ref
  mwcBaseTextFieldRef!: MwcBaseTextField;

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
  shaped = false;

  @attr
  fullwidth = false;

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
      MwcTextArea: Partial<MwcTextArea>;
    }
  }
}
