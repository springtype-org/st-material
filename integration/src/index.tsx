// material CSS styles
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/top-app-bar/dist/mdc.top-app-bar.css";
import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { domRef, tsx } from "springtype/web/vdom";
import { MwcTopBar } from "../../src/component/mwc-top-bar/mwc-top-bar";
// you can easily use global CSS stylesheets like this
import "../assets/global-styles.css";

@component()
export class Integration extends st.component implements ILifecycle {
  @domRef("topBar")
  topBar: HTMLElement;

  onAfterInitialRender() {
    // we can easily access native DOM elements with @domRef(...)
    console.log("MwcTopBar DOM ref", this.topBar);
  }

  // you could also use @component({ topl }) and import a TSX template function
  render() {
    return (
      <fragment>
        <MwcTopBar ref={{ topBar: this }}></MwcTopBar>
      </fragment>
    );
  }
}

// Tells SpringType to render this component now
st.render(<Integration />);
