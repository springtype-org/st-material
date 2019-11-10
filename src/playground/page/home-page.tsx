import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcCheckbox } from "../../component/mwc-checkbox/mwc-checkbox";
import { MwcTopBar } from "../../component/mwc-top-bar/mwc-top-bar";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";
import { MwcTypography } from "../../component/typography/mwc-typography/mwc-typography";

@component()
export class HomePage extends st.component {
  render() {
    return (
      <MwcTypography>
        <MwcTopBar title="Playground"></MwcTopBar>
        <br />
        <br />
        <br />
        <br />

        <div>
          <MwcH6>Disabled</MwcH6>
          <MwcCheckbox label="Material Checkbox" disabled={true} />
        </div>
        <div>
          <MwcH6>Ripple + Checked</MwcH6>
          <MwcCheckbox label="Material Checkbox" disabled={false} checked={true} />
        </div>
        <div>
          <MwcH6>Ripple + Indeterminate</MwcH6>
          <MwcCheckbox label="Material Checkbox" disabled={false} indeterminate={true} />
        </div>
        <div>
          <MwcH6>No Ripple</MwcH6>
          <MwcCheckbox label="Material Checkbox" disabled={false} indeterminate={true} ripple={false} />
        </div>
      </MwcTypography>
    );
  }
}
