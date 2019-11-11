import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";
import {MwcTextField} from "../../component/mwc-textfield/mwc-text-field";
import {MwcBaseTextFieldVariant} from "../../component/mwc-base-textfield/mwc-base-text-field-variant";

@component()
export class TextFieldPage extends st.component {
    static ROUTE = "/text-field-page";

    render() {
        return (
            <div>
                <div>
                    <MwcH6>TextField Filled</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcBaseTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Filled-Full-Width</MwcH6>
                    <MwcTextField label="filled + full-width" shaped={false}
                                  variant={MwcBaseTextFieldVariant.FILLED_FULL_WIDTH}/>
                </div>
                <div>
                    <MwcH6>TextField Filled + Leading-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcBaseTextFieldVariant.FILLED}>
                        <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>event</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Filled + Trailing-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcBaseTextFieldVariant.FILLED}>
                        <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>delete</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Filled + Shaped</MwcH6>
                    <MwcTextField label="filled + shaped" shaped={true} variant={MwcBaseTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Filled + Disabled</MwcH6>
                    <MwcTextField label="filled + disabled" disabled={true} variant={MwcBaseTextFieldVariant.FILLED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined</MwcH6>
                    <MwcTextField label="outlined" shaped={false} variant={MwcBaseTextFieldVariant.OUTLINED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Leading-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcBaseTextFieldVariant.OUTLINED}>
                        <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>event</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Trailing-Icon</MwcH6>
                    <MwcTextField label="filled" shaped={false} variant={MwcBaseTextFieldVariant.OUTLINED}>
                        <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                            <i class="material-icons mdc-text-field__icon" aria-hidden={true}>delete</i>
                        </template>
                    </MwcTextField>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Shaped</MwcH6>
                    <MwcTextField label="outlined + shaped" shaped={true} variant={MwcBaseTextFieldVariant.OUTLINED}/>
                </div>
                <div>
                    <MwcH6>TextField Outlined + Disabled</MwcH6>
                    <MwcTextField label="outlined + disabled" disabled={true} variant={MwcBaseTextFieldVariant.OUTLINED}/>
                </div>
            </div>
        );
    }
}
