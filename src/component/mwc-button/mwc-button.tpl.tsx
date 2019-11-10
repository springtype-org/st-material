import {MwcButton} from "./mwc-button";
import {tsx} from 'springtype/web/vdom';
import {ButtonVariant} from "./mwc-button-variant-type";
import './mwc-button.tss.scss'

export default (component: MwcButton) => {
    const classesFixed = ['mdc-button'];
    const classesRipple = [];

    if (component.ripple) {
        classesRipple.push('mdc-button__ripple');
    }
    switch (component.variant) {
        case ButtonVariant.RAISED:
            classesFixed.push('mdc-button--raised');
            break;
        case ButtonVariant.UNELEVATED:
            classesFixed.push('mdc-button--unelevated');
            break;
        case ButtonVariant.OUTLINED:
            classesFixed.push('mdc-button--outlined');
            break;
        //Nothing for text
    }

    if (component.dense) {
        classesFixed.push('mdc-button--dense');
    }

    if (component.shaped) {
        classesFixed.push('mwc-button--shaped');
    }

    const button = <button id={component.buttonId} class={classesFixed}>
        <span class={classesRipple}/>
        <slot name="leading-icon"/>
        <span class="mdc-button__label">{component.label}</span>
        <slot name="trailing-icon"/>
        <slot/>
    </button>;

    if (component.disabled) {
        button.attributes.disabled = true;
    }
    return button;
}

