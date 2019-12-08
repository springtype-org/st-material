import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import "./ripple-checkbox.css";
import {ILifecycle} from "springtype/web/component/interface";

const CSS_CLASSES = {
    DISABLED: 'mdc-checkbox--disabled',
    SELECTED: 'mdc-checkbox--selected',
    RIPPLE_FOREGROUND_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    RIPPLE_FOREGROUND_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ANIMATION_UNCHECK: 'mdc-checkbox--anim-checked-unchecked',
    ANIMATION_CHECK: 'mdc-checkbox--anim-unchecked-checked',
    ANIMATION_INDETERMINATE: 'mdc-checkbox--anim-indeterminate-checked'
};

export interface IMwcCheckboxAttrs {
    name?: string;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    value?: string;
}

@component
export class MwcCheckbox extends st.component<IMwcCheckboxAttrs> implements ILifecycle, IMwcCheckboxAttrs{

    @ref
    formFieldRef: HTMLElement;

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
    value: string = "";

    inputId: string;

    animationLength = 250;

    onBeforeElCreate() {
        this.inputId = newUniqueComponentName();
    }

    doValue(value: string) {
        this.inputRef.value = value;
    }

    doName(name: string) {
        this.inputRef.name = name;
    }

    doDisabled(disabled: boolean) {
        if (disabled) {
            this.formFieldRef.classList.add(CSS_CLASSES.DISABLED);
            this.inputRef.setAttribute('disabled', "true");

        } else {
            this.formFieldRef.classList.remove(CSS_CLASSES.DISABLED);
            this.inputRef.removeAttribute('disabled');
        }
    }

    doCheck(value?: string) {
        this.inputRef.checked = true;
        this.doValue(value || this.value || 'on');
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
        this.inputRef.checked = false;
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

    shouldRender(): boolean {
        return !this.INTERNAL.notInitialRender;
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'name':
                    this.doName(newValue);
                    break;
                case 'disabled':
                    this.doDisabled(newValue);
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
        }
        return true;
    }

    onAfterInitialRender(): void {
        this.doName(this.name);
        this.doValue(this.value);
        this.doIndeterminate(this.indeterminate);

        if (this.checked) {
            this.doCheck()
        } else {
            this.doUnCheck()
        }
        this.doDisabled(this.disabled);
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

    render() {
        return (
            <div ref={{formFieldRef: this}} class="mdc-form-field">
                <div ref={{checkboxContainerRef: this}}
                     class="mdc-checkbox mdc-checkbox--upgraded mdc-ripple-upgraded mdc-ripple-upgraded--unbounded mdc-checkbox--springtype-ripple">
                    <input ref={{inputRef: this}} type="checkbox"
                           class="mdc-checkbox__native-control" id={this.inputId} onFocus={() => {
                        this.doFocus()
                    }} onBlur={() => {
                        this.doBlur()
                    }} onClick={() => {
                        this.doToggle()
                    }}/>
                    <div class="mdc-checkbox__background">
                        <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                            <path class="mdc-checkbox__checkmark-path" fill="none"
                                  d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div class="mdc-checkbox__mixedmark"/>
                    </div>
                    <div class={['mdc-checkbox__ripple']}/>
                </div>
                <label for={this.inputId}>{this.label}</label>
            </div>
        );
    }

}