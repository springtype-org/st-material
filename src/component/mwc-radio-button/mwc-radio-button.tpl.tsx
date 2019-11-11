import {tsx} from "springtype/web/vdom";
import {MwcRadioButton} from "./mwc-radio-button";

export default (component: MwcRadioButton) => {
    component.class = Array.isArray(component.class) ? component.class : [component.class];
    const classes = ["mdc-radio"];
    const rippleClass = [];

    component.el.setAttribute('class', component.class.join(' '));

    const input = <input class="mdc-radio__native-control" type="radio" id={component.inputId}/>;
    if (component.ripple) {
        rippleClass.push('mdc-radio__ripple');
    }

    if (component.disabled) {
        classes.push("mdc-radio--disabled");
        input.attributes.disabled = true;
    }

    if (component.checked) {
        input.attributes.checked = true;
        input.attributes.value = component.value || "on";
    }

    if (component.name) {
        input.attributes.name = component.name;
    }

    if (component.value) {
        input.attributes.value = component.value;
    }

    return (
        <div id={component.formFieldId} class="mdc-form-field">
            <div id={component.radioId} class={classes}>
               {input}
                <div class="mdc-radio__background">
                    <div class="mdc-radio__outer-circle"/>
                    <div class="mdc-radio__inner-circle"/>
                </div>
                <div class={rippleClass}/>
            </div>
            <label for={component.inputId}>{component.label}</label>
        </div>
    );
};
