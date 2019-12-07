import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {ITabActivateEvent, MwcTabBar} from "../../component/mwc-tabs/mwc-tab-bar/mwc-tab-bar";
import {MwcTab} from "../../component/mwc-tabs/mwc-tab/mwc-tab";
import {MwcSubtitle1} from "../../component/mwc-typography/mwc-subtitle1/mwc-subtitle1";
import {RenderReason, RenderReasonMetaData} from "springtype/web/component/interface/irender-reason";

@component
export class TabBarPage extends st.component {
    static ROUTE = "tabbar-page";

    onTabActivated = (evt: ITabActivateEvent) => {
       console.log('tab activated', evt.detail.index);
    };

    render() {
        return (
            <div>
                <MwcSubtitle1>Tabs</MwcSubtitle1>

                <MwcTabBar onTabActivate={this.onTabActivated} activeTab={0}>
                    <MwcTab icon="star" label="Aron"/>
                    <MwcTab icon="star" label="Michi"/>
                    <MwcTab icon="star" label="René"/>
                </MwcTabBar>
            </div>
        );
    }

    shouldRender(reason: RenderReason, meta?: RenderReasonMetaData): boolean {
        console.log('shouldRender tabbar page', reason, meta);
        return true;
    }

    onAfterRender(hasDOMChanged: boolean): void {
        console.log('render tabbar page')
    }
}
