import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component, event } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import tpl from "./mwc-select.tpl";
import { MDCSelect } from "@material/select/component";
import { MDCRipple } from "@material/ripple";
import { IEvent, IEventListener } from "springtype/web/component/interface";

export interface ISelectEventDetails {
  detail: {
    value: string;
    index: number;
  };
}

export interface IMwcSelectAttrs {
  name?: string;
  label?: string;
  ripple?: boolean;
  disabled?: boolean;
  value?: string;
  onMwcSelect?: IEventListener<ISelectEventDetails>;
}

export interface MwcSelectEvent extends IEvent<ISelectEventDetails> { }

@component({
  tpl,
})
export class MwcSelect extends st.component<IMwcSelectAttrs> implements ILifecycle {

  static SLOT_NAME_LIST_ITEMS: string = "mwc-select-items-slot";

  @ref
  selectContainer: HTMLElement;

  @event
  onMwcSelect: IEventListener<ISelectEventDetails>;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  ripple: boolean = true;

  @attr
  disabled: boolean = false;

  @attr
  value: string = "";

  mdcSelect: MDCSelect;
  mdcRipple: MDCRipple;

  onAfterRender() {

    this.onDisconnect();

    this.mdcSelect = new MDCSelect(this.selectContainer);

    this.selectContainer.addEventListener("MDCSelect:change", ((evt: any) => {

      st.event<ISelectEventDetails>(this.el, "MwcSelect", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: evt.detail,
      });

    }) as any);

    if (this.ripple) {
      this.mdcRipple = new MDCRipple(this.selectContainer);
    }
  }

  onDisconnect() {

    if (this.mdcSelect) {
      this.mdcSelect.destroy();
    }

    if (this.mdcRipple) {
      this.mdcRipple.destroy();
    }
  }
}