import {MwcBaseTextField} from "./mwc-base-text-field";
import {tsx} from 'springtype/web/vdom';
import * as mwcTextField from "./mwc-base-text-field.tss.scss";

export const getOutlinedTextField = (component: MwcBaseTextField, inputElement) => {
    const classLeading = ['mdc-notched-outline__leading'];
    const classTrailing = ['mdc-notched-outline__trailing'];
    if (component.shaped) {
        classLeading.push('mdc-notched-outline--shaped__leading', mwcTextField.mdcNotchedOutlineShapedLeading);
        classTrailing.push('mdc-notched-outline--shaped__trailing', mwcTextField.mdcNotchedOutlineShapedTrailing);
    }
    return <fragment>
        {inputElement}
        <div class="mdc-notched-outline">
            <div class={classLeading}/>
            <div class="mdc-notched-outline__notch">
                <label class="mdc-floating-label" for={component.inputId}>{component.label}</label>
            </div>
            <div class={classTrailing}/>
        </div>
    </fragment>
};

