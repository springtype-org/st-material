import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcRadioField } from "../../component/mwc-radio-field/mwc-radio-field";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component
export class RadioButtonPage extends st.component {
  static ROUTE = "#/radio-button-page";

  render() {
    const radioGroupName = "gender-group";
    return (
      <div>
        <div>
          <MwcH6>Radio Button</MwcH6>
          <MwcRadioField label="A" disabled={false} name={radioGroupName} checked={true} />
          <MwcRadioField label="B" disabled={false} name={radioGroupName} />
          <MwcRadioField label="C" disabled={true} name={radioGroupName} />
        </div>
      </div>
    );
  }
}
