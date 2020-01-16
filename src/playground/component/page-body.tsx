import {component} from "springtype/web/component";
import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";
import {MwcLayoutGridInner} from "../../component/mwc-layout";
import {tsx} from "springtype/web/vdom";

@component
export class PageBody extends st.component implements ILifecycle {

    render() {
        return <MwcLayoutGridInner>
            {this.renderChildren()}
        </MwcLayoutGridInner>
    }
}