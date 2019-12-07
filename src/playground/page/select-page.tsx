import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcListItem } from "../../component/mwc-list/mwc-list-item/mwc-list-item";
import { MwcSelect, MwcSelectEvent } from "../../component/mwc-select/mwc-select";
import { MwcH6 } from "../../component/mwc-typography/mwc-h6/mwc-h6";

@component
export class SelectPage extends st.component {
  static ROUTE = "select-page";

  onSelect = (evt: MwcSelectEvent) => {
     console.log("got selection value", evt);
  }

  render() {

    console.log('SelectPage render')

    return (
      <div>
        <div>
          <MwcH6>Select</MwcH6>

          <MwcSelect label="Please select" onMwcSelect={this.onSelect}>
            <template slot={MwcSelect.SLOT_NAME_LIST_ITEMS}>
              <MwcListItem tag="li" autoWrapText={false} dataValue="noob">
                Noob
              </MwcListItem>
              <MwcListItem tag="li" autoWrapText={false} dataValue="beginner">
                Beginner
              </MwcListItem>
              <MwcListItem tag="li" autoWrapText={false} dataValue="normal">
                Normal
              </MwcListItem>
              <MwcListItem tag="li" autoWrapText={false} dataValue="advanced">
                Advanced
              </MwcListItem>
              <MwcListItem tag="li" autoWrapText={false} dataValue="expert">
                Expert
              </MwcListItem>
            </template>
          </MwcSelect>
        </div>
      </div>
    );
  }
}
