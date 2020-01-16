import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {MwcBaseTextField} from "../mwc-base-textfield";
import {IMwcBaseTextFieldAttrs} from "../mwc-base-textfield/mwc-base-text-field";
import {tsx} from "springtype/web/vdom";
import './mwc-text-area.css'

export interface IMwcTextAreaAttrs extends IMwcBaseTextFieldAttrs {
    rows?: number;
    cols?: number;
}

@component
export class MwcTextArea extends MwcBaseTextField<IMwcTextAreaAttrs> implements ILifecycle, IMwcTextAreaAttrs {

    @ref
    inputRef!: HTMLInputElement;

    @attr
    rows: number = 1;

    @attr
    cols: number = 100;

    class = ['mdc-text-field', 'mwc-text-field--textarea'];


    doDisable(disabled: boolean) {
        super.doDisable(disabled);
        if (disabled) {
            this.inputRef.setAttribute('disabled', 'true')
        } else {
            this.inputRef.removeAttribute('disabled')
        }
    }

    doName(name: string) {
        this.inputRef.setAttribute('name', name);
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        super.shouldAttributeChange(name, newValue, oldValue);
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'rows':
                    this.doRows(newValue);
                    break;
                case 'cols':
                    this.doCols(newValue);
                    break;
            }
        }
        return true;
    }

    doRows(rows: number) {
        this.inputRef.setAttribute('rows', rows.toString());
    }

    doCols(cols: number) {
        this.inputRef.setAttribute('cols', cols.toString());
    }

    shouldRender(): boolean {
        return super.shouldRender();
    }

    onAfterInitialRender(): void {
        super.onAfterInitialRender();
        this.inputRef.id = this.inputId;
        this.doDisable(this.disabled);
        this.doName(this.name);
            this.doValue(this.inputRef.value);
    }

    getInputElement() {
        return <textarea ref={{inputRef: this}}
                         class="mdc-text-field__input"
                         name={this.name}
                         onKeyUp={(evt) => {
                             this.onInputKeyUp(evt)
                         }}
                         onFocus={(evt) => {
                             this.onInputFocus(evt)
                         }}
                         onBlur={(evt) => {
                             this.onInputBlur(evt)
                         }}
                         rows={this.rows}
                         cols={this.cols}>
        {this.renderChildren()}
        </textarea>;
    }
}