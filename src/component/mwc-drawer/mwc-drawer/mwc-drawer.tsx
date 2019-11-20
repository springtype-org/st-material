import { MDCDrawer } from "@material/drawer";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

export type MwcDrawerVariants = "modal" | "dismissible";

export interface IMwcDrawerAttrs {
  variant?: MwcDrawerVariants;
  fixed?: boolean;
}

@component
export class MwcDrawer extends st.component<IMwcDrawerAttrs> implements ILifecycle, IMwcDrawerAttrs {
    
  @attr
  variant: MwcDrawerVariants = "dismissible";

  @attr
  fixed: boolean = false;

  @ref
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
    return (
      <fragment>
        <aside ref={{ drawerRef: this }} class={classes}>
          {this.renderChildren()}
        </aside>
        {this.variant === "modal" ? <div class="mdc-drawer-scrim" /> : <fragment />}
      </fragment>
    );
  }

  onAfterRender(): void {
    this.mdcDrawer = MDCDrawer.attachTo(this.drawerRef);
  }

  onDisconnect() {
    this.mdcDrawer.destroy();
  }
}