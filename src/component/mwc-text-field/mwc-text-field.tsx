import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {MwcTextFieldVariant} from "./mwc-text-field-variant";
import {MwcBaseTextField} from "../mwc-base-textfield";
import {INPUT_PROPERTIES, MwcBaseTextFieldVariant} from "../mwc-base-textfield/mwc-base-text-field";
import {tsx} from "springtype/web/vdom";

export type MwcBaseTextFieldInputTypes = "password" | "text";

export interface IMwcTextFieldAttrs {
    name?: string;
    label?: string | false;
    variant?: MwcTextFieldVariant;
    ripple?: boolean;
    disabled?: boolean;
    value?: string;
    shaped?: boolean;
    type?: MwcBaseTextFieldInputTypes;
}

@component
export class MwcTextField extends st.component<IMwcTextFieldAttrs> implements ILifecycle, IMwcTextFieldAttrs {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";

    @ref
    mwcBaseTextFieldRef!: MwcBaseTextField;

    @ref
    inputRef!: HTMLInputElement;

    @attr
    name: string = "";

    @attr
    label: string = "";

    @attr
    variant: MwcTextFieldVariant = MwcTextFieldVariant.FILLED;

    @attr
    disabled: boolean = false;

    @attr
    value: string = "";

    @attr
    shaped: boolean = false;

    @attr
    type: MwcBaseTextFieldInputTypes = 'text';

    trailingIconSlot: any | false = false;
    leadingIconSlot: any | false = false;

    onBeforeRender(): void {
        this.trailingIconSlot = this.virtualNode.slotChildren[MwcTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconSlot = this.virtualNode.slotChildren[MwcTextField.SLOT_NAME_LEADING_ICON];
    }

    getAttribute(name: string): any {
        if (this.mwcBaseTextFieldRef && INPUT_PROPERTIES.indexOf(name) > 0) {
            return this.mwcBaseTextFieldRef.getAttribute(name);
        }
        return super.getAttribute(name);
    }

    doDisable(disabled: boolean) {
        this.mwcBaseTextFieldRef.doDisable(disabled);
        if (disabled) {
             this.inputRef.setAttribute('disabled', 'true')
        } else {
            this.inputRef.removeAttribute('disabled')
        }
    }

    onAfterInitialRender(): void {
        this.doDisable(this.disabled);

        this.mwcBaseTextFieldRef.onInputKeyUp({target: {value: this.value}})
    }

    render() {
        let fullwidth = false;
        let variant: MwcBaseTextFieldVariant = 'filled';
        switch (this.variant) {
            case MwcTextFieldVariant.FILLED:
                //nothing to do
                break;
            case MwcTextFieldVariant.FILLED_FULL_WIDTH:
                fullwidth = true;
                break;
            case MwcTextFieldVariant.OUTLINED:
                variant = 'outlined';
                break;
        }

        return (
            <MwcBaseTextField
                ref={{mwcBaseTextFieldRef: this}}
                variant={variant}
                label={this.label}
                value={this.value}
                shaped={this.shaped}
                fullWidth={fullwidth}
            >
              <input
                    ref={{inputRef: this}}
                    type={this.type}
                    class="mdc-text-field__input"
                    name={this.name}
                    value={this.value}
                    onKeyUp={(evt) => {this.mwcBaseTextFieldRef.onInputKeyUp(evt)}}
                    onFocus={(evt)=> {this.mwcBaseTextFieldRef.onInputFocus(evt)}}
                    onBlur={(evt)=> {this.mwcBaseTextFieldRef.onInputBlur(evt)}}
                />
              {this.leadingIconSlot?<template slot={MwcBaseTextField.SLOT_NAME_LEADING_ICON}>{this.leadingIconSlot.children}</template>:<fragment/>}
              {this.trailingIconSlot?<template slot={MwcBaseTextField.SLOT_NAME_TRAILING_ICON}>{this.trailingIconSlot.children}</template>:<fragment/>}
            </MwcBaseTextField>
        );
    }
}