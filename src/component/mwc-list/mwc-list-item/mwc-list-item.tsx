import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { MwcListItemGraphic } from "../mwc-list-item-graphic/mwc-list-item-graphic";
import { MwcListItemText } from "../mwc-list-item-text/mwc-list-item-text";

export interface IMwcListItemAttrs {
  autoWrapText?: boolean;
  autoWrapGraphic?: boolean;
  textClass?: string | Array<string>;
  graphicClass?: string | Array<string>;
  selected?: boolean;
  disabled?: boolean;
  activated?: boolean;
  dataValue?: string;
}

@component
export class MwcListItem extends st.component<IMwcListItemAttrs> implements ILifecycle {
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

  @attr
  dataValue: string;

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

    if (this.dataValue) {
      this.elAttributes = {
        // @ts-ignore
        "data-value": this.dataValue
      }
    }
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