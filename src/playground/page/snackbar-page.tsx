import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcButtonImpl } from "../../component/mwc-button/mwc-button";
import { MwcSnackbar } from "../../component/mwc-snackbar/mwc-snackbar";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";

@component
export class SnackbarPage extends st.component {
  static ROUTE = "#/snackbar-page";

  @ref
  snackbar: MwcSnackbar;

  @ref
  leadingSnackbar: MwcSnackbar;

  @ref
  stackedSnackbar: MwcSnackbar;

  onBaseline = () => {
    this.snackbar.open();
  };

  onLeading = () => {
    this.leadingSnackbar.open();
  };

  onStacked = () => {
    this.stackedSnackbar.open();
  };

  render() {
    return (
      <div>
        <MwcH6>Snackbar</MwcH6>

        <MwcSnackbar ref={{ snackbar: this }} label="Can't send photos. Retry in 5 sec">
          <MwcButtonImpl
            label="Retry"
            onClick={() => {
              this.snackbar.close();
            }}
          />
        </MwcSnackbar>

        <MwcSnackbar ref={{ leadingSnackbar: this }} leading={true} label="Can't send photos. Retry in 5 sec">
          <MwcButtonImpl
            label="Retry"
            onClick={() => {
              this.leadingSnackbar.close();
            }}
          />
        </MwcSnackbar>

        <MwcSnackbar ref={{ stackedSnackbar: this }} stacked={true} label="Can't send photos. Retry in 5 sec">
          <MwcButtonImpl
            label="Retry"
            onClick={() => {
              this.stackedSnackbar.close();
            }}
          />
        </MwcSnackbar>

        <div style="margin-bottom: 15px;">
          <MwcButtonImpl label="Baseline" variant="outlined" onClick={this.onBaseline} />
        </div>
        <div style="margin-bottom: 15px;">
          <MwcButtonImpl label="Leading" variant="outlined" onClick={this.onLeading} />
        </div>
        <div style="margin-bottom: 15px;">
          <MwcButtonImpl label="Stacked" variant="outlined" onClick={this.onStacked} />
        </div>
      </div>
    );
  }
}
