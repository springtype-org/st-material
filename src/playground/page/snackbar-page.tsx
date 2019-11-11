import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcButton } from "../../component/mwc-button/mwc-button";
import { MwcButtonVariant } from "../../component/mwc-button/mwc-button-variant-type";
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

                <MwcSnackbar ref={{snackbar: this}} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.snackbar.close()
                    }}/>
                </MwcSnackbar>

                <MwcSnackbar ref={{leadingSnackbar: this}} leading={true} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.leadingSnackbar.close()
                    }}/>
                </MwcSnackbar>

                <MwcSnackbar ref={{stackedSnackbar: this}} stacked={true} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.stackedSnackbar.close()
                    }}/>
                </MwcSnackbar>

                <div style="margin-bottom: 15px;">
                    <MwcButton label="Baseline" variant={MwcButtonVariant.OUTLINED} onClick={this.onBaseline}/>
                </div>
                <div style="margin-bottom: 15px;">
                    <MwcButton label="Leading" variant={MwcButtonVariant.OUTLINED} onClick={this.onLeading}/>
                </div>
                <div style="margin-bottom: 15px;">
                    <MwcButton label="Stacked" variant={MwcButtonVariant.OUTLINED} onClick={this.onStacked}/>
                </div>
            </div>
        );
    }
}
