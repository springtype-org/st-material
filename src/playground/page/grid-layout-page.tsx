import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";

import * as gridLayoutPageStyle from "./grid-layout-page.tss.scss";
import {MwcLayoutGrid, MwcLayoutGridCell, MwcLayoutGridInner} from "../../component/mwc-layout";
import {MwcBody1, MwcSubtitle1} from "../../component/mwc-typography";
import {PageTitle} from "../component/page-title";

@component
export class GridLayoutPage extends st.component {
    static ROUTE = "grid-layout-page";

    render() {
        return <fragment>
            <PageTitle title={'Layout Grid'}>
                <div>Material design’s responsive UI is based on a column grid layout: (
                    <ul style="list-style-type: none;">
                        <li><strong>desktop: 12 columns</strong></li>
                        <li><strong>tablet: 8 columns</strong></li>
                        <li><strong>phone: 4 columns</strong></li>
                    </ul>
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/develop/web/components/layout-grid/'}>Design &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank"
                               href={'https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-grid'}>Material
                                Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
                <template slot={PageTitle.SLOT_ICON}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
                    </svg>
                </template>
            </PageTitle>

            <MwcLayoutGridCell columns={12}>
                <MwcSubtitle1 style={{textAlign: 'center'}}>Columns</MwcSubtitle1>
            </MwcLayoutGridCell>

            <MwcLayoutGrid class={[gridLayoutPageStyle.demoGrid]}>
                <MwcLayoutGridInner class={[gridLayoutPageStyle.demoInner]}>
                    <MwcLayoutGridCell columns={6} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={2} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={8} class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGridInner>
            </MwcLayoutGrid>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'left'}}>
                <MwcSubtitle1>Grid Left Alignment</MwcSubtitle1>
                <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
            </MwcLayoutGridCell>

            <MwcLayoutGrid align="left"
                           class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
                <MwcLayoutGridInner class={[gridLayoutPageStyle.demoInner]}>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGridInner>
            </MwcLayoutGrid>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'right'}}>
                <MwcSubtitle1>Right Alignment</MwcSubtitle1>
                <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
            </MwcLayoutGridCell>

            <MwcLayoutGrid align="right"
                           class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
                <MwcLayoutGridInner class={[gridLayoutPageStyle.demoInner]}>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGridInner>
            </MwcLayoutGrid>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcSubtitle1>Cell Alignment</MwcSubtitle1>
                <MwcBody1>Cell alignment requires a cell height smaller than the inner height of the grid.</MwcBody1>
            </MwcLayoutGridCell>

            <MwcLayoutGrid autoWrapInner={false} align="right"
                           class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridCellAlignment]}>
                <MwcLayoutGridInner class={[gridLayoutPageStyle.demoInner]}>
                    <MwcLayoutGridCell
                        align="top"
                        class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}
                    />
                    <MwcLayoutGridCell
                        align="middle"
                        class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}
                    />
                    <MwcLayoutGridCell
                        align="bottom"
                        class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}
                    />
                </MwcLayoutGridInner>
            </MwcLayoutGrid>
        </fragment>
    }
}
