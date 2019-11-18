import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { MwcListItemGraphic } from "../mwc-list-item-graphic/mwc-list-item-graphic";
import { MwcListItemText } from "../mwc-list-item-text/mwc-list-item-text";

@component
export class MwcListItem extends st.component implements ILifecycle {
  @attr
  autoWrapText: boolean = true;

  @attr
  textClass: string | Array<string>;

  @attr
  autoWrapGraphic: boolean = false;

  @attr
  graphicClass: string | Array<string>;

  @attr
  selected: boolean = false;

  @attr
  disabled: boolean = false;

  @attr
  activated: boolean = false;

  onAfterElCreate() {
    const classes = [...this.elClass];

    if (this.selected) {
      classes.push("mdc-list-item--selected");
    }

    if (this.activated) {
      classes.push("mdc-list-item--activated");
    }

    if (this.disabled) {
      classes.push("mdc-list-item--disabled");
    }
    this.elClass = ["mdc-list-item", ...classes];
  }

  render() {
    if (this.autoWrapText) {
      return <MwcListItemText class={this.textClass}>{this.renderChildren()}</MwcListItemText>;
    }
    if (this.autoWrapGraphic) {
      return <MwcListItemGraphic class={this.graphicClass}>{this.renderChildren()}</MwcListItemGraphic>;
    }
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListItem: Partial<MwcListItem>;
    }
  }
}
