import { MDCCheckbox } from "@material/checkbox";
import { MDCFormField } from "@material/form-field";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { newUniqueComponentName, tsx } from "springtype/web/vdom";

@component
export class MwcCheckbox extends st.component {
  @ref
  input: HTMLElement;

  @ref
  formFieldRef: HTMLElement;

  @ref
  checkboxContainerRef: HTMLElement;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  ripple: boolean = true;

  @attr
  disabled: boolean = false;

  @attr
  indeterminate: boolean = false;

  @attr
  checked: boolean = false;

  @attr
  value: string = "";

  inputId: string;
  checkboxId: string;
  formFieldId: string;

  mdcCheckbox: MDCCheckbox;
  mdcFormField: MDCFormField;
  mdcRipple: MDCRipple;

  render() {
    const classes = ["mdc-checkbox"];
    const rippleClass = [];
    const input = <input type="checkbox" class="mdc-checkbox__native-control" id={this.inputId} />;

    if (this.ripple) {
      rippleClass.push("mdc-checkbox__ripple");
    }

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
      <div id={this.formFieldId} ref={{ formFieldRef: this }} class="mdc-form-field">
        <div id={this.checkboxId} ref={{ checkboxContainerRef: this }} class={classes}>
          {input}
          <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
              <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark" />
          </div>
          <div class={rippleClass} />
        </div>
        <label for={this.inputId}>{this.label}</label>
      </div>
    );
  }

  onAfterElCreate() {
    this.inputId = newUniqueComponentName();
    this.checkboxId = newUniqueComponentName();
    this.formFieldId = newUniqueComponentName();
  }

  onAfterRender(): void {
    this.mdcCheckbox = new MDCCheckbox(this.checkboxContainerRef);
    this.mdcFormField = new MDCFormField(this.formFieldRef);
    this.mdcFormField.input = this.mdcCheckbox;

    if (this.ripple) {
      this.mdcRipple = new MDCRipple(this.checkboxContainerRef);
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcCheckbox: Partial<MwcCheckbox>;
    }
  }
}
