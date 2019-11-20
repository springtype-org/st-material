import { MwcBaseTextField } from "./mwc-base-text-field";
import { tsx } from "springtype/web/vdom";
import { IVirtualNode } from "springtype/web/vdom/interface";

export const getFilledTextField = (component: MwcBaseTextField, inputElement: IVirtualNode) => {
  return (
    <fragment>
      {inputElement}
      <label class="mdc-floating-label" for={component.inputId}>
        {component.label}
      </label>
      <div class="mdc-line-ripple" />
    </fragment>
  );
};
