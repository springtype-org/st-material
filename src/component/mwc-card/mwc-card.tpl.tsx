import { tsx } from "springtype/web/vdom";
import { MwcList } from "../list/mwc-list/mwc-list";
import { MwcCard } from "./mwc-card";
import {MwcButton} from "../mwc-button/mwc-button";

export default (component: MwcCard) => {
    component.class = Array.isArray(component.class) ? component.class : [component.class];
    const classes = ["mdc-card", ...component.class];

    component.el.setAttribute('class', classes.join(' '));


    return (
        <fragment>
            <div class="mdc-card__primary-action">
                {component.renderSlot(MwcCard.SLOT_NAME_PRIMARY)}
            </div>
            <div class="mdc-card__actions">
                {component.renderSlot(MwcCard.SLOT_NAME_ACTION)}
            </div>
        </fragment>
    );
};
