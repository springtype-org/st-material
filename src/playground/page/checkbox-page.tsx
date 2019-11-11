import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcCheckbox } from "../../component/mwc-checkbox/mwc-checkbox";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class CheckboxPage extends st.component {
  static ROUTE = "/checkbox-page";

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
