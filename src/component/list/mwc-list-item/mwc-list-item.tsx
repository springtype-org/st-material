import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";
import { MwcListItemGraphic } from "../mwc-list-item-graphic/mwc-list-item-grahic";
import { MwcListItemText } from "../mwc-list-item-text/mwc-list-item-text";

@component()
export class MwcListItem extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  tabIndex: number = 0;

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  autoWrapText: boolean = true;

  @attr(AttrType.DOM_INTRANSPARENT)
  textClass: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  autoWrapGraphic: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  graphicClass: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  selected: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  disabled: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  activated: boolean = false;

  @attr(AttrType.DOM_INTRANSPARENT)
  'data-value': any;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-list-item", ...this.class];

    if (this.selected) {
      classes.push("mdc-list-item--selected");
    }

    if (this.activated) {
      classes.push("mdc-list-item--activated");
    }

    if (this.disabled) {
      classes.push("mdc-list-item--disabled");
    }

    if(this['data-value'] !== undefined){
      this.el.setAttribute("data-value", JSON.stringify(this['data-value']));
    }

    this.el.setAttribute("class", classes.join(" "));
    this.el["tabindex"] = this.tabIndex;

    if (this.autoWrapText) {
      return <MwcListItemText class={this.textClass}>{this.virtualSlotChildren.default}</MwcListItemText>;
    }

    if (this.autoWrapGraphic) {
      return <MwcListItemGraphic class={this.graphicClass}>{this.virtualSlotChildren.default}</MwcListItemGraphic>;
    }
    return this.virtualSlotChildren.default || <fragment />;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItem: Partial<MwcListItem>;
    }
  }
}
