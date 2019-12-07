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

@component({tag: 'div'})
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

    onAfterElCreate() {
        this.class = ["mdc-list-item", ...this.class];
        this.select(this.selected);
        this.active(this.activated);
        this.disable(this.disabled);
    }

    active(active: boolean) {
        if (active) {
            this.el.classList.add("mdc-list-item--activated");
        } else {
            this.el.classList.remove("mdc-list-item--activated");
        }
    }

    disable(disable: boolean) {
        if (disable) {
            this.el.classList.add("mdc-list-item--disabled");
        } else {
            this.el.classList.remove("mdc-list-item--disabled");
        }
    }

    select(select: boolean) {
        if (select) {
            this.el.classList.add("mdc-list-item--selected");
        } else {
            this.el.classList.remove("mdc-list-item--selected");
        }
    }

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        if (this.INTERNAL.notInitialRender) {
            if (name === 'selected') {
                this.select(newValue);
            }
            if (name === 'activated') {
                this.active(newValue);
            }
            if (name === 'disabled') {
                this.disable(newValue);
            }
            return false;
        }
        return true;
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
}