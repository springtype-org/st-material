import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import tpl from "./mwc-button.tpl";
import { ref } from "springtype/core/ref";
import { IVirtualNode } from "springtype/web/vdom/interface";
import { IComponentLifecycle } from "springtype/web/component/interface/ilifecycle";
import { IOnStateChange } from "springtype/web/component/interface/ion-state-change";

export type MwcButtonVariant = "text" | "raised" | "unelevated" | "outlined";

interface MwcButtonAttrs {
  label?: string;
  ripple?: boolean;
  variant?: MwcButtonVariant;
  disabled?: boolean;
  dense?: boolean;
  shaped?: boolean;
}

@component({
  tpl,
})
export class MwcButton extends st.component<MwcButtonAttrs> implements ILifecycle, MwcButtonAttrs {
  static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
  static SLOT_NAME_LEADING_ICON: string = "leading-icon";

  @ref
  btnEl: HTMLElement;

  @attr
  label: string = "";

  @attr
  ripple: boolean = true;

  @attr
  variant: MwcButtonVariant = "text";

  @attr
  disabled: boolean = false;

  @attr
  dense: boolean = false;

  @attr
  shaped = false;

  buttonId: string;

  mdcRipple: MDCRipple;

  onAfterRender(): void {
    if (this.ripple) {
      this.mdcRipple = new MDCRipple(this.btnEl);
    }
  }

  onDisconnect() {
    if (this.ripple) {
      this.mdcRipple.destroy();
    }
  }
}
