import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

export type MwcDrawerVariants = "modal" | "dismissible";

export interface IMwcDrawerAttrs {
    variant?: MwcDrawerVariants;
    fixed?: boolean;
}

@component
export class MwcDrawer extends st.component<IMwcDrawerAttrs> implements ILifecycle, IMwcDrawerAttrs {

    @ref
    drawerRef: HTMLElement;

    @ref
    drawerScrimRef: HTMLElement;

    @attr
    variant: MwcDrawerVariants = "dismissible";

    @attr
    fixed: boolean = false;


    drawerOpen: boolean = false;

    onAfterElCreate(): void {
        this.elClass = ['drawer-frame-root', ...this.elClass]
    }

    toggle() {
        if (this.drawerOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.drawerOpen = true;
        this.drawerRef.classList.add('mdc-drawer--open')
    }

    close() {
        this.drawerOpen = false;
        this.drawerRef.classList.remove('mdc-drawer--open')
    }

    render() {
        const classes = ["mdc-drawer"];
        const scrimStyle = {};
        if (this.variant === "dismissible") {
            classes.push("mdc-drawer--dismissible");
            scrimStyle['display'] = 'none'
        } else {
            classes.push("mdc-drawer--modal");
        }
        if (this.fixed) {
            classes.push("mwc-drawer--fixed");
        }

        return (
            <fragment>
                <aside ref={{drawerRef: this}} class={classes}>
                    {this.renderChildren()}
                </aside>
                <div class="mdc-drawer-scrim" ref={{drawerScrimRef: this}} style={scrimStyle} onClick={() => {
                  this.close()
                }}/>
            </fragment>
        );
    }


}