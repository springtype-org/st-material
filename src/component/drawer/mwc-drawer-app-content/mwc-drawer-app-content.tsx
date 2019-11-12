import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {domRef, tsx} from "springtype/web/vdom";

@component()
export class MwcDrawerAppContent extends st.component implements ILifecycle {

    @attr()
    fixed: boolean = false;

    @domRef("contentRef")
    contentRef!: HTMLElement;

    render() {
        const classes = ["mdc-drawer-app-content"];

        if (this.fixed) {
            classes.push("mdc-top-app-bar--fixed-adjust");
        }

        return <div class={classes} ref={{contentRef: this}}>{this.renderChildren()}</div>;
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcDrawerAppContent: Partial<MwcDrawerAppContent>;
        }
    }
}
