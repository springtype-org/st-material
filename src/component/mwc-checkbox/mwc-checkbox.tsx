import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import "./ripple-checkbox.css";
import {ILifecycle} from "springtype/web/component/interface";
import {IVirtualNode} from "springtype/web/vdom/interface";
import {MwcFormField} from "../mwc-form-field";
import {IMwcFormFieldAttrs} from "../mwc-form-field/mwc-form-field";

const CSS_CLASSES = {
    DISABLED: 'mdc-checkbox--disabled',
    SELECTED: 'mdc-checkbox--selected',
    RIPPLE_FOREGROUND_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    RIPPLE_FOREGROUND_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ANIMATION_UNCHECK: 'mdc-checkbox--anim-checked-unchecked',
    ANIMATION_CHECK: 'mdc-checkbox--anim-unchecked-checked',
    ANIMATION_INDETERMINATE: 'mdc-checkbox--anim-indeterminate-checked'
};

export interface IMwcCheckboxAttrs extends IMwcFormFieldAttrs {
    name?: string;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    value?: string;
}

@component
export class MwcCheckbox extends MwcFormField<IMwcCheckboxAttrs> implements ILifecycle, IMwcCheckboxAttrs {

    @ref
    inputRef: HTMLInputElement;

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
    value: string = "on";

    animationLength = 250;

    disabledClasses: Array<string> = [CSS_CLASSES.DISABLED];

    doValue(value: string) {
        this.inputRef.value = value;
    }

    doName(name: string) {
        this.inputRef.name = name;
    }

    doDisabled(disabled: boolean) {
        super.doDisabled(disabled);
        if (disabled) {
            this.inputRef.setAttribute('disabled', "true");

        } else {
            this.inputRef.removeAttribute('disabled');
        }
    }

    doCheck(value?: string) {
        this.inputRef.setAttribute('checked', 'true');
        this.doValue(value || this.value);
        this.checkboxContainerRef.classList.add(CSS_CLASSES.SELECTED);

        this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
        this.checkboxContainerRef.classList.add(CSS_CLASSES.ANIMATION_CHECK);
        setTimeout(() => {
            this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
            setImmediate(() => {
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.ANIMATION_CHECK);
            });
        }, this.animationLength);


    }

    doUnCheck() {
        this.inputRef.removeAttribute('checked');
        this.checkboxContainerRef.classList.remove(CSS_CLASSES.SELECTED);

        this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
        this.checkboxContainerRef.classList.add(CSS_CLASSES.ANIMATION_UNCHECK);
        setTimeout(() => {
            this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
            setImmediate(() => {
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
                this.checkboxContainerRef.classList.remove(CSS_CLASSES.ANIMATION_UNCHECK);
            });
        }, this.animationLength);

    }


    doIndeterminate(indeterminate: boolean) {
        if (indeterminate) {
            this.inputRef.indeterminate = true;
            this.inputRef.setAttribute("aria-checked", "mixed");
        } else {
            this.inputRef.removeAttribute("aria-checked");
            this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
            this.checkboxContainerRef.classList.add(CSS_CLASSES.ANIMATION_INDETERMINATE);

            setTimeout(() => {
                this.checkboxContainerRef.classList.add(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
                setImmediate(() => {
                    this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_DEACTIVATION);
                    this.checkboxContainerRef.classList.remove(CSS_CLASSES.RIPPLE_FOREGROUND_ACTIVATION);
                    this.checkboxContainerRef.classList.remove(CSS_CLASSES.ANIMATION_INDETERMINATE);
                });
            }, this.animationLength);

        }
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        super.shouldAttributeChange(name, newValue, oldValue);
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'name':
                    this.doName(newValue);
                    break;
                case 'value':
                    this.doValue(newValue);
                    break;
                case 'indeterminate':
                    this.doIndeterminate(newValue);
                    break;
                case 'checked':
                    if (newValue) {
                        this.doCheck();
                    } else {
                        this.doUnCheck();
                    }
                    break;
            }
            return false;
        }
        return true;
    }

    doToggle() {
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = !this.checked;
    }

    doFocus() {
        this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--background-focused');
    }

    doBlur() {
        this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--background-focused');
    }


    renderInnerElement() {
        const checkboxContainerClasses = ['mdc-checkbox', 'mdc-checkbox--upgraded', 'mdc-ripple-upgraded', 'mdc-ripple-upgraded--unbounded', 'mdc-checkbox--springtype-ripple'];
        const input: IVirtualNode = <input ref={{inputRef: this}} type="checkbox" name={this.name} value={this.value}
                                           class="mdc-checkbox__native-control" id={this.for} onFocus={() => {
            this.doFocus()
        }} onBlur={() => {
            this.doBlur()
        }} onclick={() => {
            this.doToggle()
        }}/>;

        if (this.indeterminate) {
            input.attributes['indeterminate'] = true;
            input.attributes["aria-checked"] = "mixed";
        }

        if (this.checked) {
            input.attributes['checked'] = true;
            checkboxContainerClasses.push(CSS_CLASSES.SELECTED)
        }

        if (this.disabled) {
            input.attributes['disabled'] = true;
        }

        return <div ref={{checkboxContainerRef: this}}
                    class={checkboxContainerClasses}>
            {input}
            <div class="mdc-checkbox__background">
                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path class="mdc-checkbox__checkmark-path" fill="none"
                          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
                <div class="mdc-checkbox__mixedmark"/>
            </div>
            <div class={['mdc-checkbox__ripple']}/>
        </div>;
    }

}