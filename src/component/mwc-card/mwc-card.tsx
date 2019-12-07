import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";
import {IVirtualNodeAttributes} from "springtype/web/vdom/interface/ivirtual-node";

export interface IMwcCardAttrs {
  title?: string;
  actionsClass?: string;
  primaryActionsClass?: string;
  primaryCardMedia?: boolean;
  primaryMediaClass?: string;
}

@component
export class MwcCard extends st.component<IMwcCardAttrs> implements ILifecycle {
  static SLOT_NAME_PRIMARY: string = "primary-slot";
  static SLOT_NAME_ACTION: string = "action-slot";

  @attr
  title: string = "";

  @attr
  actionsClass: string;

  @attr
  primaryActionsClass: string;

  @attr
  primaryCardMedia: boolean = false;

  @attr
  primaryMediaClass: string;

  onAfterElCreate() {
    console.log('onAfterElCreate',this.class, this.virtualNode)
    this.class = [...this.class, "mdc-card"];
  }
  onBeforeElCreate() {
    console.log('onBeforeElCreate',this.class, this.virtualNode)
  //  this.class = [...this.class, "mdc-card"];
  }

  render(): IVirtualNode<IVirtualNodeAttributes> | Array<IVirtualNode> {
    const actionsClasses = ["mdc-card__actions"];
    const primaryActionsClasses = ["mdc-card__primary-action"];
    const primaryCardMediaClasses = ["mdc-card__media"];

    if (this.actionsClass) {
      actionsClasses.push(this.actionsClass);
    }

    if (this.primaryActionsClass) {
      primaryActionsClasses.push(this.primaryActionsClass);
    }

    if (this.primaryMediaClass) {
      primaryCardMediaClasses.push(this.primaryMediaClass);
    }

    const primaryContent = this.primaryCardMedia ? (
        <div class={primaryCardMediaClasses}>{this.renderSlot(MwcCard.SLOT_NAME_PRIMARY)}</div>
    ) : (
        this.renderSlot(MwcCard.SLOT_NAME_PRIMARY)
    );

    return (
        <fragment>
          <div class={primaryActionsClasses}>{primaryContent}</div>
          <div class={actionsClasses}>{this.renderSlot(MwcCard.SLOT_NAME_ACTION)}</div>
        </fragment>
    );
  }
}