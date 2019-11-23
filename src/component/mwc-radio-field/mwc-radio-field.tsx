import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";
import {IVirtualNodeAttributes} from "springtype/web/vdom/interface/ivirtual-node";

export interface IMwcRadioFieldAttrs {
  name?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
}

@component
export class MwcRadioField extends st.component<IMwcRadioFieldAttrs> implements ILifecycle {
  @ref
  radioRef: HTMLElement;

  @ref
  formFieldRef: HTMLElement;

  @attr
  name: string = "";

  @attr
  label: string = "";

  @attr
  disabled: boolean = false;

  @attr
  checked: boolean = false;

  @attr
  value: string = "";

  inputId: string;


  onBeforeElCreate() {
    this.inputId = newUniqueComponentName();
  }
  
  render(): IVirtualNode<IVirtualNodeAttributes> | Array<IVirtualNode> {
    const classes = ["mdc-radio"];
    const rippleClass = [];

    const input = (
        <input class="mdc-radio__native-control" ref={{ checkbox: this }} type="radio" id={this.inputId} />
    );


    if (this.disabled) {
      classes.push("mdc-radio--disabled");
      input.attributes.disabled = true;
    }

    if (this.checked) {
      input.attributes.checked = true;
      input.attributes.value = this.value || "on";
    }

    if (this.name) {
      input.attributes.name = this.name;
    }

    if (this.value) {
      input.attributes.value = this.value;
    }

    return (
        <div ref={{ formFieldRef: this }} class="mdc-form-field">
          <div ref={{ radioRef: this }} class={classes}>
            {input}
            <div class="mdc-radio__background">
              <div class="mdc-radio__outer-circle" />
              <div class="mdc-radio__inner-circle" />
            </div>
            <div class={['mdc-radio__ripple']} />
          </div>
          <label for={this.inputId}>{this.label}</label>
        </div>
    );
  }


}