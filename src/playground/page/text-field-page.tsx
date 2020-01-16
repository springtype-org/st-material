import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcTextField} from "../../component/mwc-text-field";
import {MwcLayoutGridCell} from "../../component/mwc-layout";
import {PageBody} from "../component/page-body";
import {PageTitle} from "../component/page-title";
import {MwcH5} from "../../component/mwc-typography";

@component
export class TextFieldPage extends st.component {
    static ROUTE = "text-field-page";

    render() {
        return <PageBody>
            <PageTitle title={'Text Field'}>
                <div>Text fields allow users to input, edit, and select text.
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/develop/web/components/input-controls/text-field/'}>Design &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank" href={'https://material.io/go/design-text-fields'}>Material Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
                <template slot={PageTitle.SLOT_ICON}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path
                            d="M2 19h20v2H2zM19 3h1v14h-1zM9.51 3l-5.5 14h2.25l1.12-3h6.25l1.12 3H17L11.51 3h-2zm-1.38 9l2.38-6.33L12.89 12H8.13z"/>
                    </svg>
                </template>
            </PageTitle>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Filled Text Fields</MwcH5>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField label="springtype" type={'password'} variant={'filled'} value={"springtype"}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField label="springtype" variant={'filled'} value={'dasha'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField label="springtype" variant={'filled'}>
                    <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            delete
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" label="springtype" type={'password'} variant={'filled'}
                              value={"springtype"}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" label="springtype" variant={'filled'} value={'aron'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" label="springtype" variant={'filled'}>
                    <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            delete
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" variant={'filled'} value={'daniel'}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" variant={'filled'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-filled--shaped" variant={'filled'} value={'martha'} disabled={true}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Outlined Text Fields</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcTextField label="springtype" type={'password'} variant={'outlined'} value={"springtype"}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcTextField label="springtype" variant={'outlined'} value={'michael'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField label="springtype" variant={'outlined'}>
                    <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            delete
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" label="springtype" type={'password'}
                              variant={'outlined'} value={"springtype"}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" label="springtype" variant={'outlined'}
                              value={'daniel'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" label="springtype" variant={'outlined'}>
                    <template slot={MwcTextField.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            delete
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" type={'password'}
                              variant={'outlined'} value={"springtype"}/>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" type={'password'} variant={'outlined'}>
                    <template slot={MwcTextField.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-text-field__icon" aria-hidden={true}>
                            event
                        </i>
                    </template>
                </MwcTextField>
            </MwcLayoutGridCell>

            <MwcLayoutGridCell>
                <MwcTextField class="demo-outlined--shaped" variant={'outlined'} value={'alfons'} disabled={true}/>
            </MwcLayoutGridCell>
        </PageBody>;
    }
}
