import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {MwcFormField} from "../mwc-form-field";
import {IMwcFormFieldAttrs} from "../mwc-form-field/mwc-form-field";

export interface IMwcRadioFieldAttrs extends IMwcFormFieldAttrs {
    name?: string;
    checked?: boolean;
    value?: string;
}

const CSS_CLASSES = {
    DISABLED: 'mdc-radio--disabled',
};

@component
export class MwcRadioField extends MwcFormField<IMwcRadioFieldAttrs> implements ILifecycle {

    @ref
    radioRef: HTMLElement;

    @ref
    inputRef: HTMLElement;

    @attr
    name: string = "";

    @attr
    checked: boolean = false;

    @attr
    value: string = "on";

    doChecked(checked: boolean) {
        if (checked) {
            this.inputRef.setAttribute('checked', 'true');
        } else {
            this.inputRef.removeAttribute('checked');
        }
    }

    doName(name: string) {
        this.inputRef.setAttribute('name', name);
    }

    doValue(value: string) {
        this.inputRef.setAttribute('value', value);
    }

    doDisabled(disabled: boolean) {
        super.doDisabled(disabled);
        if (disabled) {
            this.radioRef.classList.add(CSS_CLASSES.DISABLED);
            this.inputRef.setAttribute('disabled', 'true');
        } else {
            this.radioRef.classList.remove(CSS_CLASSES.DISABLED);
            this.inputRef.removeAttribute('disabled');
        }
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        super.shouldAttributeChange(name, newValue, oldValue);
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'name':
                    this.doName(newValue);
                    break;
                case 'checked':
                    this.doChecked(newValue);
                    break;
                case 'value':
                    this.doValue(newValue);
                    break;
            }
        }
        return true;
    }

    renderInnerElement() {
        const input = <input class="mdc-radio__native-control"
                             ref={{inputRef: this}} type="radio" id={this.for}
                             name={this.name} value={this.value}/>;

        const classes = ["mdc-radio"];
        if (this.disabled) {
            classes.push(CSS_CLASSES.DISABLED);
            input.attributes.disabled = true;
        }

        if (this.checked) {
            input.attributes.checked = true;
        }

        return <div ref={{radioRef: this}} class={classes}>
            {input}
            <div class="mdc-radio__background">
                <div class="mdc-radio__outer-circle"/>
                <div class="mdc-radio__inner-circle"/>
            </div>
            <div class={['mdc-radio__ripple']}/>
        </div>;
    }

}