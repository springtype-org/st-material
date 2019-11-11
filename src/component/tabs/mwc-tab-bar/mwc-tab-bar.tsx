import { MDCTabBar } from "@material/tab-bar";
import { st } from "springtype/core";
import { attr, component, emit, evt } from "springtype/web/component";
import { IEvent, IEventListener } from "springtype/web/component/interface";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

export interface TabActivateDetail { index: number };

export interface IActivateEvent {
  detail: TabActivateDetail;
}

export interface TabActivateEvent extends IEvent<TabActivateDetail> {}

@component()
export class  MwcTabBar extends st.component implements ILifecycle {

  @evt
  onStClick: IEventListener<TabActivateDetail, Event> = evt;
  

  @attr(AttrType.DOM_INTRANSPARENT)
  focusOnActivate: boolean = true;

  @attr(AttrType.DOM_INTRANSPARENT)
  useAutomaticActivation: boolean = true;

  protected mdcComponent: MDCTabBar;

  render() {

    const classes = ["mdc-tab-bar"];

    this.el.style.display = "block";

    return (
        <div class={classes} role="tablist" >
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">{this.virtualSlotChildren.default}</div>
        </div>
      </div>
      </div>
    );
  }
  onAfterInitialRender(): void {
    //@ts-ignore
    this.mdcComponent = new MDCTabBar(this.el);

    //@ts-ignore
    this.mdcComponent.listen("MDCTabBar:activated", ((evt: IActivateEvent) => {

      emit<TabActivateDetail>(this.el, "tab-activated", {
        bubbles: true,
        cancelable: true,
        composed: true,
        detail: {
          ...evt.detail
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
