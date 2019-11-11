import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcListDivider extends st.component implements ILifecycle {

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  padded: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  inset: boolean = false;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-list-divider", ...this.class];

    if (this.padded) {
      classes.push("mdc-list-divider--padded")
    }

    if (this.inset) {
      classes.push("mdc-list-divider--inset")
    }

    this.el.setAttribute("class", classes.join(" "));
    this.el.style.display = 'block';

    return <fragment />;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListDivider: Partial<MwcListDivider>;
    }
  }
}
