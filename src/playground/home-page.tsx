import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcDrawer } from "../component/mwc-drawer/mwc-drawer/mwc-drawer";
import { MwcTopBar } from "../component/mwc-top-bar/mwc-top-bar";
import { MwcTypography } from "../component/mwc-typography/mwc-typography/mwc-typography";
import { ROUTES } from "./routes";
import { getDrawerListItems } from "./getdrawerlistitems";
import { MwcList } from "../component/mwc-list/mwc-list/mwc-list";
import { MwcTopBarVariant } from "../component/mwc-top-bar/mwc-top-bar-variant";
import { MwcDrawerAppContent } from "../component/mwc-drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import { MwcDrawerContent } from "../component/mwc-drawer/mwc-drawer-content/mwc-drawer-content";
import { MwcDrawerSubtitle } from "../component/mwc-drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import { MwcDrawerHeader } from "../component/mwc-drawer/mwc-drawer-header/mwc-drawer-header";
import { MwcDrawerTitle } from "../component/mwc-drawer/mwc-drawer-title/mwc-drawer-title";

@component
export class HomePage extends st.component {

  @ref
  drawer!: MwcDrawer;

  @ref
  topBar!: MwcTopBar;

  @ref
  appContent!: MwcDrawerAppContent;

  drawerAndTopBarFixed: boolean = true;

  render() {
    return (
      <MwcTypography>
        <MwcDrawer ref={{ drawer: this }} variant={"modal"} fixed={this.drawerAndTopBarFixed}>
          <MwcDrawerHeader>
            <MwcDrawerTitle>Material Design for SpringType</MwcDrawerTitle>
            <MwcDrawerSubtitle>{process.env.ST_MATERIAL_VERSION}</MwcDrawerSubtitle>
          </MwcDrawerHeader>
          <MwcDrawerContent>
            <MwcList>{getDrawerListItems(this)}</MwcList>
          </MwcDrawerContent>
        </MwcDrawer>

        <MwcDrawerAppContent fixed={false}>
          <MwcTopBar
            ref={{ topBar: this }}
            title="Material Design Components for springtype"
            variant={MwcTopBarVariant.SHORT}
            fixed={this.drawerAndTopBarFixed}
          />
          <MwcDrawerAppContent fixed={this.drawerAndTopBarFixed} ref={{ appContent: this }}>
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
