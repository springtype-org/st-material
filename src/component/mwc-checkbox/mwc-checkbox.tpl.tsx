import {tsx} from "springtype/web/vdom";
import {MwcCheckbox} from "./mwc-checkbox";

export default (component: MwcCheckbox) => {
    const classes = ["mdc-checkbox"];
    const rippleClass = [];

    const input = <input type="checkbox" class="mdc-checkbox__native-control" id={component.inputId}/>;
    if (component.ripple) {
        rippleClass.push('mdc-checkbox__ripple');
    }

    if (component.disabled) {
        classes.push("mdc-checkbox--disabled");
        input.attributes.disabled = true;
    }

    if (component.checked === true) {
        input.attributes.checked = true;
        input.attributes.value = component.value || "on";
    }

    if (component.indeterminate) {
        input.attributes.indeterminate = true;
        input.attributes["aria-checked"] = "mixed";
    }

    if (component.name) {
        input.attributes.name = component.name;
    }

    if (component.value) {
        input.attributes.value = component.value;
    }

    return (
        <div id={component.formFieldId} class="mdc-form-field">
            <div id={component.checkboxId} class={classes}>
                {input}
                <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div class="mdc-checkbox__mixedmark"/>
                </div>
                <div class={rippleClass}/>
            </div>
            <label for={component.inputId}>{component.label}</label>
        </div>
    );
};
