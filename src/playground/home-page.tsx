import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {domRef, tsx} from "springtype/web/vdom";
import {MwcDrawer} from "../component/drawer/mwc-drawer/mwc-drawer";
import {MwcTopBar} from "../component/mwc-top-bar/mwc-top-bar";
import {MwcTypography} from "../component/typography/mwc-typography/mwc-typography";
import {ROUTES} from "./routes";
import {getDrawerListItems} from "./getdrawerlistitems";
import {MwcList} from "../component/list/mwc-list/mwc-list";
import {MwcTopBarVariant} from "../component/mwc-top-bar/mwc-top-bar-variant";
import {MwcDrawerAppContent} from "../component/drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import {MwcDrawerContent} from "../component/drawer/mwc-drawer-content/mwc-drawer-content";
import {MwcDrawerSubtitle} from "../component/drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import {MwcDrawerHeader} from "../component/drawer/mwc-drawer-header/mwc-drawer-header";
import {MwcDrawerTitle} from "../component/drawer/mwc-drawer-title/mwc-drawer-title";

@component()
export class HomePage extends st.component {
    @domRef("drawer")
    drawer!: MwcDrawer;

    @domRef("topBar")
    topBar!: MwcTopBar;

    @domRef("appContent")
    appContent!: MwcDrawerAppContent;

    drawerAndTopBarFixed: boolean = true;

    render() {
        return (
            <MwcTypography>
                <MwcDrawer ref={{drawer: this}} variant={"modal"} fixed={this.drawerAndTopBarFixed}>
                    <MwcDrawerHeader>
                        <MwcDrawerTitle>Material Design for SpringType</MwcDrawerTitle>
                        <MwcDrawerSubtitle>{process.env.ST_MATERIAL_VERSION}</MwcDrawerSubtitle>
                    </MwcDrawerHeader>
                    <MwcDrawerContent>
                        <MwcList>{getDrawerListItems(this)}</MwcList>
                    </MwcDrawerContent>
                </MwcDrawer>

                <MwcDrawerAppContent fixed={false}>
                    <MwcTopBar ref={{topBar: this}} title="Material Design Components for springtype"
                               variant={MwcTopBarVariant.SHORT} fixed={this.drawerAndTopBarFixed}/>
                    <MwcDrawerAppContent fixed={this.drawerAndTopBarFixed} ref={{appContent: this}}>
                        {ROUTES}
                    </MwcDrawerAppContent>
                </MwcDrawerAppContent>
            </MwcTypography>
        );
    }

    onAfterRender() {
        this.topBar.mdcComponent.setScrollTarget(this.appContent.contentRef);
        this.topBar.mdcComponent.listen("MDCTopAppBar:nav", () => {
            console.log("nav happened!");
            this.drawer.toggle();
        });
    }
}
