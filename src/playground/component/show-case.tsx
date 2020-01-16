import {attr, component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {st} from "springtype/core";
import {ILifecycle} from "springtype/web/component/interface";

export interface IShowCaseAttr {
    title?: string;
}

@component()
export class ShowCase extends st.component<IShowCaseAttr> implements ILifecycle {

    render() {
        return <fragment>
        </fragment>

    }
}