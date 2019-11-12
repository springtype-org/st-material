import { MDCDismissibleDrawerFoundation, MDCDrawer } from "@material/drawer";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";

@component()
export class MwcDrawer extends st.component implements ILifecycle {

  @attr()
  variant: "modal" | "dismissible" = "dismissible";

  @attr()
  fixed: boolean = false;

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

  onAfterElCreate() {
    const classes = ["mdc-drawer", ...this.elClass];

    if (this.variant === "dismissible") {
      classes.push("mdc-drawer--dismissible");
    } else {
      classes.push("mdc-drawer--modal");
    }

    if (this.fixed) {
      classes.push("mwc-drawer--fixed");
    }
    this.elClass = classes;
  }

  render() {
    return this.renderChildren();
  }

  onAfterRender(): void {
    this.mdcDrawer = MDCDrawer.attachTo(this.el);
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
