import { attr, component } from "springtype/web/component";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { tsx } from "springtype/web/vdom";
//material stuff
import { MwcLinearProgress } from "./mwc-linear-progress";

@component
export class MwcLinearProgressIndeterminate extends st.component {
  @ref
  progressRef: MwcLinearProgress;

  @attr
  reverse: boolean = false;

  render() {
    return <MwcLinearProgress reverse={this.reverse} ref={{ progressRef: this }} />;
  }

  onAfterRender(): void {
    this.progressRef.mdcLinearProgressFoundation.setDeterminate(false);
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcLinearProgressIndeterminate: Partial<MwcLinearProgressIndeterminate>;
    }
  }
}
