import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import {IVirtualNode} from "springtype/web/vdom/interface";

export type MwcBaseTextFieldVariant = "filled" | "outlined";

const CSS_CLASSES = {
    FILLED: 'mdc-text-field--filled',
    FILLED_RIPPLE: 'mdc-ripple-upgraded',
    FILLED_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    OUTLINED: 'mdc-text-field--outlined',
    OUTLINED_NOTCHED: 'mdc-notched-outline--notched',
    DISABLED: 'mdc-text-field--disabled',
    NO_LABEL: 'mdc-text-field--no-label',
    ICON_LEADING: 'mdc-text-field--with-leading-icon',
    ICON_TRAILING: 'mdc-text-field--with-trailing-icon',
    FOCUSED: 'mdc-text-field--focused',
    LABEL_FLOATING: 'mdc-floating-label--float-above',
};

export interface IMwcBaseTextFieldAttrs {
    label?: string | false;
    variant?: MwcBaseTextFieldVariant;
    disabled?: boolean;
    name?: string;
}

export abstract class MwcBaseTextField<T extends IMwcBaseTextFieldAttrs> extends st.component<T> implements ILifecycle, IMwcBaseTextFieldAttrs {
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
    disabled: boolean = false;

    @attr
    name: string = '';

    class = ['mdc-text-field'];

    inputId: string;

    hasValue: boolean = false;

    isFocused: boolean = false;

    onBeforeElCreate() {
        this.inputId = newUniqueComponentName();
    }

    doVariant(variant: MwcBaseTextFieldVariant, setAttribute: boolean = true) {
        if (setAttribute) {
            this.variant = variant;
        }
        switch (variant) {
            case 'filled':
                this.el.classList.add(CSS_CLASSES.FILLED_RIPPLE);
                this.el.classList.add(CSS_CLASSES.FILLED);
                this.el.classList.remove(CSS_CLASSES.OUTLINED);
                break;
            case 'outlined':
                this.el.classList.add(CSS_CLASSES.OUTLINED);
                this.el.classList.remove(CSS_CLASSES.FILLED, CSS_CLASSES.FILLED_RIPPLE);
                break;
        }
    }

    doDisable(disabled: boolean) {
        if (disabled) {
            this.el.classList.add(CSS_CLASSES.DISABLED);
        } else {
            this.el.classList.remove(CSS_CLASSES.DISABLED);
        }
    }

    doLabel(label: string | false, setAttribute: boolean = true) {
        if (setAttribute) {
            this.label = label;
        }

        if (!label) {
            this.el.classList.add(CSS_CLASSES.NO_LABEL);
        } else {
            this.el.classList.remove(CSS_CLASSES.NO_LABEL);
        }
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'variant':
                    this.doVariant(newValue, false);
                    break;
                case 'label':
                    this.doLabel(newValue, false);
                    break;
                case 'disabled':
                    this.doDisable(newValue);
                    break;
                case 'name':
                    this.doName(newValue);
                    break;
            }
        }
        return true;
    }

    shouldRender(): boolean {
        return !this.INTERNAL.notInitialRender;
    }

    onAfterInitialRender(): void {
        this.doVariant(this.variant, false);
        this.doLabel(this.label, false);
        this.doDisable(this.disabled);
        this.doName(this.name);
        if (!!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_LEADING_ICON]) {

            this.el.classList.add(CSS_CLASSES.ICON_LEADING);
        }
        if (!!this.virtualNode.slotChildren[MwcBaseTextField.SLOT_NAME_TRAILING_ICON]) {
            this.el.classList.add(CSS_CLASSES.ICON_TRAILING);
        }
    }

    onInputFocus(evt: FocusEvent) {
        this.isFocused = true;
        this.el.classList.add(CSS_CLASSES.FOCUSED);
        if (!!this.label) {
            this.labelRef.classList.add(CSS_CLASSES.LABEL_FLOATING);
            if (this.variant == 'outlined') {
                this.outlineNotchRef.classList.add(CSS_CLASSES.OUTLINED_NOTCHED);
            }
        }
        if (this.variant == 'filled') {
            this.lineRippleRef.classList.add(CSS_CLASSES.FILLED_RIPPLE_ACTIVE);
        }
    }

   abstract doName(name: string);

    doValue(value: string) {
        console.log('do value',value, !!value)
        this.hasValue = !!value;
        if (!!this.label) {
            if (this.hasValue || this.isFocused) {
                this.labelRef.classList.add(CSS_CLASSES.LABEL_FLOATING);
                if (this.variant == 'outlined') {
                    this.outlineNotchRef.classList.add(CSS_CLASSES.OUTLINED_NOTCHED);
                }
            } else {
                if (this.variant == 'outlined') {
                    this.outlineNotchRef.classList.remove(CSS_CLASSES.OUTLINED_NOTCHED);
                }
                this.labelRef.classList.remove(CSS_CLASSES.LABEL_FLOATING);
            }
        }
    }

    onInputBlur(evt: FocusEvent) {
        this.isFocused = false;
        this.el.classList.remove(CSS_CLASSES.FOCUSED);
        if (!this.hasValue) {
            this.labelRef.classList.remove(CSS_CLASSES.LABEL_FLOATING);
            if (this.variant == 'outlined') {
                this.outlineNotchRef.classList.remove(CSS_CLASSES.OUTLINED_NOTCHED);
            }
        }
        if (this.variant == 'filled') {
            this.lineRippleRef.classList.remove(CSS_CLASSES.FILLED_RIPPLE_ACTIVE);
        }
    }

    onInputKeyUp(evt: KeyboardEvent) {
        if (evt.code.toLowerCase() !== 'tab') {
            console.log(evt,(evt.target as any).value);
            this.doValue((evt.target as any).value);
        }
    }


    render() {
        return <fragment>
            {this.renderSlot(MwcBaseTextField.SLOT_NAME_LEADING_ICON)}
            {this.variant === 'filled'
                ? this.renderFilled()
                : this.renderOutlined()}
            {this.renderSlot(MwcBaseTextField.SLOT_NAME_TRAILING_ICON)}
        </fragment>;
    }

    renderFilled() {
        return (
            <fragment>
                {this.getInputElement()}
                <label class="mdc-floating-label" ref={{labelRef: this}} for={this.inputId}>
                    {this.label}
                </label>
                <div class="mdc-line-ripple" ref={{lineRippleRef: this}}/>
            </fragment>
        );
    }

    renderOutlined() {
        return (
            <fragment>
                {this.getInputElement()}
                <div class="mdc-notched-outline" ref={{outlineNotchRef: this}}>
                    <div class="mdc-notched-outline__leading"/>
                    <div class="mdc-notched-outline__notch" ref={{outlineSpacerRef: this}}>
                        <label class="mdc-floating-label" ref={{labelRef: this}} for={this.inputId}>
                            {this.label}
                        </label>
                    </div>
                    <div class="mdc-notched-outline__trailing"/>
                </div>
            </fragment>
        );
    };

    abstract getInputElement(): IVirtualNode | Array<IVirtualNode> ;
}