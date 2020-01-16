import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcButton} from "../../component/mwc-button";
import {PageBody} from "../component/page-body";
import {PageTitle} from "../component/page-title";
import {MwcLayoutGridCell} from "../../component/mwc-layout";
import {MwcH5} from "../../component/mwc-typography";

@component
export class ButtonPage extends st.component {
    static ROUTE = "button-page";

    render() {
        return <PageBody>
            <PageTitle title={'Buttons'}>
                <div>Buttons allow users to take actions, and make choices, with a single tap.
                    <ul style="list-style-type: none;">
                        <li>
                            <a target="_blank"
                               href={'https://material.io/develop/web/components/buttons/'}>Design &
                                API Documentation</a>
                        </li>
                        <li>
                            <a target="_blank" href={'https://material.io/go/design-buttons'}>Material Design
                                guidelines</a>
                        </li>
                    </ul>
                </div>
                <template slot={PageTitle.SLOT_ICON}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50"
                         height="50" viewBox="0 0 24 24">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"/>
                    </svg>
                </template>
            </PageTitle>

            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Text Button</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DEFAULT"/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DENSE" dense={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="LEADING_ICON">
                    <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="TRAILING_ICON">
                    <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DISABLED" disabled={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Raised Button</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DEFAULT" variant={'raised'}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DENSE" variant={'raised'} dense={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="LEADING_ICON" variant={'raised'}>
                    <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="TRAILING_ICON" variant={'raised'}>
                    <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DISABLED" disabled={true} variant={'raised'}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Unelevated Button</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DEFAULT" variant={'unelevated'}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DENSE" variant={'unelevated'} dense={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="LEADING_ICON" variant={'unelevated'}>
                    <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="TRAILING_ICON" variant={'unelevated'}>
                    <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DISABLED" disabled={true} variant={'unelevated'}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell columns={12} style={{textAlign: 'center'}}>
                <MwcH5>Outlined Button</MwcH5>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DEFAULT" variant={'outlined'}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DENSE" variant={'outlined'} dense={true}/>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="LEADING_ICON" variant={'outlined'}>
                    <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="TRAILING_ICON" variant={'outlined'}>
                    <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
                        <i class="material-icons mdc-button__icon" aria-hidden={true}>
                            favorite
                        </i>
                    </template>
                </MwcButton>
            </MwcLayoutGridCell>
            <MwcLayoutGridCell>
                <MwcButton label="DISABLED" disabled={true} variant={'outlined'}/>
            </MwcLayoutGridCell>
        </PageBody>;
    }
}
