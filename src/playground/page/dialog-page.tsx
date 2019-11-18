import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcDialog } from "../../component/dialog/mwc-dialog/mwc-dialog";
import { MwcButtonImpl } from "../../component/mwc-button/mwc-button";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component
export class DialogPage extends st.component {
  static ROUTE = "#/dialog-page";

  @ref
  simple: MwcDialog;

  @ref
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
            <MwcButtonImpl
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
            <MwcButtonImpl
              label="Close"
              onClick={() => {
                this.simple.close();
              }}
            />
          </template>
        </MwcDialog>

        <div>
          <MwcButtonImpl label="Open bragging Dialog :)" onClick={this.onSimple}></MwcButtonImpl>
        </div>

        <div>
          <MwcButtonImpl label="Without buttons (programmatically)" onClick={this.onOpenAuto}></MwcButtonImpl>
        </div>
      </div>
    );
  }
}
