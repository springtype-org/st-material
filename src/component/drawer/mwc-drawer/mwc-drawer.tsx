import {MDCDrawer} from "@material/drawer";
import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {domRef, tsx} from "springtype/web/vdom";

@component()
export class MwcDrawer extends st.component implements ILifecycle {

    @attr()
    variant: "modal" | "dismissible" = "dismissible";

    @attr()
    fixed: boolean = false;

    @domRef('drawerRef')
    drawerRef: HTMLElement;

    mdcDrawer!: MDCDrawer;

    toggle() {
        this.mdcDrawer.open = !this.mdcDrawer.open;
    }

    open() {
        this.mdcDrawer.open = true;
    }

    close() {
        this.mdcDrawer.open = false;
    }


    render() {
        const classes = ["mdc-drawer"];

        if (this.variant === "dismissible") {
            classes.push("mdc-drawer--dismissible");
        } else {
            classes.push("mdc-drawer--modal");
        }

        if (this.fixed) {
            classes.push("mwc-drawer--fixed");
        }
        return <fragment>
            <aside ref={{drawerRef: this}} class={classes}>
                {this.renderChildren()}
            </aside>
            {this.variant === "modal" ? <div class="mdc-drawer-scrim"/> : <fragment/>}
        </fragment>

    }

    onAfterRender(): void {
        this.mdcDrawer = MDCDrawer.attachTo(this.drawerRef);
    }

    onDisconnect() {
        this.mdcDrawer.destroy();
    }
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcDrawer: Partial<MwcDrawer>;
        }
    }
}
