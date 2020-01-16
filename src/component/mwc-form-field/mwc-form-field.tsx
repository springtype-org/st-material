import {st} from "springtype/core";
import {attr} from "springtype/web/component";
import {newUniqueComponentName, tsx} from "springtype/web/vdom";
import {ILifecycle} from "springtype/web/component/interface";
import {ref} from "springtype/core/ref";
import {IVirtualNode} from "springtype/web/vdom/interface/ivirtual-node";


export interface IMwcFormFieldAttrs {
    label?: string;
    disabled?: boolean;
}

export abstract class MwcFormField<T extends IMwcFormFieldAttrs> extends st.component<T> implements ILifecycle, IMwcFormFieldAttrs {
    @ref
    labelRef: HTMLElement;

    @attr
    label: string = "";

    @attr
    disabled: boolean = false;

    for: string = '';

    disabledClasses: Array<string> = [];

    class = ['mdc-form-field'];

    onBeforeElCreate() {
        this.for = newUniqueComponentName();
    }

    doDisabled(disabled: boolean) {
        if (disabled) {
            this.disabledClasses.forEach(clazz => this.el.classList.add(clazz));
        } else {
            this.disabledClasses.forEach(clazz => this.el.classList.remove(clazz));
        }
    }

    doLabel(label: string) {
        this.labelRef.innerText = label;
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        console.log('shouldAttributeChange',this, name)
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'disabled':
                    this.doDisabled(newValue);
                    break;
                case 'label':
                    this.doLabel(newValue);
                    break;
            }
            return false;
        }
        return true;
    }

    shouldRender(): boolean {
        return !this.INTERNAL.notInitialRender;
    }

    onAfterInitialRender(): void {
        this.doDisabled(this.disabled);
    }

    render() {
        console.log('render', this);
        return <fragment>
            {this.renderInnerElement()}
            <label ref={{labelRef: this}} for={this.for}>{this.label}</label>
        </fragment>
    }

    abstract renderInnerElement(): IVirtualNode | Array<IVirtualNode>;
}