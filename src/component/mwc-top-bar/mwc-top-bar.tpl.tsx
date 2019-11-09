import { tsx } from "springtype/web/vdom";
import { MwcTopBar } from "./mwc-top-bar";
import * as mwcTopBar from "./mwc-top-bar.tss.scss";

const HEIGHT = 32;
const HEIGHT_DENSE = 48;

export default (component: MwcTopBar) => {
  const fixed = component["mwc-variant"] == "fixed-prominent" || component["mwc-variant"] == "fixed-short" || component["mwc-variant"] == "fixed";
  const short = (component["mwc-variant"] == "short" && !component["menu-open"]) || (component["mwc-variant"] == "fixed-short" && !component["menu-open"]);

  const style = {};

  if (short) {
    style["height"] = HEIGHT.toString() + "px";
  }

  if (component["mwc-dense"]) {
    style["padding-top"] = HEIGHT_DENSE.toString() + "px";
  }

  const classes = ["mdc-top-app-bar", "mdc-top-app-bar--width"];
  const fixedClasses = [];

  if (!fixed) {
    classes.push("mdc-top-app-bar--non-fixed", mwcTopBar.mdcTopAppBarNonFixed);
  } else {
    classes.push("mdc-top-app-bar--fixed", "mdc-top-app-bar--fixed-scrolled");
  }

  if (component["mwc-dense"]) {
    classes.push("mdc-top-app-bar--dense");
    fixedClasses.push("mdc-top-app-bar--dense");
  }

  if (short) {
    classes.push("mdc-top-app-bar--short", "mdc-top-app-bar--short-collapsed", "mdc-top-app-bar--short-has-action-item");
  }

  if (fixed && component["mwc-variant"] != "fixed-prominent") {
    fixedClasses.push("mdc-top-app-bar--fixed-adjust");
  }

  if (component["mwc-variant"] == "fixed-prominent") {
    fixedClasses.push("mdc-top-app-bar--prominent-fixed-adjust");
  }

  // TODO: Use material button component once ready!
  return (
    <div>
      <div id="mdc-top-app-bar" class={classes}>
          <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <slot></slot>
              <button
                onClick={() => (component["menu-open"] = !component["menu-open"])}
                class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
              >
                menu
              </button>

              <span class="mdc-top-app-bar__title">{component["mwc-title"]}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <slot name="topbar-end"></slot>
              <button
                class={"mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded " + (short ? "hidden" : "")}
                aria-label="Download"
                style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
              >
                file_download
              </button>
              <button
                class={" mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded " + (short ? "hidden" : "")}
                aria-label="Print this page"
                style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
              >
                print
              </button>
              <button
                class="mdc-icon-button material-icons mdc-top-app-bar__action-item mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
                aria-label="Bookmark this page"
                style="--mdc-ripple-fg-size:28px; --mdc-ripple-fg-scale:1.71429; --mdc-ripple-left:10px; --mdc-ripple-top:10px;"
              >
                bookmark
              </button>
            </section>
          </div>
      </div>
      <div id="fixed" style={style} class={fixedClasses}></div>
      <div id="width-div"></div>
    </div>
  );
};
