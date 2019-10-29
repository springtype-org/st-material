import { st } from "springtype/core/st";
import { attr, component, state } from "springtype/web/component";
import tss from "./mwc-top-bar-override.tss";
import tpl from "./mwc-top-bar.tpl";
export type VariantType = false | "fixed" | "prominent" | "fixed-prominent" | "short" | "fixed-short";

@component({
  tpl,
  tss,
})
export class MwcTopBar extends st.component {

  constructor() {
    super();

    console.log('MwcTopBar');
  }

  @attr()
  "mwc-dense": boolean = false;

  @attr()
  "mwc-title": string = "";

  @attr()
  "mwc-variant": VariantType = false;

  @attr()
  "menu-open": boolean = false;

  @attr()
  "mwc-scrolled": boolean = false;

  @state
  prop: { offsetWidth: number } = { offsetWidth: 0 };
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTopBar: Partial<MwcTopBar>;
    }
  }
}
