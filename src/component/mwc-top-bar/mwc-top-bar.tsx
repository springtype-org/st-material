import {st} from 'springtype/core/st';
import {attr, component} from 'springtype/web/component';
import {ILifecycle} from 'springtype/web/component/interface';
import tpl from './mwc-top-bar.tpl';
import {MwcTopBarVariant} from "./mwc-top-bar-variant";
import {newUniqueComponentName} from "springtype/web/vdom";
import {AttrType} from "springtype/web/component/trait/attr";


@component({
    tpl,
})
export class MwcTopBar extends st.component implements ILifecycle {
    static SLOT_NAME_TOP_BAR_BODY: string = 'default';
    static SLOT_NAME_MENU_ICON_BUTTON: string = 'menu-icon';
    static SLOT_NAME_TRAILING_ICONS: string = 'trailing-icons';

    @attr()
    dense: boolean = false;

    @attr()
    title: string = '';

    @attr()
    variant: MwcTopBarVariant = MwcTopBarVariant.STANDARD;

    @attr()
    fixed: boolean = false;

    @attr()
    trailingIconSlot: any | false = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    scrolled: boolean = false;

    headerId = newUniqueComponentName();

    onAfterInitialRender(): void {
        window.addEventListener("scroll", () => {
                if (!this.fixed) {
                    const header: HTMLElement = this.el.querySelector(`#${this.headerId}`);
                    const offsetHeight = header.offsetHeight;
                    if (window.scrollY < offsetHeight) {
                        header.setAttribute("style", `top: -${window.scrollY}px`);
                    } else {
                        header.setAttribute("style", `top: -${offsetHeight}px`);
                    }
                }
                this.scrolled = window.scrollY > 0;

            }
        );
    }


    onBeforeRender(): void {
        this.trailingIconSlot = this.virtualSlotChildren[MwcTopBar.SLOT_NAME_TRAILING_ICONS];
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcTopBar: Partial<MwcTopBar>;
        }
    }
}
