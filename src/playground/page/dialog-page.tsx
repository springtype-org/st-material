import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcDialog } from "../../component/dialog/mwc-dialog/mwc-dialog";
import { MwcButton } from "../../component/mwc-button/mwc-button";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class DialogPage extends st.component {
  static ROUTE = "/#/dialog-page";

  @domRef("simple")
  simple: MwcDialog;

  onSimple = () => {
    this.simple.open();
  };

  render() {
    return (
      <div>
        <MwcH6>Dialog</MwcH6>

        <MwcDialog ref={{ simple: this }} title="SpringType rocks">
          <template slot={MwcDialog.SLOT_NAME_CONTENT}>Really, doesn't it?</template>
          <template slot={MwcDialog.SLOT_NAME_BUTTONS}>
            <MwcButton
              label="Close"
              onClick={() => {
                this.simple.close();
              }}
            />
          </template>
        </MwcDialog>

        <div>
          <MwcButton label="Simple" onClick={this.onSimple}></MwcButton>
        </div>
      </div>
    );
  }
}
