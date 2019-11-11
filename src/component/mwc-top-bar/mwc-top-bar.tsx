import { MDCTopAppBar } from "@material/top-app-bar";
import { st } from "springtype/core/st";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import tpl from "./mwc-top-bar.tpl";

export type VariantType = false | "fixed" | "prominent" | "fixed-prominent" | "short" | "fixed-short";

@component({
  tpl,
})
export class MwcTopBar extends st.component implements ILifecycle {
  topAppBar: MDCTopAppBar;
  topAppBarElement: HTMLElement;

  @attr()
  dense: boolean = false;

  @attr()
  title: string = "";

  @attr()
  variant: VariantType = false;

  @attr()
  open: boolean = false;

  @attr()
  scrolled: boolean = false;

  onAfterInitialRender() {
    this.topAppBarElement = this.el.querySelector(".mdc-top-app-bar");
    this.topAppBar = new MDCTopAppBar(this.topAppBarElement);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTopBar: Partial<MwcTopBar>;
    }
  }
}
