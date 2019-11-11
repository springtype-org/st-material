import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";
import {MwcSelect} from "../../component/mwc-select/mwc-select";
import {MwcListItem} from "../../component/list/mwc-list-item/mwc-list-item";

@component()
export class SelectPage extends st.component {
    static ROUTE = "/#/select-page";

    render() {
        const radioGroupName = 'gender-group';
        return (
            <div>
                <div>
                    <MwcH6>Select</MwcH6>
                    <MwcSelect label="Please select">
                        <template slot={MwcSelect.SLOT_NAME_LIST_ITEMS}>
                            <MwcListItem autoWrapText={true} data-value={{level: 'noob'}}>
                                Noob
                            </MwcListItem>
                        </template>
                    </MwcSelect>
                </div>
            </div>
        );
    }


}
