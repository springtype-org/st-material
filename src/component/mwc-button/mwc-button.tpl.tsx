import { tsx } from "springtype/web/vdom";
import { MwcButton } from "./mwc-button";
import { MwcButtonVariant } from "./mwc-button-variant-type";
import * as mwcButton from "./mwc-button.tss.scss";

export default (component: MwcButton) => {
  const classesFixed = ["mdc-button"];
  const classesRipple = [];

  if (component.ripple) {
    classesRipple.push("mdc-button__ripple");
  }
  switch (component.variant) {
    case MwcButtonVariant.RAISED:
      classesFixed.push("mdc-button--raised");
      break;
    case MwcButtonVariant.UNELEVATED:
      classesFixed.push("mdc-button--unelevated");
      break;
    case MwcButtonVariant.OUTLINED:
      classesFixed.push("mdc-button--outlined");
      break;
    //Nothing for text
  }

  if (component.dense) {
    classesFixed.push("mdc-button--dense");
  }

  if (component.shaped) {
    classesFixed.push("mwc-button--shaped", mwcButton.mwcButtonShaped);
  }

  const button = (
    <button id={component.buttonId} class={classesFixed}>
      <span class={classesRipple} />
      {component.renderSlot(MwcButton.SLOT_NAME_LEADING_ICON)}
      <span class="mdc-button__label">{component.label}</span>
      {component.renderSlot(MwcButton.SLOT_NAME_TRAILING_ICON)}
      {component.renderChildren()}
    </button>
  );

  if (component.disabled) {
    button.attributes.disabled = true;
  }
  return button;
};
