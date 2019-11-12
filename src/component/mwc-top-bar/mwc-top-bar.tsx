import { st } from "springtype/core/st";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { AttrType } from "springtype/web/component/trait/attr";
import { newUniqueComponentName, domRef } from "springtype/web/vdom";
import { MwcTopBarVariant } from "./mwc-top-bar-variant";
import tpl from "./mwc-top-bar.tpl";
import { MDCTopAppBar } from "@material/top-app-bar";

@component({
  tpl,
})
export class MwcTopBar extends st.component implements ILifecycle {
  static SLOT_NAME_BODY: string = "body";
  static SLOT_NAME_TRAILING_ICONS: string = "trailing-icons";

  @attr()
  dense: boolean = false;

  @attr()
  title: string = "";

  @attr()
  variant: MwcTopBarVariant = MwcTopBarVariant.STANDARD;

  @attr()
  fixed: boolean = false;

  @attr()
  showMenuButton: boolean = true;

  @attr()
  menuIcon: string = 'menu';

  @attr()
  scrolled: boolean = false;

  @attr()
  headerId: string;

  mdcComponent: MDCTopAppBar;

  onBeforeElCreate() {
      this.headerId = this.headerId || newUniqueComponentName();
  }

  onAfterRender() {
    this.mdcComponent = MDCTopAppBar.attachTo(this.el);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTopBar: Partial<MwcTopBar>;
    }
  }
}
