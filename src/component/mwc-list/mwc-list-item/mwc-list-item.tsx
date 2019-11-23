import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {MwcListItemGraphic} from "../mwc-list-item-graphic/mwc-list-item-graphic";
import {MwcListItemText} from "../mwc-list-item-text/mwc-list-item-text";

export interface IMwcListItemAttrs {
    autoWrapText?: boolean;
    autoWrapGraphic?: boolean;
    textClass?: string | Array<string>;
    graphicClass?: string | Array<string>;
    selected?: boolean;
    disabled?: boolean;
    activated?: boolean;
    dataValue?: string;
}

@component
export class MwcListItem extends st.component<IMwcListItemAttrs> implements ILifecycle {
    @attr
    autoWrapText: boolean = true;

    @attr
    textClass: string | Array<string>;

    @attr
    autoWrapGraphic: boolean = false;

    @attr
    graphicClass: string | Array<string>;

    @attr
    selected: boolean = false;

    @attr
    disabled: boolean = false;

    @attr
    activated: boolean = false;

    @attr
    dataValue: string;

    initialRender: boolean = false;

    onAfterElCreate() {

        this.elClass = ["mdc-list-item", ...this.elClass];

        if (this.dataValue) {
            this.elAttributes = {
                // @ts-ignore
                "data-value": this.dataValue
            }
        }
    }

    select(selected: boolean) {
        if (this.selected) {
            this.el.classList.add("mdc-list-item--selected");
        } else {
            this.el.classList.remove("mdc-list-item--selected");
        }
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        console.log('shouldAttributeChange', name, newValue, oldValue);
        if (this.initialRender) {
            if (name === 'selected') {
              this.select(newValue)
            }
            if (name === 'activated') {
                if (this.activated) {
                    this.el.classList.add("mdc-list-item--activated");
                } else {
                    this.el.classList.remove("mdc-list-item--activated");
                }
            }
            if (name === 'disabled') {
                if (this.disabled) {
                    this.el.classList.add("mdc-list-item--disabled");
                } else {
                    this.el.classList.remove("mdc-list-item--disabled");
                }
            }
        }
        return false;
    }

    shouldRender(): boolean {
        return !this.initialRender;
    }

    onAfterInitialRender(): void {
        this.initialRender = true;
    }

    render() {
        if (this.autoWrapText) {
            return <MwcListItemText class={this.textClass}>{this.renderChildren()}</MwcListItemText>;
        }
        if (this.autoWrapGraphic) {
            return <MwcListItemGraphic class={this.graphicClass}>{this.renderChildren()}</MwcListItemGraphic>;
        }
        return this.renderChildren();
    }

    onAfterRender(hasDOMChanged: boolean): void {
        console.log('onAfterRender')
    }
}