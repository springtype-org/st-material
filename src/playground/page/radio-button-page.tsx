import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcRadioButton } from "../../component/mwc-radio-button/mwc-radio-button";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class RadioButtonPage extends st.component {
    static ROUTE = "#/radio-button-page";

    render() {
        const radioGroupName = 'gender-group';
        return (
            <div>
                <div>
                    <MwcH6>Radio Button</MwcH6>
                    <MwcRadioButton label="female" disabled={false} name={radioGroupName} checked={true}/>
                    <MwcRadioButton label="male" disabled={false} name={radioGroupName}/>
                    <MwcRadioButton label="hermaphrodite" disabled={true} name={radioGroupName}/>
                </div>
            </div>
        );
    }
}
