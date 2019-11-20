import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";

export interface IMwcListAttrs {
  ripple?: boolean;
  twoLine?: boolean;
  singleSelection?: boolean;
  nonInteractive?: boolean;
  dense?: boolean;
  avatarList?: boolean;
  wrapFocus?: boolean;
}

@component
export class MwcList extends st.component<IMwcListAttrs> implements ILifecycle {
  @attr
  ripple: boolean = true;

  @attr
  twoLine: boolean = false;

  @attr
  singleSelection: boolean = false;

  @attr
  nonInteractive: boolean = false;

  @attr
  dense: boolean = false;

  @attr
  avatarList: boolean = false;

  @attr
  wrapFocus: boolean = false;

  protected mdcList: MDCList;
  protected mdcListItemRipples: Array<any>;

  onAfterElCreate() {
    const classes = [...this.elClass];

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
    this.elClass = [...classes, "mdc-list"];

    this.elStyle = {
      ...this.elStyle,
      display: "block",
    };
  }

  render() {
    return this.renderChildren();
  }

  onAfterRender(): void {
    this.mdcList = new MDCList(this.el);

    this.mdcList.singleSelection = this.singleSelection;
    this.mdcList.wrapFocus = this.wrapFocus;

    if (this.ripple) {
      this.mdcListItemRipples = this.mdcList.listElements.map(listItemEl => new MDCRipple(listItemEl));
    }
  }

  onDisconnect() {
    this.mdcList.destroy();
  }
}