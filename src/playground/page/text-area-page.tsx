import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcTextArea} from "../../component/mwc-text-area";
import {PageBody} from "../component/page-body";
import {PageTitle} from "../component/page-title";
import {MwcLayoutGridCell} from "../../component/mwc-layout";
import {MwcH5} from "../../component/mwc-typography";
import {ISizePerDeviceType, Size} from "../../component/mwc-layout/mwc-layout-grid-cell/mwc-layout-grid-cell";

@component
export class TextAreaPage extends st.component {
    static ROUTE = "text-area-page";

    render() {
        const size: ISizePerDeviceType = {desktop: Size.half, tablet: Size.half, phone: Size.full};
        return <PageBody>
            <PageTitle title={'Text Area'}>
                <div>Text fields allow users to input, edit, and select text.
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/develop/web/components/input-controls/text-field/'}>Design &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank" href={'https://material.io/go/design-text-fields'}>Material Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
                <template slot={PageTitle.SLOT_ICON}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path
                            d="M2 19h20v2H2zM19 3h1v14h-1zM9.51 3l-5.5 14h2.25l1.12-3h6.25l1.12 3H17L11.51 3h-2zm-1.38 9l2.38-6.33L12.89 12H8.13z"/>
                    </svg>
                </template>
            </PageTitle>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Filled Text Area</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="springtype" variant={'filled'} rows={5}>Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</MwcTextArea>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="no value" variant={'filled'} rows={5}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
            <MwcTextArea disabled={true} label="springtype" variant={'filled'}>Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</MwcTextArea>
        </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="no value" variant={'filled'}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Outlined Text Area</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="springtype" variant={'outlined'} rows={5}>Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</MwcTextArea>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="no value" variant={'outlined'} rows={5}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea disabled={true} label="springtype" variant={'outlined'}>Lorem ipsum dolor sit amet,
                    consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</MwcTextArea>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell sizePerDeviceType={size}>
                <MwcTextArea label="no value" variant={'outlined'}/>
            </MwcLayoutGridCell>
        </PageBody>;
    }
}
