import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcButton } from "../../component/mwc-button/mwc-button";
import { MwcSnackbar } from "../../component/mwc-snackbar/mwc-snackbar";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component()
export class SnackbarPage extends st.component {
  static ROUTE = "/#/snackbar-page";

  @domRef("snackbar")
  snackbar: MwcSnackbar;

  @domRef("leadingSnackbar")
  leadingSnackbar: MwcSnackbar;

  @domRef("stackedSnackbar")
  stackedSnackbar: MwcSnackbar;

  onBaseline = () => {
    this.snackbar.component.open();
  };

  onLeading = () => {
    this.leadingSnackbar.component.open();
  };

  onStacked = () => {
    this.stackedSnackbar.component.open();
  };

  render() {
    return (
      <div>
        <MwcH6>Snackbar</MwcH6>

        <MwcSnackbar ref={{ snackbar: this }} label="Can't send photos. Retry in 5 sec">
          <MwcButton label="Retry" onClick={() => {
              this.snackbar.component.close()
          }}></MwcButton>
        </MwcSnackbar>

        <MwcSnackbar ref={{ leadingSnackbar: this }} leading={true} label="Can't send photos. Retry in 5 sec">
          <MwcButton label="Retry" onClick={() => {
              this.leadingSnackbar.component.close()
          }}></MwcButton>
        </MwcSnackbar>

        <MwcSnackbar ref={{ stackedSnackbar: this }} stacked={true} label="Can't send photos. Retry in 5 sec">
          <MwcButton label="Retry" onClick={() => {
              this.stackedSnackbar.component.close()
          }}></MwcButton>
        </MwcSnackbar>

        <div>
          <MwcButton label="Baseline" onClick={this.onBaseline}></MwcButton>
          <MwcButton label="Leading" onClick={this.onLeading}></MwcButton>
          <MwcButton label="Stacked" onClick={this.onStacked}></MwcButton>
        </div>
      </div>
    );
  }
}
