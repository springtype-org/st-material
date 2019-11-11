import {MDCDrawer} from "@material/drawer";
import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import {tsx} from "springtype/web/vdom";

@component()
export class MwcDrawer extends st.component implements ILifecycle {

  @attr(AttrType.DOM_INTRANSPARENT)
  variant: 'modal' | 'dismissible' = 'dismissible';

  @attr(AttrType.DOM_TRANSPARENT)
  open: boolean = false;

  @attr(AttrType.DOM_TRANSPARENT)
  fixed: boolean = false;


  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  protected mdcDrawer: MDCDrawer;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-drawer", ...this.class];

    if (this.variant === 'dismissible') {
      classes.push("mdc-drawer--dismissible");
    } else {
      classes.push("mdc-drawer--modal");
    }
    if(this.open){
      classes.push('mdc-drawer--open')
    }

    this.el.setAttribute("class", classes.join(" "));

    return this.virtualSlotChildren.default || <fragment />;
  }

  onAfterInitialRender(): void {
    this.mdcDrawer = MDCDrawer.attachTo(this.el);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDrawer: Partial<MwcDrawer>;
    }
  }
}
