import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcCheckbox} from "../../component/mwc-checkbox/mwc-checkbox";
import {PageBody} from "../component/page-body";
import {PageTitle} from "../component/page-title";
import {MwcLayoutGridCell} from "../../component/mwc-layout";
import {ISizePerDeviceType, Size} from "../../component/mwc-layout/mwc-layout-grid-cell/mwc-layout-grid-cell";

@component
export class CheckboxPage extends st.component {
    static ROUTE = "checkbox-page";

    onChange = (evt: any) => {
        console.log("checkbox changed", evt.target.name, "->", evt.target.value);
    };

    render() {
        const size: ISizePerDeviceType = {desktop: Size.half, tablet: Size.half, phone: Size.full};

        return <PageBody>
            <PageTitle title={'Checkboxes'}>
                <div>Checkboxes allow the user to select one or more items from a set.
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/develop/web/components/input-controls/checkboxes/'}>Design
                                &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank" href={'https://material.io/go/design-checkboxes'}>Material Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
                <template slot={PageTitle.SLOT_ICON}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50"
                         height="50" viewBox="0 0 24 24">
                        <path d="M10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"/>
                        <path d="M20 4v16H4V4h16m2-2H2v20h20V2z"/>
                    </svg>
                </template>
            </PageTitle>

            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcCheckbox
                    name="ripple-checked"
                    label="Unchecked"
                    disabled={false}
                    checked={false}
                    onChange={this.onChange}
                />
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcCheckbox
                    name="ripple-checked"
                    label="Checked"
                    disabled={false}
                    checked={true}
                    onChange={this.onChange}
                />
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcCheckbox
                    name="ripple-indeterminate"
                    label="Indeterminate"
                    disabled={false}
                    indeterminate={true}
                    onChange={this.onChange}
                />
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcCheckbox name="disabled" label="Disabled" disabled={true} onChange={this.onChange}/>
            </MwcLayoutGridCell>
        </PageBody>;
    }
}
