import {MwcTextField} from "./mwc-text-field";
import {tsx} from 'springtype/web/vdom';

export const getFilledTextField = (component: MwcTextField, inputElement) => {
    return <fragment>
        {inputElement}
        <label class="mdc-floating-label" for={component.inputId}>{component.label}</label>
        <div class="mdc-line-ripple"/>
    </fragment>
};