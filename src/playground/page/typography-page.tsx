import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcBody1 } from "../../component/typography/mwc-body1/mwc-body1";
import { MwcBody2 } from "../../component/typography/mwc-body2/mwc-body2";
import { MwcButtonText } from "../../component/typography/mwc-button-text/mwc-button-text";
import { MwcCaptionText } from "../../component/typography/mwc-caption-text/mwc-caption-text";
import { MwcH1 } from "../../component/typography/mwc-h1/mwc-h1";
import { MwcH2 } from "../../component/typography/mwc-h2/mwc-h2";
import { MwcH3 } from "../../component/typography/mwc-h3/mwc-h3";
import { MwcH4 } from "../../component/typography/mwc-h4/mwc-h4";
import { MwcH5 } from "../../component/typography/mwc-h5/mwc-h5";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";
import { MwcOverlineText } from "../../component/typography/mwc-overline-text/mwc-overline-text";
import { MwcSubtitle1 } from "../../component/typography/mwc-subtitle1/mwc-subtitle1";
import { MwcSubtitle2 } from "../../component/typography/mwc-subtitle2/mwc-subtitle2";

@component()
export class TypographyPage extends st.component {
  static ROUTE = "/#/typography-page";

  render() {
    return (
      <div>
        <MwcH1>Headline 1</MwcH1>
        <MwcH2>Headline 2</MwcH2>
        <MwcH3>Headline 3</MwcH3>
        <MwcH4>Headline 4</MwcH4>
        <MwcH5>Headline 5</MwcH5>
        <MwcH6>Headline 6</MwcH6>
        <MwcSubtitle1>Subtitle 1</MwcSubtitle1>
        <MwcSubtitle2>Subtitle 2</MwcSubtitle2>
        <MwcBody1>
          Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </MwcBody1>
        <MwcBody2>
          Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor
          saepe inventore, soluta id accusantium voluptas beatae.
        </MwcBody2>
        <div>
          <MwcButtonText>Button text</MwcButtonText>
        </div>
        <div>
          <MwcCaptionText>Caption text</MwcCaptionText>
        </div>
        <div>
          <MwcOverlineText>Overline text</MwcOverlineText>
        </div>
      </div>
    );
  }
}
