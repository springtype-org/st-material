import { MDCSnackbar } from "@material/snackbar";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcSnackbar extends st.component implements ILifecycle {
  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  label: string;

  @attr(AttrType.DOM_INTRANSPARENT)
  leading: boolean;

  @attr(AttrType.DOM_INTRANSPARENT)
  stacked: boolean;

  mdcComponent: MDCSnackbar;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-snackbar", ...this.class];

    if (this.leading) {
      classes.push("mdc-snackbar--leading");
    }

    if (this.stacked) {
      classes.push("mdc-snackbar--stacked");
    }

    this.el.setAttribute("class", classes.join(" "));

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
    this.mdcComponent = new MDCSnackbar(this.el);
  }

  open() {
    this.mdcComponent.open();
  }

  close() {
    this.mdcComponent.close();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcSnackbar: Partial<MwcSnackbar>;
    }
  }
}
