import {MwcTextField} from "./mwc-text-field";
import {tsx} from 'springtype/web/vdom';
import {MwcBaseTextField} from "../mwc-base-textfield/mwc-base-text-field";

export default (component: MwcTextField) => {
    let leadingIconSlotChildren = '';
    if (component.leadingIconSlot) {
        leadingIconSlotChildren = <template slot={MwcBaseTextField.SLOT_NAME_LEADING_ICON}>
            {component.leadingIconSlot.children}
        </template>
    }
    let trailingIconSlotChildren = '';
    if (component.trailingIconSlot) {
        trailingIconSlotChildren = <template slot={MwcBaseTextField.SLOT_NAME_TRAILING_ICON}>
            {component.trailingIconSlot.children}
        </template>
    }
    return <MwcBaseTextField name={component.name} label={component.label} variant={component.variant}
                             ripple={component.ripple} disabled={component.disabled} value={component.value}
                             shaped={component.shaped}>
        {leadingIconSlotChildren}
        {trailingIconSlotChildren}

    </MwcBaseTextField>

}

