import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import tpl from "./mwc-card.tpl";

export interface IMwcCardAttrs {
  title?: string;
  actionsClass?: string;
  primaryActionsClass?: string;
  primaryCardMedia?: boolean;
  primaryMediaClass?: string;
}

@component({
  tpl,
})
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
    this.elClass = [...this.elClass, "mdc-card"];
  }
}