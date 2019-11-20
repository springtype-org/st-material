import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcButton } from "../../component/mwc-button/mwc-button";
import { MwcH6 } from "../../component/mwc-typography/mwc-h6/mwc-h6";

@component
export class ButtonPage extends st.component {
  static ROUTE = "#/button-page";

  render() {
    return (
      <div>
        <div>
          <MwcH6>Button Text</MwcH6>
          <MwcButton label="Text" />
        </div>
        <div>
          <MwcH6>Button Outlined + Dense</MwcH6>
          <MwcButton label="outlined" variant={'outlined'} dense={true} />
        </div>
        <div>
          <MwcH6>Button Raised</MwcH6>
          <MwcButton label="raised" variant={'raised'} />
        </div>
        <div>
          <MwcH6>Button Unelevated + Shaped</MwcH6>
          <MwcButton label="unelevated" variant={'unelevated'} shaped={true} />
        </div>
        <div>
          <MwcH6>Button Outlined + Leading-Icon + Disabled</MwcH6>
          <MwcButton label="Disabled" variant={'outlined'} disabled={true}>
            <template slot={MwcButton.SLOT_NAME_LEADING_ICON}>
              <i class="material-icons mdc-button__icon" aria-hidden={true}>
                favorite
              </i>
            </template>
          </MwcButton>
        </div>
        <div>
          <MwcH6>Button Raised + Trailing-Icon + Disabled</MwcH6>
          <MwcButton label="Disabled" variant={'raised'} disabled={true}>
            <template slot={MwcButton.SLOT_NAME_TRAILING_ICON}>
              <i class="material-icons mdc-button__icon" aria-hidden={true}>
                favorite
              </i>
            </template>
          </MwcButton>
        </div>
      </div>
    );
  }
}
