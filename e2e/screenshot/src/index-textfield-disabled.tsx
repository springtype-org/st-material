import {st} from "springtype/core";
import {tsx} from "springtype/web/vdom";
import {MwcTextField} from "../../../src/component/mwc-text-field";
import './material-design.css'

st.render(
    <fragment>
        <div id={'div_filled'} style="margin: 10px;">
            <MwcTextField id={'filled'} name={'test'} label={'springtype'} variant={'filled'} disabled={true} value={'<3 springtype, is awesome'}/>
        </div>
        <div id={'div_outlined'} style="margin: 10px;">
            <MwcTextField id={'outlined'} name={'test'} label={'springtype'} variant={'outlined'} disabled={true}  value={'<3 springtype, is awesome'}/>
        </div>
    </fragment>
);
