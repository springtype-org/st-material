import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcTopBar} from "../component/mwc-top-bar/mwc-top-bar";
import {MwcTypography} from "../component/typography/mwc-typography/mwc-typography";
import {MwcTopBarVariant} from "../component/mwc-top-bar/mwc-top-bar-variant";
import {MwcDrawer} from "../component/drawer/mwc-drawer/mwc-drawer";
import {MwcDrawerHeader} from "../component/drawer/mwc-drawer-header/mwc-drawer-header";
import {MwcDrawerTitle} from "../component/drawer/mwc-drawer-title/mwc-drawer-title";
import {MwcDrawerSubtitle} from "../component/drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import {MwcDrawerContent} from "../component/drawer/mwc-drawer-content/mwc-drawer-content";
import {MwcList} from "../component/list/mwc-list/mwc-list";
import {MwcDrawerAppContent} from "../component/drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import {AttrType} from "springtype/web/component/trait/attr";
import * as homePage from "./home-page.tss.scss"
import {getDrawerListItems} from "./getdrawerlistitems";
import {ROUTES} from "./routes";

@component()
export class HomePage extends st.component {
    @attr(AttrType.DOM_INTRANSPARENT)
    drawerOpen: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    drawerAndTopBarFixed: boolean = true;

    render() {
        //const fixedIconButtonsClass = ['material-icons', 'mdc-top-app-bar__action-item mdc-icon-button'];
        const fixedMenuButtonClass = ['mdc-icon-button', 'material-icons', 'mdc-top-app-bar__navigation-icon'];
        const drawerRootClasses = [];
        if (this.drawerAndTopBarFixed && this.drawerOpen) {
            drawerRootClasses.push('drawer-open-padding-fix', homePage.drawerOpenPaddingFix);
        }
        return (
            <MwcTypography>
                <div>
                    <MwcDrawer open={this.drawerOpen} fixed={this.drawerAndTopBarFixed}>
                        <MwcDrawerHeader>
                            <MwcDrawerTitle>Mail Web Components</MwcDrawerTitle>
                            <MwcDrawerSubtitle>springtype</MwcDrawerSubtitle>
                        </MwcDrawerHeader>
                        <MwcDrawerContent>
                            <MwcList>
                                {getDrawerListItems(this)}
                            </MwcList>
                        </MwcDrawerContent>
                    </MwcDrawer>
                    <MwcDrawerAppContent>
                        <div class={drawerRootClasses}>
                            <MwcTopBar title="Material Design Components for springtype" variant={MwcTopBarVariant.STANDARD}
                                       fixed={this.drawerAndTopBarFixed}>
                                <template slot={MwcTopBar.SLOT_NAME_MENU_ICON_BUTTON}>
                                    <button onClick={() => this.drawerOpen = !this.drawerOpen}
                                            class={fixedMenuButtonClass}>menu
                                    </button>
                                </template>
                                <template slot={MwcTopBar.SLOT_NAME_TRAILING_ICONS}>
                                    {/*
                                    <button class={fixedIconButtonsClass} aria-label="Download">file_download</button>
                                    <button class={fixedIconButtonsClass} aria-label="Print this page">print</button>
                                    <button class={fixedIconButtonsClass} aria-label="Bookmark this page">bookmark</button>
                                        */
                                    }

                                </template>
                                <template slot={MwcTopBar.SLOT_NAME_TOP_BAR_BODY}>
                                    {ROUTES}
                                </template>
                            </MwcTopBar></div>
                    </MwcDrawerAppContent>
                </div>
            </MwcTypography>
        );
    }
}
