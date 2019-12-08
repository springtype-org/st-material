import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { tsx } from "springtype/web/vdom";
import {MwcTextArea} from "../../component/mwc-text-area";
import {MwcH6} from "../../component/mwc-typography";

@component
export class TextAreaPage extends st.component {
  static ROUTE = "text-area-page";

  render() {
    return (
      <div>
        <div>
          <MwcH6>TextArea Filled</MwcH6>
          <MwcTextArea label="filled" shaped={false} variant={'filled'} />
        </div>
        <div>
          <MwcH6>TextArea Filled + Full-Width</MwcH6>
          <MwcTextArea
            label="filled + fullwidth"
            shaped={false}
            variant={'filled'}
          />
        </div>

        <div>
          <MwcH6>TextArea Filled + Shaped</MwcH6>
          <MwcTextArea label="filled + shaped" shaped={true} variant={'filled'} />
        </div>
        <div>
          <MwcH6>TextArea Filled + Disabled</MwcH6>
          <MwcTextArea label="filled + disabled" disabled={true} variant={'filled'} />
        </div>
        <div>
          <MwcH6>TextArea Outlined</MwcH6>
          <MwcTextArea label="outlined" shaped={false} variant={'outlined'} />
        </div>
        <div>
          <MwcH6>TextArea Outlined + Full</MwcH6>
          <MwcTextArea
            label="outlined + fullwidth"
            shaped={false}
            variant={'outlined'}
          />
        </div>
        <div>
          <MwcH6>TextArea Outlined + Shaped</MwcH6>
          <MwcTextArea label="outlined + shaped" shaped={true} variant={'outlined'} />
        </div>
        <div>
          <MwcH6>TextArea Outlined + Disabled</MwcH6>
          <MwcTextArea label="outlined + disabled" disabled={true} variant={'outlined'} />
        </div>
      </div>
    );
  }
}
