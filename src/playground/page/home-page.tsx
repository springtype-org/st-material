import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcTopBar} from "../../component/mwc-top-bar/mwc-top-bar";
import {MwcCheckbox} from "../../component/mwc-checkbox/mwc-checkbox";

@component()
export class HomePage extends st.component {

    render() {
        return (
            <div unwrap>

                <MwcTopBar mwc-title="Playground">
                    <template slot="start">
                        Test
                    </template>

                    <template slot="topbar-end">
                        Test Foo
                    </template>
                </MwcTopBar>
                <MwcCheckbox label="Material Checkbox" disabled="false" />
            </div>
        );
    }
}
