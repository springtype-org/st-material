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

    class = ['drawer-frame-root'];

    shouldAttributeChange(name: string, newValue: any, oldValue: any): boolean {
        if (this.INTERNAL.notInitialRender) {
            switch (name) {
                case 'variant':
                    this.doVariant(newValue);
                    break;
                case 'fixed':
                    this.doFixed(newValue);
                    break;
            }
            return false;
        }
        return true;
    }

    onAfterInitialRender(): void {
        this.doVariant(this.variant);
        this.doFixed(this.fixed);
    }

    doVariant(variant: MwcDrawerVariants) {
        if (variant === "dismissible") {
            this.drawerRef.classList.add("mdc-drawer--dismissible");
            this.drawerScrimRef.setAttribute("style", "display: none;");

            this.drawerRef.classList.remove("mdc-drawer--modal");
        } else {
            this.drawerRef.classList.add("mdc-drawer--modal");

            this.drawerScrimRef.removeAttribute("style");
            this.drawerRef.classList.remove("mdc-drawer--dismissible");
        }
    }

    doFixed(fixed: boolean) {
        if (fixed) {
            this.drawerRef.classList.add("mwc-drawer--fixed");
        } else {
            this.drawerRef.classList.remove("mwc-drawer--fixed");
        }
    }

    shouldRender(): boolean {
        return !this.INTERNAL.notInitialRender;
    }

    doToggle() {
        if (this.drawerOpen) {
            this.doClose();
        } else {
            this.doOpen();
        }
    }

    doOpen() {
        this.drawerOpen = true;
        this.drawerRef.classList.add('mdc-drawer--open');
        this.drawerRef.classList.add('mdc-drawer--animate');
        setImmediate(() => {
            this.drawerRef.classList.add('mdc-drawer--opening');
        });
        setTimeout(() => {
            this.drawerRef.classList.remove('mdc-drawer--opening');
            this.drawerRef.classList.remove('mdc-drawer--animate');
        }, 280);
    }

    doClose() {
        this.drawerOpen = false;
        this.drawerRef.classList.add('mdc-drawer--closing');
        this.drawerRef.classList.add('mdc-drawer--animate');

        setTimeout(() => {
            this.drawerRef.classList.remove('mdc-drawer--open');
            this.drawerRef.classList.remove('mdc-drawer--closing');
            this.drawerRef.classList.remove('mdc-drawer--animate');
        }, 280);
    }

    render() {
        return <fragment>
            <aside ref={{drawerRef: this}} class="mdc-drawer">
                {this.renderChildren()}
            </aside>
            <div class="mdc-drawer-scrim" ref={{drawerScrimRef: this}} onClick={() => {
                this.doClose()
            }}/>
        </fragment>
    }


}