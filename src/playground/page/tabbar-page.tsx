import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcTabBar } from "../../component/tabs/mwc-tab-bar/mwc-tab-bar";
import { MwcTab } from "../../component/tabs/mwc-tab/mwc-tab";
import { MwcSubtitle1 } from "../../component/typography/mwc-subtitle1/mwc-subtitle1";

@component()
export class TabBarPage extends st.component {
    static ROUTE = "/#/tabbar-page";

    render() {
        return (
            <div>
                <MwcSubtitle1>Tabs</MwcSubtitle1>

                <MwcTabBar>
                    <MwcTab icon="star" label="Aron"></MwcTab>
                    <MwcTab icon="star" label="Michi"></MwcTab>
                    <MwcTab icon="star" label="René"></MwcTab>
                </MwcTabBar>
            </div>
        );
    }
}
