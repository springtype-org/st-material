import { MwcBaseTextField } from "./mwc-base-text-field";
import { tsx } from "springtype/web/vdom";
import { IVirtualNode } from "springtype/web/vdom/interface";

export const getOutlinedTextField = (component: MwcBaseTextField, inputElement: IVirtualNode) => {
  const classLeading = ["mdc-notched-outline__leading"];
  const classTrailing = ["mdc-notched-outline__trailing"];
  if (component.shaped) {
    classLeading.push("mdc-notched-outline--shaped__leading");
    classTrailing.push("mdc-notched-outline--shaped__trailing");
  }
  return (
    <fragment>
      {inputElement}
      <div class="mdc-notched-outline">
        <div class={classLeading} />
        <div class="mdc-notched-outline__notch">
          <label class="mdc-floating-label" for={component.inputId}>
            {component.label}
          </label>
        </div>
        <div class={classTrailing} />
      </div>
    </fragment>
  );
};
