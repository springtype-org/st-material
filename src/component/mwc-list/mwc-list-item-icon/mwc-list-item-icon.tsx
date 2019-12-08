import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

export interface IMwcListItemIconAttrs {
    type?: string;
    meta?: boolean;
    graphic?: boolean;
}

@component
export class MwcListItemIcon extends st.component<IMwcListItemIconAttrs> implements ILifecycle {
    @attr
    type: string;

    @attr
    meta: boolean;

    @attr
    graphic: boolean;

    class = ["material-icons"];

    onAfterElCreate() {
        if (this.meta) {
            this.el.classList.add("mdc-list-item__meta");
        }

        if (this.graphic) {
            this.el.classList.add("mdc-list-item__graphic");
        }
    }

    render() {
        return <fragment/>;
    }

    onAfterRender() {
        this.el.innerText = this.type;
    }
}