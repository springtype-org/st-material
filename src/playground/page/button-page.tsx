import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcButton} from "../../component/mwc-button/mwc-button";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";
import {MwcButtonVariant} from "../../component/mwc-button/mwc-button-variant-type";

@component()
export class ButtonPage extends st.component {
    static ROUTE = "/#/button-page";

    render() {
        return (
            <div>
                <div>
                    <MwcH6>Button Text</MwcH6>
                    <MwcButton label="Text"/>
                </div>
                <div>
                    <MwcH6>Button Outlined + Dense</MwcH6>
                    <MwcButton label="outlined" variant={MwcButtonVariant.OUTLINED} dense={true}/>
                </div>
                <div>
                    <MwcH6>Button Raised</MwcH6>
                    <MwcButton label="raised" variant={MwcButtonVariant.RAISED}/>
                </div>
                <div>
                    <MwcH6>Button Unelevated + Shaped</MwcH6>
                    <MwcButton label="unelevated" variant={MwcButtonVariant.UNELEVATED} shaped={true}/>
                </div>
                <div>
                    <MwcH6>Button Outlined + Leading-Icon + Disabled</MwcH6>
                    <MwcButton label="Disabled" variant={MwcButtonVariant.OUTLINED} disabled={true}>
                        <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
                            <i class="material-icons mdc-button__icon" aria-hidden={true}>favorite</i>
                        </template>
                    </MwcButton>
                </div><div>
                    <MwcH6>Button Raised + Trailing-Icon + Disabled</MwcH6>
                    <MwcButton label="Disabled" variant={MwcButtonVariant.RAISED} disabled={true}>
                        <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
                            <i class="material-icons mdc-button__icon" aria-hidden={true}>favorite</i>
                        </template>
                    </MwcButton>
                </div>
            </div>
        );
    }
}
