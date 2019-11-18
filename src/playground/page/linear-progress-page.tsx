import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import { MwcH5 } from "../../component/typography/mwc-h5/mwc-h5";
import { MwcH6 } from "../../component/typography/mwc-h6/mwc-h6";
import { MwcLinearProgress } from "../../component/mwc-linear-progress/mwc-linear-progress";
import { ILifecycle } from "springtype/web/component/interface";
import { MwcH4 } from "../../component/typography/mwc-h4/mwc-h4";
import { MwcLinearProgressIndeterminate } from "../../component/mwc-linear-progress/mwc-linear-progress-indeterminate";

@component
export class LinearProgressPage extends st.component implements ILifecycle {
  static ROUTE = "#/linear-progress-page";

  @ref
  progress: MwcLinearProgress;
  
  @ref
  linearProgressReverseRef: MwcLinearProgress;

  step: number = 0;
  buffer: number = 80;

  render() {
    return (
      <div>
        <div>
          <MwcH4>Linear Progress Indicator</MwcH4>
          <MwcH6>Progress indicators display the length of a process or express an unspecified wait time.</MwcH6>
          <MwcH5>Progress + Buffer</MwcH5>
          <MwcLinearProgress ref={{ progress: this }} />
          <MwcH5>Reversed</MwcH5>
          <MwcLinearProgress reverse={true} ref={{ linearProgressReverseRef: this }} />
          <MwcH5>Indeterminate</MwcH5>
          <MwcLinearProgressIndeterminate />
          <MwcH5>Indeterminate + Reverse</MwcH5>
          <MwcLinearProgressIndeterminate reverse={true} />
        </div>
      </div>
    );
  }

  onAfterRender(): void {
    this.linearProgressReverseRef.buffer(0.8);
    this.linearProgressReverseRef.progress(0.5);

    setInterval(() => {
      this.step += 10;
      this.buffer = this.step + 15;
      if (this.step > 100) {
        this.step = 0;
        this.buffer = 15;
      }
      if (this.buffer > 100) {
        this.buffer = 100;
      }
      this.progress.progress(this.step / 100);
      this.progress.buffer(this.buffer / 100);
    }, 500);
  }
}
