import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcList extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  ripple: boolean = true;

  @attr(AttrType.DOM_INTRANSPARENT)
  twoLine: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  singleSelection: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  nonInteractive: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  dense: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  avatarList: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  wrapFocus: boolean = false;

  protected mdcList: MDCList;
  protected mdcListItemRipples: Array<any>;

  render() {

    this.class = Array.isArray(this.class) ? this.class : [this.class];
    
    const classes = ["mdc-list", ...this.class];

    if (this.twoLine) {
      classes.push("mdc-list--two-line");
    }

    if (this.nonInteractive) {
      classes.push("mdc-list--non-interactive");
    }

    if (this.dense) {
      classes.push("mdc-list--dense");
    }

    if (this.avatarList) {
      classes.push("mdc-list--avatar-list");
    }

    this.el.setAttribute("class", classes.join(" "));
    this.el.style.display = 'block';

    return this.virtualSlotChildren.default || <fragment />;
  }

  onAfterInitialRender(): void {
    this.mdcList = new MDCList(this.el);

    this.mdcList.singleSelection = this.singleSelection;
    this.mdcList.wrapFocus = this.wrapFocus;

    if (this.ripple) {
      this.mdcListItemRipples = this.mdcList.listElements.map(listItemEl => new MDCRipple(listItemEl));
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcList: Partial<MwcList>;
    }
  }
}
