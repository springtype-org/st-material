import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {MwcLayoutGridInner} from "../mwc-layout-grid-inner/mwc-layout-grid-inner";

export type MwcLayoutGridAlign = "middle" | "left" | "right";

export interface IMwcLayoutGridAttrs {
    autoWrapInner?: boolean;
    fixedColumnWidth?: boolean;
    align?: MwcLayoutGridAlign;
    innerClass?: string | Array<string>;
}

@component
export class MwcLayoutGrid extends st.component<IMwcLayoutGridAttrs> implements ILifecycle, IMwcLayoutGridAttrs {
    @attr
    autoWrapInner: boolean = false;

    @attr
    fixedColumnWidth: boolean = false;

    @attr
    align: MwcLayoutGridAlign;

    @attr
    innerClass: string | Array<string>;

    class = ["mdc-layout-grid"];
    style = {
        display: "block",
    };

    onAfterElCreate() {
        if (this.fixedColumnWidth) {
            this.el.classList.add("mdc-layout-grid--fixed-column-width");
        }

        if (this.align && this.align !== "middle") {
            this.el.classList.add(`mdc-layout-grid--align-${this.align}`);
        }
    }

    render() {
        if (this.autoWrapInner) {
            return <MwcLayoutGridInner class={this.innerClass}>{this.renderChildren()}</MwcLayoutGridInner>;
        } else {
            return this.renderChildren();
        }
    }
}