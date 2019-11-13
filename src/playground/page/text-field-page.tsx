import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {domRef, tsx} from "springtype/web/vdom";
import {MwcTextField} from "../../component/mwc-text-field/mwc-text-field";
import {MwcTextFieldVariant} from "../../component/mwc-text-field/mwc-text-field-variant";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class TextFieldPage extends st.component {
    static ROUTE = "#/text-field-page";
    @domRef("textField")
    textField!: MwcTextField;

    render() {
        return (
            <div>
                <div>
                    <MwcH6>TextField Filled</MwcH6>
                    <MwcTextField ref={{textField: this}} onClick={() => {
                        console.log(this.textField.value)
                    }} label="filled" shaped={false} variant={MwcTextFieldVariant.FILLED} value={"test"}/>
                </div>
                <div>
                    <MwcH6>TextField Password Filled</MwcH6>
                    <MwcTextField type="password" label="filled" shaped={false} variant={MwcTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Filled-Full-Width</MwcH6>
                    <MwcTextField label="filled + full-width" shaped={false}
                                  variant={MwcTextFieldVariant.FILLED_FULL_WIDTH}/>
                </div>
                <div>
                    <MwcH6>TextField Filled + Leading-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcTextFieldVariant.FILLED}>
                        <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>event</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Filled + Trailing-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcTextFieldVariant.FILLED}>
                        <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>delete</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Filled + Shaped</MwcH6>
                    <MwcTextField label="filled + shaped" shaped={true} variant={MwcTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Filled + Disabled</MwcH6>
                    <MwcTextField label="filled + disabled" disabled={true} variant={MwcTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined</MwcH6>
                    <MwcTextField label="outlined" shaped={false} variant={MwcTextFieldVariant.OUTLINED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Leading-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcTextFieldVariant.OUTLINED}>
                        <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>event</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Trailing-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcTextFieldVariant.OUTLINED}>
                        <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>delete</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Shaped</MwcH6>
                    <MwcTextField label="outlined + shaped" shaped={true} variant={MwcTextFieldVariant.OUTLINED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Disabled</MwcH6>
                    <MwcTextField label="outlined + disabled" disabled={true} variant={MwcTextFieldVariant.OUTLINED}/>
                </div>
            </div>
        );
    }
}
