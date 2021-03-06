import { MDCSnackbar } from "@material/snackbar";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

export interface IMwcSnackbarAttrs {
  stacked?: boolean;
  leading?: boolean;
  label?: string;
}

@component
export class MwcSnackbar extends st.component<IMwcSnackbarAttrs> implements ILifecycle {
  @attr
  label: string;

  @attr
  leading: boolean;

  @attr
  stacked: boolean;

  mdcSnackbar: MDCSnackbar;

  onAfterElCreate() {
    const classes = [...this.elClass, "mdc-snackbar"];

    if (this.leading) {
      classes.push("mdc-snackbar--leading");
    }

    if (this.stacked) {
      classes.push("mdc-snackbar--stacked");
    }
    this.elClass = classes;
  }

  render() {
    return (
      <div class="mdc-snackbar__surface">
        <div class="mdc-snackbar__label" role="status" aria-live="polite">
          {this.label}
        </div>
        <div class="mdc-snackbar__actions">{this.renderChildren()}</div>
      </div>
    );
  }

  onAfterRender() {
    this.mdcSnackbar = new MDCSnackbar(this.el);
  }

  open() {
    this.mdcSnackbar.open();
  }

  close() {
    this.mdcSnackbar.close();
  }

  onDisconnect() {
    this.mdcSnackbar.destroy();
  }
}