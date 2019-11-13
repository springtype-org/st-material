import {tsx} from 'springtype/web/vdom';
import {MwcBaseTextField} from "../mwc-base-textfield";
import {MwcTextArea} from "./mwc-text-area";

export default (component: MwcTextArea) => {

    return <MwcBaseTextField ref={{mwcBaseTextFieldRef: component}} name={component.name} label={component.label}
                             variant={component.variant}
                             ripple={component.ripple} disabled={component.disabled} value={component.value}
                             shaped={component.shaped} textarea={true} fullwidth={component.fullwidth}>
    </MwcBaseTextField>

}

