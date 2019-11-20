import { attr, component } from "springtype/web/component";
import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { tsx } from "springtype/web/vdom";
import { MDCLinearProgress } from "@material/linear-progress";
import { MDCLinearProgressFoundation } from "@material/linear-progress/foundation";

export interface IMwcLinearProgressAttrs {
  reverse?: boolean;
}

@component
export class MwcLinearProgress extends st.component<IMwcLinearProgressAttrs> {
  @ref
  progressRef: HTMLElement;

  @attr
  reverse: boolean = false;

  mdcLinearProgress: MDCLinearProgress;
  mdcLinearProgressFoundation: MDCLinearProgressFoundation;

  render() {
    return (
      <div role="progressbar" ref={{ progressRef: this }} class="mdc-linear-progress">
        <div class="mdc-linear-progress__buffering-dots" />
        <div class="mdc-linear-progress__buffer" />
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span class="mdc-linear-progress__bar-inner" />
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner" />
        </div>
      </div>
    );
  }

  progress(progress: number) {
    this.mdcLinearProgressFoundation.setProgress(progress);
  }

  buffer(buffer: number) {
    this.mdcLinearProgressFoundation.setBuffer(buffer);
  }

  onAfterRender(): void {
    this.mdcLinearProgress = new MDCLinearProgress(this.progressRef);
    this.mdcLinearProgress.open();
    this.mdcLinearProgressFoundation = this.mdcLinearProgress.getDefaultFoundation();
    this.mdcLinearProgressFoundation.open();
    this.mdcLinearProgressFoundation.setDeterminate(true);
    this.mdcLinearProgressFoundation.setReverse(this.reverse);
  }

  onDisconnect(): void {
    this.mdcLinearProgress.destroy();
    this.mdcLinearProgressFoundation.destroy();
  }
}