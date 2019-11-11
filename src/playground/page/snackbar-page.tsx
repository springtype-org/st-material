import {st} from "springtype/core";
import {component} from "springtype/web/component";
import {domRef, tsx} from "springtype/web/vdom";
import {MwcButton} from "../../component/mwc-button/mwc-button";
import {MwcSnackbar} from "../../component/mwc-snackbar/mwc-snackbar";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";
import {MwcButtonVariant} from "../../component/mwc-button/mwc-button-variant-type";

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

                <MwcSnackbar ref={{snackbar: this}} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.snackbar.component.close()
                    }}/>
                </MwcSnackbar>

                <MwcSnackbar ref={{leadingSnackbar: this}} leading={true} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.leadingSnackbar.component.close()
                    }}/>
                </MwcSnackbar>

                <MwcSnackbar ref={{stackedSnackbar: this}} stacked={true} label="Can't send photos. Retry in 5 sec">
                    <MwcButton label="Retry" onClick={() => {
                        this.stackedSnackbar.component.close()
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
