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
  @domRef("drawer")
  drawer!: MwcDrawer;

  @domRef("topBar")
  topBar!: MwcTopBar;

  @domRef("appContent")
  appContent!: HTMLElement;

  drawerAndTopBarFixed: boolean = true;

  render() {
    return (
      <MwcTypography>
        <MwcTopBar ref={{ topBar: this }} title="Material Design Components for springtype" variant={MwcTopBarVariant.STANDARD} fixed={this.drawerAndTopBarFixed} />
        <MwcDrawer ref={{ drawer: this }} variant="modal" fixed={this.drawerAndTopBarFixed}>
          <MwcDrawerHeader>
            <MwcDrawerTitle>Material Design for SpringType</MwcDrawerTitle>
            <MwcDrawerSubtitle>{process.env.ST_MATERIAL_VERSION}</MwcDrawerSubtitle>
          </MwcDrawerHeader>
          <MwcDrawerContent>
            <MwcList>{getDrawerListItems(this)}</MwcList>
          </MwcDrawerContent>
        </MwcDrawer>
        <MwcDrawerAppContent fixed={this.drawerAndTopBarFixed}>
          <div class="main-content" ref={{ appContent: this }}>{ROUTES}</div>
        </MwcDrawerAppContent>
      </MwcTypography>
    );
  }

  onAfterRender() {

    this.topBar.mdcComponent.setScrollTarget(this.appContent);
    this.topBar.mdcComponent.listen("MDCTopAppBar:nav", () => {
      console.log("nav happened!");
      this.drawer.toggle();
    });
  }
}
