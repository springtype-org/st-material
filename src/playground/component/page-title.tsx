import {attr, component} from "springtype/web/component";
import {MwcBody1, MwcH4} from "../../component/mwc-typography";
import {tsx} from "springtype/web/vdom";
import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";

export interface IPageTitleAttr {
    title?: string;
}

@component()
export class PageTitle extends st.component<IPageTitleAttr> implements ILifecycle {
    static SLOT_ICON = 'icon';
    @attr
    title: string;


    class = ['mdc-layout-grid__cell', 'mdc-layout-grid__cell--span-12'];

    render() {
        const style = {textAlign: 'center'};
        return <fragment>
            <MwcH4 style={style}>{this.renderSlot(PageTitle.SLOT_ICON)}{this.title}</MwcH4>
            <MwcBody1 style={style}>{this.renderChildren()}</MwcBody1>
        </fragment>

    }
}