import {st} from "springtype/core";
import {attr, component, event} from "springtype/web/component";
import {IEvent, IEventListener} from "springtype/web/component/interface";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {ref} from "springtype/core/ref";
import {MwcTab} from "../mwc-tab/mwc-tab";
import {IElement} from "springtype/web/vdom/interface";

export interface TabActivateDetail {
    index: number;
}

export interface ITabActivateEvent {
    detail?: TabActivateDetail;
}

export interface TabActivateEvent extends IEvent<TabActivateDetail> {
}

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
                    this.activateByIndex(i, evt);
                }
            }
        });
        this.el.addEventListener('touchstart', (evt: TouchEvent) => {
            for (let i = 0; i < this.INTERNAL.childComponents.length; i++) {
                if (this.INTERNAL.childComponents[i] === (evt.target as IElement).$stComponentRef) {
                    this.activateByIndex(i, evt);
                }
            }
        });
    }

    activateByIndex = (index: number, evt?: MouseEvent | TouchEvent) => {
        for (let i = 0; i < this.INTERNAL.childComponents.length; i++) {
            const tab = this.INTERNAL.childComponents[i] as MwcTab;
            if (index !== i) {
                tab.activate(false, evt);
            } else {
                tab.activate(true, evt);
                tab.el.focus();
                this.fireTabFocus(i);
                this.fireTabActivate(i);
            }
        }
    };

    fireTabActivate = (index: number) => {
        st.event<TabActivateDetail>(this.el, 'TabActivate', {
            detail: {
                index
            }
        });
    };

    fireTabFocus = (index: number) => {
        st.event<TabActivateDetail>(this.el, 'TabFocus', {
            detail: {
                index
            }
        });
    };

    render() {
        this.el.style.display = "block";
        return (
            <div class={["mdc-tab-bar"]} ref={{tabBarRef: this}} role="tablist">
                <div class="mdc-tab-scroller">
                    <div class="mdc-tab-scroller__scroll-area">
                        <div class="mdc-tab-scroller__scroll-content">{this.renderChildren()}</div>
                    </div>
                </div>
            </div>
        );
    }

    onAfterRender(hasDOMChanged: boolean): void {
        if (hasDOMChanged && this.activeTab > -1) {
            this.activateByIndex(this.activeTab);
        }
    }


    activateTab(index: number): void {
        this.activateByIndex(index);
    }
}