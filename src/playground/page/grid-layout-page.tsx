import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcLayoutGridCell } from "../../component/layout/mwc-layout-grid-cell/mwc-layout-grid-cell";
import { MwcLayoutGridInner } from "../../component/layout/mwc-layout-grid-inner/mwc-layout-grid-inner";
import { MwcLayoutGrid } from "../../component/layout/mwc-layout-grid/mwc-layout-grid";
import { MwcBody1 } from "../../component/typography/mwc-body1/mwc-body1";
import { MwcSubtitle1 } from "../../component/typography/mwc-subtitle1/mwc-subtitle1";
import * as gridLayoutPageStyle from "./grid-layout-page.tss.scss";


@component()
export class GridLayoutPage extends st.component {
  static ROUTE = "/grid-layout-page";

  render() {
    return (
      <div>
        <MwcSubtitle1>Columns</MwcSubtitle1>
        <MwcLayoutGrid class={[gridLayoutPageStyle.demoGrid]}>
          <MwcLayoutGridCell columns={6} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={2} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={3} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={1} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell columns={8} class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
        </MwcLayoutGrid>
        <MwcSubtitle1>Grid Left Alignment</MwcSubtitle1>
        <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
        <MwcLayoutGrid align="left" class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
        </MwcLayoutGrid>
        <MwcSubtitle1>Right Alignment</MwcSubtitle1>
        <MwcBody1>This requires a max-width on the top-level grid element.</MwcBody1>
        <MwcLayoutGrid align="right" class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridAlignment]}>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
          <MwcLayoutGridCell class={[gridLayoutPageStyle.demoCell]}></MwcLayoutGridCell>
        </MwcLayoutGrid>
        <MwcSubtitle1>Cell Alignment</MwcSubtitle1>
        <MwcBody1>Cell alignment requires a cell height smaller than the inner height of the grid.</MwcBody1>
        <MwcLayoutGrid autoWrapInner={false} align="right" class={[gridLayoutPageStyle.demoGrid, gridLayoutPageStyle.demoGridCellAlignment]}>
          <MwcLayoutGridInner class={[gridLayoutPageStyle.demoInner]}>
            <MwcLayoutGridCell align="top" class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}></MwcLayoutGridCell>
            <MwcLayoutGridCell align="middle" class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}></MwcLayoutGridCell>
            <MwcLayoutGridCell align="bottom" class={[gridLayoutPageStyle.demoCell, gridLayoutPageStyle.demoCellAlignment]}></MwcLayoutGridCell>
          </MwcLayoutGridInner>
        </MwcLayoutGrid>
      </div>
    );
  }
}
