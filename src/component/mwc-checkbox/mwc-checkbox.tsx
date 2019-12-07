import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import "./ripple-checkbox.css";

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
            this.formFieldRef.classList.add("mdc-checkbox--disabled");
            this.inputRef.setAttribute('disabled', "true");

        } else {
            this.formFieldRef.classList.remove("mdc-checkbox--disabled");
            this.inputRef.removeAttribute('disabled');
        }
    }

    doCheck(value?: string) {
        this.inputRef.checked = true;
        this.doValue(value || this.value || 'on');
        this.checkboxContainerRef.classList.add('mdc-checkbox--selected');

        this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-activation');
        this.checkboxContainerRef.classList.add('mdc-checkbox--anim-unchecked-checked');
        setTimeout(() => {
            this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-deactivation');
            setImmediate(() => {
                this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-deactivation');
                this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-activation');
                this.checkboxContainerRef.classList.remove('mdc-checkbox--anim-unchecked-checked');
            });
        }, 250);

    }

    doUnCheck() {
        this.inputRef.checked = false;
        this.checkboxContainerRef.classList.remove('mdc-checkbox--selected');

            this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-activation');
            this.checkboxContainerRef.classList.add('mdc-checkbox--anim-checked-unchecked');
            setTimeout(() => {
                this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-deactivation');
                setImmediate(() => {
                    this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-deactivation');
                    this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-activation');
                    this.checkboxContainerRef.classList.remove('mdc-checkbox--anim-checked-unchecked');
                });
            }, 200);

    }


    doIndeterminate(indeterminate: boolean) {
        if (indeterminate) {
            this.inputRef.indeterminate = true;
            this.inputRef.setAttribute("aria-checked", "mixed");
        } else {
            this.inputRef.removeAttribute("aria-checked");
            this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-activation');
            this.checkboxContainerRef.classList.add('mdc-checkbox--anim-indeterminate-checked');

            setTimeout(() => {
                this.checkboxContainerRef.classList.add('mdc-ripple-upgraded--foreground-deactivation');
                setImmediate(() => {
                    this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-deactivation');
                    this.checkboxContainerRef.classList.remove('mdc-ripple-upgraded--foreground-activation');
                    this.checkboxContainerRef.classList.remove('mdc-checkbox--anim-indeterminate-checked');
                });
            }, 200);

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