import {MwcBaseTextField} from "./mwc-base-text-field";
import {tsx} from 'springtype/web/vdom';
import {MwcBaseTextFieldVariant} from "./mwc-base-text-field-variant";
import {getFilledTextField} from "./mwc-base-text-field-filled.tpl";
import {getOutlinedTextField} from "./mwc-base-text-field-outlined.tpl";
import * as mwcBaseTextField from './mwc-base-text-field.tss.scss'

export default (component: MwcBaseTextField) => {
    const classesFixed = ['mdc-text-field'];

    if (component.disabled) {
        classesFixed.push('mdc-text-field--disabled');
    }
    if (component.label === false) {
        classesFixed.push('mdc-text-field--no-label');
    }
    switch (component.variant) {
        case MwcBaseTextFieldVariant.FILLED:
            // not an error
            classesFixed.push('mdc-ripple-upgraded');
            break;
        case MwcBaseTextFieldVariant.OUTLINED:
            classesFixed.push('mdc-text-field--outlined');
            break;
    }
    if (component.shaped && (component.variant === MwcBaseTextFieldVariant.FILLED)) {
        classesFixed.push('mwc-text-field--filled-shaped', mwcBaseTextField.mwcTextFieldFilledShaped);
    }

    if (component.fullwidth) {
        classesFixed.push('mdc-text-field--fullwidth');
    }

    const inputElement = component.textarea
        ? <textarea id={component.inputId} class="mdc-text-field__input" name={component.name}
                    value={component.value}/>
        : <input id={component.inputId} class="mdc-text-field__input" name={component.name}
                 value={component.value}/>;

    if (component.textarea) {
        classesFixed.push('mwc-text-field--textarea', mwcBaseTextField.mwcTextFieldTextarea);
    }

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

    if (component.textarea) {
        classesFixed.push('mdc-text-field--textarea')
    }
    return <div id={component.textFieldId} class={classesFixed}>
        <slot name={MwcBaseTextField.SLOT_NAME_LEADING_ICON}/>
        {component.variant === MwcBaseTextFieldVariant.FILLED
            ? getFilledTextField(component, inputElement)
            : getOutlinedTextField(component, inputElement)}
        <slot name={MwcBaseTextField.SLOT_NAME_TRAILING_ICON}/>
    </div>
}

