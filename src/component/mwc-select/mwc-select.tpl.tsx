import { tsx } from "springtype/web/vdom";
import { MwcList } from "../list/mwc-list/mwc-list";
import { MwcSelect } from "./mwc-select";

export default (component: MwcSelect) => {
    component.class = Array.isArray(component.class) ? component.class : [component.class];
    const classes = ["mdc-select"];

    component.el.setAttribute('class', component.class.join(' '));


    if (component.disabled) {
        classes.push("mdc-select--disabled");
    }


    return (
        <div id={component.selectId} class={classes}>
            <div class="mdc-select__anchor">
                <i class="mdc-select__dropdown-icon"/>
                <div class="mdc-select__selected-text"/>
                <span class="mdc-floating-label">{component.label}</span>
                <div class="mdc-line-ripple"/>
            </div>

            <div class="mdc-select__menu mdc-menu mdc-menu-surface">
                <MwcList>
                    {component.renderSlot(MwcSelect.SLOT_NAME_LIST_ITEMS)}
                </MwcList>
            </div>
        </div>
    );
};
