import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcDrawerContent } from "../../component/mwc-drawer/mwc-drawer-content/mwc-drawer-content";
import { MwcDrawerHeader } from "../../component/mwc-drawer/mwc-drawer-header/mwc-drawer-header";
import { MwcDrawerSubtitle } from "../../component/mwc-drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import { MwcDrawerTitle } from "../../component/mwc-drawer/mwc-drawer-title/mwc-drawer-title";
import { MwcListItemIcon } from "../../component/mwc-list/mwc-list-item-icon/mwc-list-item-icon";
import { MwcListItemText } from "../../component/mwc-list/mwc-list-item-text/mwc-list-item-text";
import { MwcListItem } from "../../component/mwc-list/mwc-list-item/mwc-list-item";
import { MwcList } from "../../component/mwc-list/mwc-list/mwc-list";

@component
export class DrawerPage extends st.component {
  static ROUTE = "/#/drawer-page";

  render() {
    return (
      <div
        style={{
          maxWidth: 255,
          height: "100%",
        }}
      >
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
      </div>
    );
  }
}
