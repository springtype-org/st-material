import { st } from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {domRef, newUniqueComponentName, tsx} from "springtype/web/vdom";
import tpl from "./mwc-checkbox.tpl";
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

@component({
    tpl
})
export class MwcCheckbox extends st.component implements ILifecycle {

    @domRef("input")
    input: HTMLElement;

    @attr()
    label: string = '';

    @attr()
    disabled: string = "false";

    inputId = newUniqueComponentName();
    checkboxId = newUniqueComponentName();
    formFieldId = newUniqueComponentName();

    onAfterInitialRender(): void  {
      /*  const checkbox = new MDCCheckbox(this.getEl().querySelector(`#${this.checkboxId}`));
        const formField = new MDCFormField(this.getEl().querySelector(`#${this.formFieldId}`));
        formField.input = checkbox;*/
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcCheckbox': Partial<MwcCheckbox>;
        }
    }
}


