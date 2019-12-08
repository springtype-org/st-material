import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {MwcBaseTextField} from "../mwc-base-textfield";
import {INPUT_PROPERTIES, MwcBaseTextFieldVariant} from "../mwc-base-textfield/mwc-base-text-field";
import {tsx} from "springtype/web/vdom";

export interface IMwcTextAreaAttrs {
    name?: string;
    label?: string | false;
    variant?: MwcBaseTextFieldVariant;
    ripple?: boolean;
    disabled?: boolean;
    value?: string;
    shaped?: boolean;
    fullwidth?: boolean;
    textareaRows?: number;
    textareaCols?: number;
}

@component
export class MwcTextArea extends st.component<IMwcTextAreaAttrs> implements ILifecycle, IMwcTextAreaAttrs {

    @ref
    mwcBaseTextFieldRef: MwcBaseTextField;

    @ref
    inputRef: MwcBaseTextField;

    @attr
    name: string = "";

    @attr
    label: string = "";

    @attr
    variant: MwcBaseTextFieldVariant = 'filled';

    @attr
    ripple: boolean = true;

    @attr
    disabled: boolean = false;

    @attr
    value: string = "";

    @attr
    shaped: boolean = false;

    @attr
    textareaRows: number = 2;

    @attr
    textareaCols: number = 40;

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
            this.el.classList.remove("mdc-text-field--disabled");
        }
    }

    onAfterInitialRender(): void {
        this.doDisable(this.disabled);

        this.mwcBaseTextFieldRef.onInputKeyUp({target: {value: this.value}})
    }

    render() {
        return <MwcBaseTextField class={["mwc-text-field--textarea"]}
                                 ref={{mwcBaseTextFieldRef: this}}
                                 label={this.label}
                                 variant={this.variant}
                                 shaped={this.shaped}>
            <textarea
                ref={{inputRef: this}}
                class="mdc-text-field__input"
                name={this.name}
                value={this.value}
                onKeyUp={(evt) => {this.mwcBaseTextFieldRef.onInputKeyUp(evt)}}
                onFocus={(evt) =>this.mwcBaseTextFieldRef.onInputFocus(evt)}
                onBlur={(evt) =>this.mwcBaseTextFieldRef.onInputBlur(evt)}
                rows={this.textareaRows}
                cols={this.textareaCols}
            />
        </MwcBaseTextField>
    }
}