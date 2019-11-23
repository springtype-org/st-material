import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { newUniqueComponentName, tsx } from "springtype/web/vdom";

export interface IMwcCheckboxAttrs {
  name?: string;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
  value?: string;
}

@component
export class MwcCheckbox extends st.component<IMwcCheckboxAttrs> {

  @ref
  formFieldRef: HTMLElement;

  @ref
  checkboxContainerRef: HTMLElement;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  disabled: boolean = false;

  @attr
  indeterminate: boolean = false;

  @attr
  checked: boolean = false;

  @attr
  value: string = "";
  
  inputId: string;

  onBeforeElCreate() {
    this.inputId = newUniqueComponentName();
  }

  render() {
    const classes = ["mdc-checkbox"];
    const input = <input type="checkbox" class="mdc-checkbox__native-control" id={this.inputId} />;

    if (this.disabled) {
      classes.push("mdc-checkbox--disabled");
      input.attributes.disabled = true;
    }

    if (this.checked === true) {
      input.attributes.checked = true;
      input.attributes.value = this.value || "on";
    }

    if (this.indeterminate) {
      input.attributes.indeterminate = true;
      input.attributes["aria-checked"] = "mixed";
    }

    if (this.name) {
      input.attributes.name = this.name;
    }

    if (this.value) {
      input.attributes.value = this.value;
    }

    return (
      <div ref={{ formFieldRef: this }} class="mdc-form-field">
        <div ref={{ checkboxContainerRef: this }} class={classes}>
          {input}
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark" />
          </div>
          <div class={['mdc-checkbox__ripple']} />
        </div>
        <label for={this.inputId}>{this.label}</label>
      </div>
    );
  }

}