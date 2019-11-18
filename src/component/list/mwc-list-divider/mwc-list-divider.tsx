import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

@component
export class MwcListDivider extends st.component implements ILifecycle {
  @attr
  padded: boolean = false;

  @attr
  inset: boolean = false;

  onAfterElCreate() {
    const classes = [...this.elClass];

    if (this.padded) {
      classes.push("mdc-list-divider--padded");
    }

    if (this.inset) {
      classes.push("mdc-list-divider--inset");
    }
    this.elClass = [...classes, "mdc-list-divider"];

    this.elStyle = {
      ...this.elStyle,
      display: "block",
    };
  }

  render() {
    return <fragment />;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcListDivider: Partial<MwcListDivider>;
    }
  }
}
