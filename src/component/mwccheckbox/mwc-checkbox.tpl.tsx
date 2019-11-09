import { tsx } from "springtype/web/vdom";
import { MwcCheckbox } from "./mwc-checkbox";
import * as mwcTopBar from "./mwc-checkbox.tss.scss";

export default (component: MwcCheckbox) => (
  <p>
    Component: MwcCheckbox
    <div class={mwcTopBar.mdcCheckbox}></div>
  </p>
);
