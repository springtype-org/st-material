import { st } from "springtype/core";
import { component } from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";
import tpl from "./mwc-checkbox.tpl";

@component({
    tpl
})
export class MwcCheckbox extends st.component implements ILifecycle {
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'MwcCheckbox': Partial<MwcCheckbox>;
        }
    }
}


