import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { MDCLineRipple } from '@material/line-ripple/component'; 
import { MDCRipple } from "@material/ripple";
import { IEvent, IEventListener } from "springtype/web/component/interface";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import { ref } from "springtype/core/ref";
import { event } from "springtype/web/component";
import { MwcTab } from "../mwc-tab/mwc-tab";
import { IElement } from "springtype/web/vdom/interface";

export interface TabActivateDetail {
  index: number;
}

export interface ITabActivateEvent {
  detail?: TabActivateDetail;
}

export interface TabActivateEvent extends IEvent<TabActivateDetail> { }

export interface IMwcTabAttrs {
  activeTab?: number;
  onTabActivate?: IEventListener<TabActivateDetail>;
}

@component
export class MwcTabBar extends st.component<IMwcTabAttrs> implements ILifecycle {

  @event
  onTabActivate: IEventListener<TabActivateDetail>;

  @ref
  tabBarRef: HTMLElement;

  @attr
  activeTab: number = -1;

  onAfterElCreate() {

    this.el.addEventListener('click', (evt: MouseEvent) => {
      for (let i = 0; i < this.INTERNAL.childComponents.length; i++) {
        if (this.INTERNAL.childComponents[i] === (evt.target as IElement).$stComponentRef) {
          this.activateByIndex(i);
        }
      }
    });


  }

  activateByIndex = (index: number) => {

    for (let i = 0; i < this.INTERNAL.childComponents.length; i++) {

      const tab = this.INTERNAL.childComponents[i] as MwcTab;

      if (index !== i) {
        (tab as MwcTab).active = false;
      } else {
        (tab as MwcTab).active = true;
        this.fireTabActivate(i);
      }
    }
  }

  fireTabActivate = (index: number) => {
    st.event<TabActivateDetail>(this.el, 'TabActivate', {
      detail: {
        index
      }
    });
  };

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

  onAfterInitialRender() {

    if (this.activeTab > -1) {
      this.activateByIndex(this.activeTab);
    }
  }

  activateTab(index: number): void {
    this.activateByIndex(index);
  }
}