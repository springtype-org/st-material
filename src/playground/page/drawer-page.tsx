import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcDrawerAppContent } from "../../component/drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import { MwcDrawerContent } from "../../component/drawer/mwc-drawer-content/mwc-drawer-content";
import { MwcDrawerHeader } from "../../component/drawer/mwc-drawer-header/mwc-drawer-header";
import { MwcDrawerSubtitle } from "../../component/drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import { MwcDrawerTitle } from "../../component/drawer/mwc-drawer-title/mwc-drawer-title";
import { MwcDrawer } from "../../component/drawer/mwc-drawer/mwc-drawer";
import { MwcListItemIcon } from "../../component/list/mwc-list-item-icon/mwc-list-item-icon";
import { MwcListItemText } from "../../component/list/mwc-list-item-text/mwc-list-item-text";
import { MwcListItem } from "../../component/list/mwc-list-item/mwc-list-item";
import { MwcList } from "../../component/list/mwc-list/mwc-list";

@component()
export class DrawerPage extends st.component {
  static ROUTE = "/#/drawer-page";

  render() {
    return (
      <div>
        <MwcDrawer open={true}>
          <MwcDrawerHeader>
            <MwcDrawerTitle>Mail</MwcDrawerTitle>
            <MwcDrawerSubtitle>email@material.io</MwcDrawerSubtitle>
          </MwcDrawerHeader>

          <MwcDrawerContent>
            <MwcList>
              <MwcListItem activated={true} autoWrapText={false}>
                <MwcListItemIcon type="inbox"></MwcListItemIcon>
                <MwcListItemText>Inbox</MwcListItemText>
              </MwcListItem>

              <MwcListItem autoWrapText={false}>
                <MwcListItemIcon type="send"></MwcListItemIcon>
                <MwcListItemText>Outgoing</MwcListItemText>
              </MwcListItem>

              <MwcListItem autoWrapText={false}>
                <MwcListItemIcon type="drafts"></MwcListItemIcon>
                <MwcListItemText>Drafts</MwcListItemText>
              </MwcListItem>
            </MwcList>
          </MwcDrawerContent>
        </MwcDrawer>
        <MwcDrawerAppContent>App content</MwcDrawerAppContent>
      </div>
    );
  }
}
