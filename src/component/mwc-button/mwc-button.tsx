import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { newUniqueComponentName } from "springtype/web/vdom";
import { ButtonVariant, DEFAULT_MWC_BUTTON_VARIANT_TYPE } from "./mwc-button-variant-type";
import tpl from "./mwc-button.tpl";

@component({
    tpl
})
export class MwcButton extends st.component implements ILifecycle {
    @attr()
    label: string = "";

    @attr()
    ripple: boolean = true;

    @attr()
    variant: ButtonVariant = DEFAULT_MWC_BUTTON_VARIANT_TYPE;

    @attr()
    disabled: boolean = false;

    @attr()
    dense: boolean = false;

    @attr()
    shaped = false;

    buttonId = newUniqueComponentName();

    mdcRipple: MDCRipple;

    onAfterInitialRender(): void {
        const buttonEl = this.el.querySelector(`#${this.buttonId}`);

        if (this.ripple) {
            this.mdcRipple = new MDCRipple(buttonEl);
        }
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcButton': Partial<MwcButton>;
        }
    }
}


