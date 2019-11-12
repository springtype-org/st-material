import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcCheckbox } from "../../component/mwc-checkbox/mwc-checkbox";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class CheckboxPage extends st.component {
  static ROUTE = "#/checkbox-page";


  onChange = (evt: any) => {

    console.log('checkbox changed', evt.target.name, '->', evt.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <MwcH6>Disabled</MwcH6>
          <MwcCheckbox name="disabled" label="Material Checkbox" disabled={true} onChange={this.onChange} />
        </div>
        <div>
          <MwcH6>Ripple + Checked</MwcH6>
          <MwcCheckbox
            name="ripple-checked"
            label="Material Checkbox"
            disabled={false}
            checked={true}
            onChange={this.onChange}
          />
        </div>
        <div>
          <MwcH6>Ripple + Indeterminate</MwcH6>
          <MwcCheckbox name="ripple-indeterminate" label="Material Checkbox" disabled={false} indeterminate={true} onChange={this.onChange} />
        </div>
        <div>
          <MwcH6>No Ripple</MwcH6>
          <MwcCheckbox name="no-ripple" label="Material Checkbox" disabled={false} indeterminate={true} ripple={false} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
