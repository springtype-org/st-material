import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcListDivider } from "../../component/list/mwc-list-divider/mwc-list-divider";
import { MwcListItemIcon } from "../../component/list/mwc-list-item-icon/mwc-list-item-icon";
import { MwcListItemTextPrimary } from "../../component/list/mwc-list-item-text-primary/mwc-list-item-text-primary";
import { MwcListItemTextSecondary } from "../../component/list/mwc-list-item-text-secondary/mwc-list-item-text-secondary";
import { MwcListItemText } from "../../component/list/mwc-list-item-text/mwc-list-item-text";
import { MwcListItem } from "../../component/list/mwc-list-item/mwc-list-item";
import { MwcList } from "../../component/list/mwc-list/mwc-list";
import { MwcCheckbox } from "../../component/mwc-checkbox/mwc-checkbox";
import { MwcSubtitle1 } from "../../component/typography/mwc-subtitle1/mwc-subtitle1";
import * as listPageStyle from "./list-page.tss.scss";

@component
export class ListPage extends st.component {
  static ROUTE = "#/list-page";

  render() {
    return (
      <div>
        <MwcSubtitle1>Simple list with item variants</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList}>
          <MwcListItem>Single-line item</MwcListItem>

          <MwcListItem activated={true}>Single-line item, activated</MwcListItem>

          <MwcListItem disabled={true}>Single-line item, disabled</MwcListItem>

          <MwcListItem selected={true}>Single-line item, selected</MwcListItem>
        </MwcList>

        <MwcSubtitle1>Two-line list with item variants</MwcSubtitle1>

        <MwcList twoLine={true} class={listPageStyle.demoList}>
          <MwcListItem>
            <MwcListItemTextPrimary>Two-line item</MwcListItemTextPrimary>
            <MwcListItemTextSecondary>Secondary text</MwcListItemTextSecondary>
          </MwcListItem>

          <MwcListItem activated={true}>
            <MwcListItemTextPrimary>Two-line item, activated</MwcListItemTextPrimary>
            <MwcListItemTextSecondary>Secondary text</MwcListItemTextSecondary>
          </MwcListItem>

          <MwcListItem disabled={true}>
            <MwcListItemTextPrimary>Two-line item, disabled</MwcListItemTextPrimary>
            <MwcListItemTextSecondary>Secondary text</MwcListItemTextSecondary>
          </MwcListItem>

          <MwcListItem selected={true}>
            <MwcListItemTextPrimary>Two-line item, selected</MwcListItemTextPrimary>
            <MwcListItemTextSecondary>Secondary text</MwcListItemTextSecondary>
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>Leading Icon</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList}>
          <MwcListItem autoWrapText={false}>
            <MwcListItemIcon type="wifi" />
            Single-line item
          </MwcListItem>

          <MwcListItem autoWrapText={false} activated={true}>
            <MwcListItemIcon type="bluetooth" />
            Single-line item, activated
          </MwcListItem>

          <MwcListItem autoWrapText={false} disabled={true}>
            <MwcListItemIcon type="data_usage" />
            Single-line item, disabled
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>List with activated item</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList} singleSelection={true}>
          <MwcListItem autoWrapText={false}>
            <MwcListItemIcon type="wifi" />
            Single-line item
          </MwcListItem>

          <MwcListItem autoWrapText={false} activated={true}>
            <MwcListItemIcon type="star" />
            Single-line item, activated
          </MwcListItem>

          <MwcListItem autoWrapText={false} disabled={true}>
            <MwcListItemIcon type="send" />
            Single-line item, disabled
          </MwcListItem>

          <MwcListItem autoWrapText={false}>
            <MwcListItemIcon type="drafts" />
            Single-line item, disabled
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>Shaped list with activated item</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList} singleSelection={true}>
          <MwcListItem autoWrapText={false} class={listPageStyle.demoListItemShaped}>
            <MwcListItemIcon type="wifi" />
            Single-line item
          </MwcListItem>

          <MwcListItem autoWrapText={false} activated={true} class={listPageStyle.demoListItemShaped}>
            <MwcListItemIcon type="star" />
            Single-line item, activated
          </MwcListItem>

          <MwcListItem autoWrapText={false} disabled={true} class={listPageStyle.demoListItemShaped}>
            <MwcListItemIcon type="send" />
            Single-line item, disabled
          </MwcListItem>

          <MwcListItem autoWrapText={false} class={listPageStyle.demoListItemShaped}>
            <MwcListItemIcon type="drafts" />
            Single-line item, disabled
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>Trailing icon</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList} singleSelection={true}>
          <MwcListItem autoWrapText={false}>
            Single-line item
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>

          <MwcListItem autoWrapText={false} activated={true}>
            Single-line item, activated
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>

          <MwcListItem autoWrapText={false} disabled={true}>
            Single-line item, disabled
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>

          <MwcListItem autoWrapText={false}>
            Single-line item, disabled
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>Two-Line with Leading and Trailing Icon and Divider</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList} avatarList={true} twoLine={true} singleSelection={true}>
          <MwcListItem autoWrapText={false}>
            <MwcListItemIcon type="folder" graphic={true} />
            <MwcListItemText>
              <MwcListItemTextPrimary>Dog Photos</MwcListItemTextPrimary>
              <MwcListItemTextSecondary>9 Jan 2018</MwcListItemTextSecondary>
            </MwcListItemText>
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>

          <MwcListDivider />

          <MwcListItem autoWrapText={false}>
            <MwcListItemIcon type="folder" graphic={true} />
            <MwcListItemText>
              <MwcListItemTextPrimary>Cat Photos</MwcListItemTextPrimary>
              <MwcListItemTextSecondary>22 Dec 2017</MwcListItemTextSecondary>
            </MwcListItemText>
            <MwcListItemIcon type="info" meta={true} />
          </MwcListItem>
        </MwcList>

        <MwcSubtitle1>List with Trailing Checkbox</MwcSubtitle1>

        <MwcList class={listPageStyle.demoList} singleSelection={true}>
          <MwcListItem autoWrapText={false}>
            Dog Photos
            <MwcCheckbox class="mdc-list-item__meta" />
          </MwcListItem>

          <MwcListDivider />

          <MwcListItem autoWrapText={false}>
            Cat Photos
            <MwcCheckbox class="mdc-list-item__meta" />
          </MwcListItem>
        </MwcList>
      </div>
    );
  }
}
