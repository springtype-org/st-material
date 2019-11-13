import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcDialog } from "../../component/dialog/mwc-dialog/mwc-dialog";
import { MwcButton } from "../../component/mwc-button/mwc-button";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class DialogPage extends st.component {
  static ROUTE = "#/dialog-page";

  @domRef("simple")
  simple: MwcDialog;

  @domRef("auto")
  auto: MwcDialog;

  onSimple = () => {
    this.simple.open();
  };

  onOpenAuto = () => {
    this.auto.open();
    setTimeout(() => {
      this.auto.close();
    }, 2000);
  };

  render() {
    return (
      <div>
        <MwcH6>Dialog</MwcH6>

        <MwcDialog ref={{ simple: this }} class="foo" title="SpringType is simple & powerful">
          <template slot="content">Really, isn't it?</template>
          <template slot="buttons">
            <MwcButton
              label="Stop, wasting time on StackOverflow :o)"
              onClick={() => {
                this.simple.close();
              }}
            />
          </template>
        </MwcDialog>

        <MwcDialog ref={{ auto: this }} class="foo" title="Loading...">
          <template slot="content">Closing automatically after 2 sec</template>
          <template slot="buttons">
            <MwcButton
              label="Close"
              onClick={() => {
                this.simple.close();
              }}
            />
          </template>
        </MwcDialog>


        <div>
          <MwcButton label="Open bragging Dialog :)" onClick={this.onSimple}></MwcButton>
        </div>

        <div>
          <MwcButton label="Without buttons (programmatically)" onClick={this.onOpenAuto}></MwcButton>
        </div>
      </div>
    );
  }
}
