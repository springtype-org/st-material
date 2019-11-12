import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcCard } from "../../component/mwc-card/mwc-card";
import { MwcBody2 } from "../../component/typography/mwc-body2/mwc-body2";
import { MwcH5 } from "../../component/typography/mwc-h5/mwc-h5";
import { MwcSubtitle1 } from "../../component/typography/mwc-subtitle1/mwc-subtitle1";
import * as cardPage from "./card-page.tss.scss";

@component()
export class CardPage extends st.component {
    static ROUTE = "#/card-page";

    render() {
        const contentClasses = ["demo-card--content", cardPage.demoCardContent];
        const noMarginClasses = ["demo-card--no-margin", cardPage.demoCardNoMargin];
        return (
            <div>
                <div>
                    <MwcH5>Cards</MwcH5>
                    <MwcCard class={['card-size', cardPage.cardSize]}>
                        <template slot={MwcCard.SLOT_NAME_PRIMARY}>
                            <div
                                class={['mdc-card__media', 'mdc-card__media--16-9', 'demo-card--media', cardPage.demoCardMedia].join(' ')}/>

                            <div class={contentClasses}>
                                <MwcH5 class={noMarginClasses}>Changing Development</MwcH5>
                                <MwcSubtitle1 class={noMarginClasses}>by Aron Homberg &amp;</MwcSubtitle1>
                                <MwcSubtitle1 class={noMarginClasses}>Michael Mannseicher</MwcSubtitle1>
                                <div style="height: 15px"/>
                                <MwcSubtitle1 class={noMarginClasses}><b>Our Motivation</b></MwcSubtitle1>
                                <MwcBody2 class={noMarginClasses}>SpringType aims to be the web development framework with the most elegant API's
                                    and the greatest developer experience. This is a stellar goal, but we believe that
                                    what we can achieve is only limited by what we can imagine.</MwcBody2>
                                <div style="height: 10px"/>
                                <MwcBody2 class={noMarginClasses}>
                                From 50 years of experience (combined) we learned that all systems of high complexity
                                fail in major aspects. The more a system grows in complexity...</MwcBody2>
                            </div>
                        </template>
                        <template slot={MwcCard.SLOT_NAME_ACTION}>
                            <div class="mdc-card__action-buttons">
                                <a href="http://github.com/springtype-org" class="mdc-button mdc-card__action mdc-card__action--button" target="_blank">
                                    <span class="mdc-button__label">github</span>
                                </a>
                                <a href="http://springtype.org" class="mdc-button mdc-card__action mdc-card__action--button" target="_blank">
                                    <span class="mdc-button__label">Website</span>
                                </a>
                            </div>
                            <div class="mdc-card__action-icons">
                                <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
                                <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
                            </div>
                        </template>
                    </MwcCard>
                </div>
            </div>
        );
    }
}
