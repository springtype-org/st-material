import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";
import {ref} from "springtype/core/ref";
import {tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";
import {IVirtualNodeAttributes} from "springtype/web/vdom/interface/ivirtual-node";
import {attr, component} from "springtype/web/component";

export type MwcButtonVariant = "text" | "raised" | "unelevated" | "outlined";

interface IMwcButtonAttrs {
    label?: string;
    variant?: MwcButtonVariant;
    disabled?: boolean;
    dense?: boolean;
    shaped?: boolean;
}

@component()
export class MwcButton extends st.component<IMwcButtonAttrs> implements ILifecycle, IMwcButtonAttrs {
    static SLOT_NAME_TRAILING_ICON: string = "trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "leading-icon";

    @ref
    buttonRef: HTMLElement;

    @attr
    label: string = "";

    @attr
    variant: MwcButtonVariant = "text";

    @attr
    disabled: boolean = false;

    @attr
    dense: boolean = false;

    @attr
    shaped = false;

    render(): IVirtualNode<IVirtualNodeAttributes> | Array<IVirtualNode> {
        const classesFixed = ["mdc-button"];

        switch (this.variant) {
            case 'raised':
                classesFixed.push("mdc-button--raised");
                break;
            case 'unelevated':
                classesFixed.push("mdc-button--unelevated");
                break;
            case 'outlined':
                classesFixed.push("mdc-button--outlined");
                break;
        }

        if (this.dense) {
            classesFixed.push("mdc-button--dense");
        }

        if (this.shaped) {
            classesFixed.push("mwc-button--shaped");
        }

        const button = (
            <button ref={{buttonRef: this}} class={classesFixed}>
                <span class={['mdc-button__ripple']}/>
                {this.renderSlot(MwcButton.SLOT_NAME_LEADING_ICON)}
                <span class="mdc-button__label">{this.label}</span>
                {this.renderSlot(MwcButton.SLOT_NAME_TRAILING_ICON)}
                {this.renderChildren()}
            </button>
        );

        if (this.disabled) {
            button.attributes.disabled = true;
        }
        return button;

    }


    onAfterRender(): void {
    }

}
