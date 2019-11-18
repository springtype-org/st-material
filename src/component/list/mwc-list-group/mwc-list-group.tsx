import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcListGroup extends st.component implements ILifecycle {
  static SLOT_NAME_HEADER: string = "header";

  onAfterElCreate() {
    this.elClass = [...this.elClass, "mdc-list-group"];

    this.elStyle = {
      ...this.elStyle,
      display: "block",
    };
  }

  render() {
    if (this.virtualNode.slotChildren[MwcListGroup.SLOT_NAME_HEADER]) {
      return [
        <div class="mdc-list-group__subheader">{this.renderSlot(MwcListGroup.SLOT_NAME_HEADER)}</div>,
        this.renderChildren(),
      ];
    } else {
      return this.renderChildren();
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListGroup: Partial<MwcListGroup>;
    }
  }
}
