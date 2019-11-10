import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcCheckbox } from "../../component/mwc-checkbox/mwc-checkbox";
import { MwcTopBar } from "../../component/mwc-top-bar/mwc-top-bar";

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
                <br />
                <br />
                <br />
                <br />
                <MwcCheckbox label="Material Checkbox" disabled="true" />
                <MwcCheckbox label="Material Checkbox" disabled="false" />
            </div>
        );
    }
}
