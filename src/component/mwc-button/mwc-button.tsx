import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";
import {tsx} from "springtype/web/vdom";
import {attr, component} from "springtype/web/component";
import {ref} from "springtype/core/ref";
import './mwc-button.css'

export type MwcButtonVariant = "text" | "raised" | "unelevated" | "outlined";

const CSS_CLASSES = {
    RIPPLE_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    OUTLINED: 'mdc-button--outlined',
    RAISED: 'mdc-button--raised',
    UNELEVATED: 'mdc-button--unelevated',
    DENSE: 'mdc-button--springtype-dense'
};

interface IMwcButtonAttrs {
    label?: string;
    variant?: MwcButtonVariant;
    disabled?: boolean;
    dense?: boolean;
}

@component({tag: 'button'})
export class MwcButton extends st.component<IMwcButtonAttrs> implements ILifecycle, IMwcButtonAttrs {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";

    @ref
    labelRef!: HTMLSpanElement;

    @attr
    label: string = "";

    @attr
    variant: MwcButtonVariant = "text";

    @attr
    disabled: boolean = false;

    @attr
    dense: boolean = false;

    class = ["mdc-button"];

    onFocus() {
        this.el.classList.add(CSS_CLASSES.RIPPLE_FOCUSED);
    }

    onBlur() {
        this.el.classList.remove(CSS_CLASSES.RIPPLE_FOCUSED);
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'disabled':
                    this.doDisabled(newValue, false);
                    break;
                case 'variant':
                    this.doVariant(newValue, false);
                    break;
                case 'dense':
                    this.doDense(newValue, false);
                    break;
                case 'label':
                    this.doLabel(newValue, false);
                    break;
            }
        }
        return true;
    }

    doDisabled(disabled: boolean, setAttribute: boolean = true) {
        if (setAttribute) {
            this.disabled = disabled;
        }
        if (disabled) {
            this.el.setAttribute('disabled', 'true');

        } else {
            this.el.removeAttribute('disabled');
        }
    }

    doVariant(variant: MwcButtonVariant, setAttribute: boolean = true) {
        if (setAttribute) {
            this.variant = variant;
        }
        switch (variant) {
            case 'raised':
                this.el.classList.add(CSS_CLASSES.RAISED);
                this.el.classList.remove(CSS_CLASSES.OUTLINED, CSS_CLASSES.UNELEVATED);
                break;
            case 'unelevated':
                this.el.classList.add(CSS_CLASSES.UNELEVATED);
                this.el.classList.remove(CSS_CLASSES.OUTLINED, CSS_CLASSES.RAISED);
                break;
            case 'outlined':
                this.el.classList.add(CSS_CLASSES.OUTLINED);
                this.el.classList.remove(CSS_CLASSES.RAISED, CSS_CLASSES.UNELEVATED);
                break;
        }
    }

    doDense(dense: boolean, setAttribute: boolean = true) {
        if (setAttribute) {
            this.dense = dense;
        }
        if (dense) {
            this.el.classList.add(CSS_CLASSES.DENSE);
        } else {
            this.el.classList.remove(CSS_CLASSES.DENSE);
        }
    }

    doLabel(label: string, setAttribute: boolean = true) {
        if (setAttribute) {
            this.label = label;
        }
        this.labelRef.innerText = label;
    }

    shouldRender(): boolean {
        return !this.INTERNAL.notInitialRender;
    }

    onAfterInitialRender(): void {
        this.doVariant(this.variant);
        this.doDense(this.dense);
        this.doDisabled(this.disabled);

        this.el.addEventListener('focus', (evt) => {
            this.onFocus()
        });
        this.el.addEventListener('blur', (evt) => {
            this.onBlur()
        });
    }

    render() {
        return <fragment>
            <span class={['mdc-button__ripple']}/>
            {this.renderSlot(MwcButton.SLOT_NAME_LEADING_ICON)}
            <span class="mdc-button__label" ref={{labelRef: this}}>{this.label}</span>
            {this.renderSlot(MwcButton.SLOT_NAME_TRAILING_ICON)}
            {this.renderChildren()}
        </fragment>
    }


}
