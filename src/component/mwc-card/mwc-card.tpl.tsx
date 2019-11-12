import { tsx } from "springtype/web/vdom";
import { MwcList } from "../list/mwc-list/mwc-list";
import { MwcCard } from "./mwc-card";
import { MwcButton } from "../mwc-button/mwc-button";

export default (component: MwcCard) => {
  const actionsClasses = ["mdc-card__actions"];
  const primaryActionsClasses = ["mdc-card__primary-action"];
  const primaryCardMediaClasses = ["mdc-card__media"];

  if (component.actionsClass) {
    actionsClasses.push(component.actionsClass);
  }

  if (component.primaryActionsClass) {
    primaryActionsClasses.push(component.primaryActionsClass);
  }

  if (component.primaryMediaClass) {
    primaryCardMediaClasses.push(component.primaryMediaClass);
  }

  const primaryContent = component.primaryCardMedia ? <div class={primaryCardMediaClasses}>{component.renderSlot(MwcCard.SLOT_NAME_PRIMARY)}</div> : component.renderSlot(MwcCard.SLOT_NAME_PRIMARY);

  return (
    <fragment>
      <div class={primaryActionsClasses}>{primaryContent}</div>
      <div class={actionsClasses}>{component.renderSlot(MwcCard.SLOT_NAME_ACTION)}</div>
    </fragment>
  );
};
