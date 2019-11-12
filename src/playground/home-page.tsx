import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcDrawerAppContent } from "../component/drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import { MwcDrawerContent } from "../component/drawer/mwc-drawer-content/mwc-drawer-content";
import { MwcDrawerHeader } from "../component/drawer/mwc-drawer-header/mwc-drawer-header";
import { MwcDrawerSubtitle } from "../component/drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import { MwcDrawerTitle } from "../component/drawer/mwc-drawer-title/mwc-drawer-title";
import { MwcDrawer } from "../component/drawer/mwc-drawer/mwc-drawer";
import { MwcList } from "../component/list/mwc-list/mwc-list";
import { MwcTopBar } from "../component/mwc-top-bar/mwc-top-bar";
import { MwcTopBarVariant } from "../component/mwc-top-bar/mwc-top-bar-variant";
import { MwcTypography } from "../component/typography/mwc-typography/mwc-typography";
import { getDrawerListItems } from "./getdrawerlistitems";
import * as homePage from "./home-page.tss.scss";
import { ROUTES } from "./routes";

@component()
export class HomePage extends st.component {
  //@attr(AttrType.DOM_INTRANSPARENT)
  drawerAndTopBarFixed: boolean = true;

  @domRef("drawer")
  drawer!: MwcDrawer;

  render() {
    //const fixedIconButtonsClass = ['material-icons', 'mdc-top-app-bar__action-item mdc-icon-button'];
    const fixedMenuButtonClass = ["mdc-icon-button", "material-icons", "mdc-top-app-bar__navigation-icon"];
    const drawerRootClasses = [];
    return (
      <MwcTypography>
        <MwcDrawer ref={{ drawer: this }} variant="modal" customClass={["mwc-drawer--most-top", homePage.mwcDrawerMostTop]} fixed={this.drawerAndTopBarFixed}>
          <MwcDrawerHeader>
            <MwcDrawerTitle>Material Web Components</MwcDrawerTitle>
            <MwcDrawerSubtitle>springtype</MwcDrawerSubtitle>
          </MwcDrawerHeader>
          <MwcDrawerContent>
            <MwcList>{getDrawerListItems(this)}</MwcList>
          </MwcDrawerContent>
        </MwcDrawer>
        <MwcDrawerAppContent>
          <div class={drawerRootClasses}>
            <MwcTopBar title="Material Design Components for springtype" variant={MwcTopBarVariant.STANDARD} fixed={this.drawerAndTopBarFixed}>
              <template slot={MwcTopBar.SLOT_NAME_MENU_ICON_BUTTON}>
                <button
                  onClick={() => {
                    if (this.drawer.isOpen) {
                      this.drawer.close();
                    } else {
                      this.drawer.open();
                    }
                  }}
                  class={fixedMenuButtonClass}
                >
                  menu
                </button>
              </template>
              <template slot={MwcTopBar.SLOT_NAME_TRAILING_ICONS}>
                {/*
                                    <button class={fixedIconButtonsClass} aria-label="Download">file_download</button>
                                    <button class={fixedIconButtonsClass} aria-label="Print this page">print</button>
                                    <button class={fixedIconButtonsClass} aria-label="Bookmark this page">bookmark</button>
                                        */}
              </template>
              <template slot={MwcTopBar.SLOT_NAME_TOP_BAR_BODY}>{ROUTES}</template>
            </MwcTopBar>
          </div>
        </MwcDrawerAppContent>
      </MwcTypography>
    );
  }
}
