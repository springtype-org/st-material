import { MDCTab } from "@material/tab";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { ref } from "springtype/core/ref";

export interface IMwcTabAttrs {
  ripple?: boolean;
  active?: boolean;
  icon?: string;
  label?: string;
}

@component()
export class MwcTab extends st.component<IMwcTabAttrs> implements ILifecycle {
  @ref
  tabRef: HTMLElement;

  @attr
  ripple: boolean = true;

  @attr
  active: boolean = false;

  @attr
  icon: string;

  @attr
  label: string = "";

  mdcTab: MDCTab;

  render() {
    const classes = ["mdc-tab", ...this.elClass];

    if (this.active) {
      classes.push("mdc-tab--active");
    }

    this.el.style.display = "block";

    const elements = [];
    const tabContent = [];

    if (this.icon) {
      tabContent.push(
        <span class="mdc-tab__icon material-icons" aria-hidden="true">
          {this.icon}
        </span>,
      );
    }

    tabContent.push(<span class="mdc-tab__text-label">{this.label}</span>);

    elements.push(<span class="mdc-tab__content">{tabContent}</span>);

    //always add indicator
    elements.push(this.getIndicator());

    if (this.ripple) {
      elements.push(<span class="mdc-tab__ripple" />);
    }

    return (
      <div ref={{ tabRef: this }} class={classes}>
        {elements}
      </div>
    );
  }

  private getIndicator() {
    const indicatorClasses = ["mdc-tab-indicator"];

    if (this.active) {
      indicatorClasses.push("mdc-tab-indicator--active");
    }
    return (
      <span class={indicatorClasses}>
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline" />
      </span>
    );
  }

  onAfterRender(): void {
    this.mdcTab = new MDCTab(this.tabRef);

    // TODO
    //this.mdcTab.listen()
  }

  onDisconnect() {
    this.mdcTab.destroy();
  }
}