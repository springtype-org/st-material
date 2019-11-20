import { tsx } from "springtype/web/vdom";
import { MwcButton } from "./mwc-button";

export default (component: MwcButton) => {
  const classesFixed = ["mdc-button"];
  const classesRipple = [];

  if (component.ripple) {
    classesRipple.push("mdc-button__ripple");
  }

  switch (component.variant) {
    case 'raised':
      classesFixed.push("mdc-button--raised");
      break;
    case 'unelevated':
      classesFixed.push("mdc-button--unelevated");
      break;
    case 'outlined':
      classesFixed.push("mdc-button--outlined");
      break;
  }

  if (component.dense) {
    classesFixed.push("mdc-button--dense");
  }

  if (component.shaped) {
    classesFixed.push("mwc-button--shaped");
  }

  const button = (
    <button ref={{buttonRef: component}} class={classesFixed}>
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
