import {st} from "springtype/core";
import {tsx} from "springtype/web/vdom";
import {MwcTextField} from "../../../src/component/mwc-text-field";
import './material-design.css'

st.render(
    <fragment>
        <div id={'div_filled'} style="margin: 10px;">
            <MwcTextField id={'filled'} type={'password'} name={'test'} label={'springtype'} variant={'filled'}>
                <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                    <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                        event
                    </i>
                </template>
            </MwcTextField>
        </div>
        <div id={'div_outlined'}  type={'password'} style="margin: 10px;">
            <MwcTextField id={'outlined'} name={'test'} label={'springtype'} variant={'outlined'}>
                <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                    <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                        event
                    </i>
                </template>
            </MwcTextField>
        </div>
    </fragment>
);
