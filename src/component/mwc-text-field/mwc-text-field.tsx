import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {MwcBaseTextField} from "../mwc-base-textfield";
import {IMwcBaseTextFieldAttrs} from "../mwc-base-textfield/mwc-base-text-field";
import {tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";
import {AttrType} from "springtype/web/component/trait/attr";

export type MwcBaseTextFieldInputTypes = "password" | "text";

export interface IMwcTextFieldAttrs extends IMwcBaseTextFieldAttrs {
    value?: string;
    type?: MwcBaseTextFieldInputTypes;
}

@component
export class MwcTextField extends MwcBaseTextField<IMwcTextFieldAttrs> implements ILifecycle, IMwcTextFieldAttrs {

    @ref
    inputRef!: HTMLInputElement;

    @attr(AttrType.DOM_TRANSPARENT)
    value: string = "";

    @attr
    type: MwcBaseTextFieldInputTypes = 'text';

    doDisable(disabled: boolean) {
        super.doDisable(disabled);
        if (disabled) {
            this.inputRef.setAttribute('disabled', 'true')
        } else {
            this.inputRef.removeAttribute('disabled')
        }
    }

    doValue(value: string) {
        super.doValue(value);
        this.inputRef.setAttribute('value', value);
    }

    doName(name: string) {
        this.inputRef.setAttribute('name', name);
    }

    doType(type: MwcBaseTextFieldInputTypes) {
        this.inputRef.setAttribute('type', type);
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        super.shouldAttributeChange(name, newValue, oldValue);
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'type':
                    this.doType(newValue);
                    break;
                case 'value':
                    this.doValue(newValue);
                    break;
            }
        }
        return true;
    }

    shouldRender(): boolean {
        return super.shouldRender();
    }

    onAfterInitialRender(): void {
        super.onAfterInitialRender();
        this.inputRef.id = this.inputId;
        super.doValue(this.value);
        this.doDisable(this.disabled);
    }

    getInputElement(): IVirtualNode | Array<IVirtualNode> {
        return <input ref={{inputRef: this}}
                      type={this.type}
                      class="mdc-text-field__input"
                      name={this.name}
                      value={this.value}
                      onKeyUp={(evt) => {
                          this.value = (evt.target as any).value;
                          this.onInputKeyUp(evt)
                      }}
                      onFocus={(evt) => {
                          this.onInputFocus(evt)
                      }}
                      onBlur={(evt) => {
                          this.onInputBlur(evt)
                      }}
        />
    }
}