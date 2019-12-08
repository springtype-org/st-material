import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";

import * as gridLayoutPageStyle from "./grid-layout-page.tss.scss";
import {MwcLayoutGrid, MwcLayoutGridCell, MwcLayoutGridInner} from "../../component/mwc-layout";
import {MwcBody1, MwcSubtitle1} from "../../component/mwc-typography";

@component
export class GridLayoutPage extends st.component {
    static ROUTE = "grid-layout-page";

    render() {
        return (
            <div>
                <MwcSubtitle1>Columns</MwcSubtitle1>
                <MwcLayoutGrid class={[gridLayoutPageStyle.demoGrid]}>
                    <MwcLayoutGridCell columns={6} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={2} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell columns={8} class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGrid>
                <MwcSubtitle1>Grid Left Alignment</MwcSubtitle1>
                <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
                <MwcLayoutGrid align="left"
                               class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGrid>
                <MwcSubtitle1>Right Alignment</MwcSubtitle1>
                <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
                <MwcLayoutGrid align="right"
                               class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                    <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}/>
                </MwcLayoutGrid>
                <MwcSubtitle1>Cell Alignment</MwcSubtitle1>
                <MwcBody1>Cell alignment requires a cell height smaller than the inner height of the grid.</MwcBody1>
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
            </div>
        );
    }
}
