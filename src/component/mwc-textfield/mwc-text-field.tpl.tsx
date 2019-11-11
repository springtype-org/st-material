import {MwcTextField} from "./mwc-text-field";
import {tsx} from 'springtype/web/vdom';
import {MwcTextFieldVariant} from "./mwc-text-field-variant";
import {getFilledTextField} from "./mwc-text-field-filled.tpl";
import {getOutlinedTextField} from "./mwc-text-field-outlined.tpl";
import * as mwcTextField from './mwc-text-field.tss.scss'

export default (component: MwcTextField) => {
    const classesFixed = ['mdc-text-field'];

    if (component.disabled) {
        classesFixed.push('mdc-text-field--disabled');
    }
    if (component.label === false) {
        classesFixed.push('mdc-text-field--no-label');
    }
    switch (component.variant) {
        case MwcTextFieldVariant.FILLED:
        case MwcTextFieldVariant.FILLED_FULL_WIDTH:
            // not an error
            classesFixed.push('mdc-ripple-upgraded');
            break;
        case MwcTextFieldVariant.OUTLINED:
            classesFixed.push('mdc-text-field--outlined');
            break;
    }
    if (component.shaped && (component.variant === MwcTextFieldVariant.FILLED || component.variant === MwcTextFieldVariant.FILLED_FULL_WIDTH)) {
        classesFixed.push('mwc-text-field--filled-shaped', mwcTextField.mwcTextFieldFilledShaped);
    }

    if (component.variant === MwcTextFieldVariant.FILLED_FULL_WIDTH) {
        classesFixed.push('mdc-text-field--fullwidth');
    }

    const inputElement = <input id={component.inputId} class="mdc-text-field__input" name={component.name}
                                value={component.value}/>;

    if (component.disabled) {
        classesFixed.push('mdc-text-field--disabled');
        inputElement.attributes.disabled = true;
    }

    if (component.leadingIconActive) {
        classesFixed.push('mdc-text-field--with-leading-icon')
    }
    if (component.trailingIconActive) {
        classesFixed.push('mdc-text-field--with-trailing-icon')
    }

    return <div id={component.textFieldId} class={classesFixed}>
        <slot name={MwcTextField.SLOT_NAME_LEADING_ICON}/>
        {component.variant === MwcTextFieldVariant.FILLED || component.variant == MwcTextFieldVariant.FILLED_FULL_WIDTH
            ? getFilledTextField(component, inputElement)
            : getOutlinedTextField(component, inputElement)}
        <slot name={MwcTextField.SLOT_NAME_TRAILING_ICON}/>
    </div>
}

