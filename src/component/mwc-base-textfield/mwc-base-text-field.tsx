import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";
import './mwc-textfield.css'

export const INPUT_PROPERTIES = ["name", "value", "type"];
export type MwcBaseTextFieldVariant = "filled" | "outlined";

export interface IMwcBaseTextFieldAttrs {
    label?: string | false;
    variant?: MwcBaseTextFieldVariant;
    shaped?: boolean;
    fullWidth?: boolean;
}

@component
export class MwcBaseTextField extends st.component<IMwcBaseTextFieldAttrs> implements ILifecycle, IMwcBaseTextFieldAttrs {
    static SLOT_NAME_TRAILING_ICON: string = "base-trailing-icon";
    static SLOT_NAME_LEADING_ICON: string = "base-leading-icon";

    @ref
    labelRef!: HTMLElement;
    @ref
    lineRippleRef!: HTMLElement;
    @ref
    outlineSpacerRef!: HTMLElement;
    @ref
    outlineNotchRef!: HTMLElement;

    @attr
    label: string | false = false;

    @attr
    variant: MwcBaseTextFieldVariant = 'filled';

    @attr
    shaped: boolean = false;

    @attr
    fullWidth: boolean = false;


    class = ['mdc-text-field'];

    inputId: string;

    trailingIconActive: boolean = false;
    leadingIconActive: boolean = false;

    hasValue: boolean = false;


    onBeforeElCreate() {
        this.inputId = newUniqueComponentName();
    }


    doFullWidth(fullWidth: boolean) {
        if (fullWidth) {
            this.el.classList.add("mdc-text-field--springtype-fullwidth");
        } else {
            this.el.classList.remove("mdc-text-field--springtype-fullwidth");
        }
    }

    doVariant(variant: MwcBaseTextFieldVariant) {
        switch (variant) {
            case 'filled':
                this.el.classList.add("mdc-ripple-upgraded");
                break;
            case 'outlined':
                this.el.classList.add("mdc-text-field--outlined");
                break;
        }
        if (this.shaped && this.variant === 'filled') {
            this.el.classList.add("mwc-text-field--filled-shaped");
        }
    }

    doDisable(disabled: boolean) {
        if (disabled) {
            this.el.classList.add("mdc-text-field--disabled");
        } else {
            this.el.classList.remove("mdc-text-field--disabled");
        }
    }

    doLabel(label: string | false) {
        if (label === false) {
            this.el.classList.add("mdc-text-field--no-label");
        } else {
            this.el.classList.remove("mdc-text-field--no-label");
        }
    }

    onAfterInitialRender(): void {
        this.doFullWidth(this.fullWidth);
        this.doVariant(this.variant);
        this.doLabel(this.label);

        if (this.leadingIconActive) {
            this.el.classList.add("mdc-text-field--with-leading-icon");
        }
        if (this.trailingIconActive) {
            this.el.classList.add("mdc-text-field--with-trailing-icon");
        }
    }

    onBeforeRender(): void {
        this.trailingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_TRAILING_ICON];
        this.leadingIconActive = !!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_LEADING_ICON];
    }

    onInputFocus(evt: FocusEvent) {
        this.el.classList.add('mdc-text-field--focused');
        this.labelRef.classList.add('mdc-floating-label--float-above');
        if (this.variant == 'filled') {
            this.lineRippleRef.classList.add('mdc-line-ripple--active');
        } else {
            this.outlineNotchRef.classList.add('mdc-notched-outline--notched');
        }
    }

    onInputKeyUp(evt: KeyboardEvent | any) {
        this.hasValue = !!(evt.target as any).value;
        if (this.hasValue) {
            this.labelRef.classList.add('mdc-floating-label--float-above');
        }
    }

    onInputBlur(evt: FocusEvent) {
        this.el.classList.remove('mdc-text-field--focused');
        if (!this.hasValue) {
            this.labelRef.classList.remove('mdc-floating-label--float-above');
        }
        if (this.variant == 'filled') {
            this.lineRippleRef.classList.remove('mdc-line-ripple--active');
        } else {
            if (!this.hasValue) {
                this.outlineNotchRef.classList.remove('mdc-notched-outline--notched');
            }
        }
    }

    render() {
        const inputChildren = this.renderChildren();
        return <fragment>
            {this.renderSlot(MwcBaseTextField.SLOT_NAME_LEADING_ICON)}
            {this.variant === 'filled'
                ? this.renderFilled(inputChildren)
                : this.renderOutlined(inputChildren)}
            {this.renderSlot(MwcBaseTextField.SLOT_NAME_TRAILING_ICON)}
        </fragment>;
    }

    renderFilled(inputElement: IVirtualNode | Array<IVirtualNode>) {
        return (
            <fragment>
                {inputElement}
                <label class="mdc-floating-label" ref={{labelRef: this}} for={this.inputId}>
                    {this.label}
                </label>
                <div class="mdc-line-ripple" ref={{lineRippleRef: this}}/>
            </fragment>
        );
    }

    renderOutlined(inputElement: IVirtualNode | Array<IVirtualNode>) {
        const classLeading = ["mdc-notched-outline__leading"];
        const classTrailing = ["mdc-notched-outline__trailing"];
        if (this.shaped) {
            classLeading.push("mdc-notched-outline--shaped__leading");
            classTrailing.push("mdc-notched-outline--shaped__trailing");
        }
        return (
            <fragment>
                {inputElement}
                <div class="mdc-notched-outline" ref={{outlineNotchRef: this}}>
                    <div class={classLeading}/>
                    <div class="mdc-notched-outline__notch" ref={{outlineSpacerRef: this}}>
                        <label class="mdc-floating-label" ref={{labelRef: this}} for={this.inputId}>
                            {this.label}
                        </label>
                    </div>
                    <div class={classTrailing}/>
                </div>
            </fragment>
        );
    };

}