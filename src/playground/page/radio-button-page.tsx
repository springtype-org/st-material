import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcRadioField} from "../../component/mwc-radio-field/mwc-radio-field";
import {PageBody} from "../component/page-body";
import {PageTitle} from "../component/page-title";
import {MwcLayoutGridCell} from "../../component/mwc-layout";

@component
export class RadioButtonPage extends st.component {
    static ROUTE = "radio-button-page";

    render() {
        const radioGroupName = "gender-group";
        return <PageBody>
            <PageTitle title={'Radio Button'}>
                <div>Radio buttons allow the user to select one option from a set while seeing all available options.
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/components/web/catalog/input-controls/radio-buttons/'}>Design
                                &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank" href={'https://material.io/go/design-radio-buttons'}>Material Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
              <template slot={PageTitle.SLOT_ICON}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50"
                     height="50" viewBox="0 0 24 24">
                  <path
                      d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </template>
            </PageTitle>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcRadioField label="A" disabled={false} name={radioGroupName} checked={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcRadioField label="B" disabled={false} name={radioGroupName}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcRadioField label="C" disabled={true} name={radioGroupName}/>
            </MwcLayoutGridCell>
        </PageBody>;
    }
}
