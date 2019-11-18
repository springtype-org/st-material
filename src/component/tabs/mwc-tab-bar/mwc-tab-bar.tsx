import { MDCTabBar } from "@material/tab-bar";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { IEvent, IEventListener } from "springtype/web/component/interface";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { ref } from "springtype/core/ref";
import { event } from "springtype/web/component";

export interface TabActivateDetail {
  index: number;
}

export interface IActivateEvent {
  detail: TabActivateDetail;
}

export interface TabActivateEvent extends IEvent<TabActivateDetail> {}

@component
export class MwcTabBar extends st.component implements ILifecycle {
  @ref
  tabBarRef: HTMLElement;

  @event
  onStClick: IEventListener<TabActivateDetail, Event> = event;

  @attr
  focusOnActivate: boolean = true;

  @attr
  useAutomaticActivation: boolean = true;

  protected mdcComponent: MDCTabBar;

  render() {
    const classes = ["mdc-tab-bar"];

    this.el.style.display = "block";

    return (
      <div class={classes} ref={{ tabBarRef: this }} role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">{this.renderChildren()}</div>
          </div>
        </div>
      </div>
    );
  }
  onAfterInitialRender(): void {
    //@ts-ignore
    this.mdcComponent = new MDCTabBar(this.tabBarRef);

    //@ts-ignore
    this.mdcComponent.listen("MDCTabBar:activated", ((evt: IActivateEvent) => {
      st.event<TabActivateDetail>(this.el, "tab-activated", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          ...evt.detail,
        },
      });
    }) as any);

    this.mdcComponent.focusOnActivate = this.focusOnActivate;
    this.mdcComponent.useAutomaticActivation = this.useAutomaticActivation;
  }

  activateTab(index: number): void {
    this.mdcComponent.activateTab(index);
  }

  scrollIntoView(index: number): void {
    this.mdcComponent.scrollIntoView(index);
  }

  onDisconnect() {
    this.mdcComponent.destroy();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTabBar: Partial<MwcTabBar>;
    }
  }
}
