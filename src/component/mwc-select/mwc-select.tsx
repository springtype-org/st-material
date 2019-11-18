import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component, event } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { newUniqueComponentName } from "springtype/web/vdom";
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

export interface MwcSelectEvent extends IEvent<ISelectEventDetails> {}

@component({
  tpl,
})
export class MwcSelect extends st.component implements ILifecycle {
  static SLOT_NAME_LIST_ITEMS: string = "mwc-select-items-slot";

  @ref
  selectContainer: HTMLElement;

  @event
  onSelect: IEventListener<MwcSelectEvent, Event> = event;

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

  selectId: string;

  mdcSelect: MDCSelect;
  mdcRipple: MDCRipple;

  onAfterElCreate() {
    this.selectId = newUniqueComponentName();
  }

  onAfterRender(): void {
    this.mdcSelect = new MDCSelect(this.selectContainer);

    this.mdcSelect.listen("MDCSelect:change", ((evt: any) => {
      st.event<ISelectEventDetails>(this.el, "select", {
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
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcSelect: Partial<MwcSelect>;
    }
  }
}
