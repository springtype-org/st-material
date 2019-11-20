import { MwcTextField } from "./mwc-text-field";
import { tsx } from "springtype/web/vdom";
import { MwcBaseTextField } from "../mwc-base-textfield";
import { MwcBaseTextFieldVariant } from "../mwc-base-textfield/mwc-base-text-field-variant";
import { MwcTextFieldVariant } from "./mwc-text-field-variant";

export default (component: MwcTextField) => {
  let leadingIconSlotChildren = "";
  if (component.leadingIconSlot) {
    leadingIconSlotChildren = (
      <template slot={MwcBaseTextField.SLOT_NAME_LEADING_ICON}>{component.leadingIconSlot.children}</template>
    );
  }
  let trailingIconSlotChildren = "";
  if (component.trailingIconSlot) {
    trailingIconSlotChildren = (
      <template slot={MwcBaseTextField.SLOT_NAME_TRAILING_ICON}>{component.trailingIconSlot.children}</template>
    );
  }

  let fullwidth = false;
  let variant: MwcBaseTextFieldVariant = MwcBaseTextFieldVariant.FILLED;
  switch (component.variant) {
    case MwcTextFieldVariant.FILLED:
      //nothing to do
      break;
    case MwcTextFieldVariant.FILLED_FULL_WIDTH:
      fullwidth = true;
      break;
    case MwcTextFieldVariant.OUTLINED:
      variant = MwcBaseTextFieldVariant.OUTLINED;
      break;
  }

  return (
    <MwcBaseTextField
      ref={{ mwcBaseTextFieldRef: component }}
      type={component.type}
      name={component.name}
      label={component.label}
      variant={variant}
      ripple={component.ripple}
      disabled={component.disabled}
      value={component.value}
      shaped={component.shaped}
      fullWidth={fullwidth}
    >
      {leadingIconSlotChildren}
      {trailingIconSlotChildren}
    </MwcBaseTextField>
  );
};
