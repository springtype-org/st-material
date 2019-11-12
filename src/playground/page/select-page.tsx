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

                    <MwcSelect label="Please select" onStChange={(evt)=> console.log(evt) }>
                        <template slot={MwcSelect.SLOT_NAME_LIST_ITEMS}>
                            <MwcListItem autoWrapText={true} data-value={{level: 'noob'}}>
                                Noob
                            </MwcListItem>
                            <MwcListItem autoWrapText={true} data-value={{level: 'beginner'}}>
                                Beginner
                            </MwcListItem>
                            <MwcListItem autoWrapText={true} data-value={{level: 'normal'}}>
                                Normal
                            </MwcListItem>
                            <MwcListItem autoWrapText={true} data-value={{level: 'advanced'}}>
                                Advanced
                            </MwcListItem>
                            <MwcListItem autoWrapText={true} data-value={{level: 'expert'}}>
                                Expert
                            </MwcListItem>
                        </template>
                    </MwcSelect>
                </div>
            </div>
        );
    }
}
