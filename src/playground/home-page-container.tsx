import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { AttrType } from "springtype/web/component/trait/attr";
import * as homePageContainer from "./home-page-container.tss.scss";

@component()
export class HomePageContainer extends st.component {
  onAfterElCreate() {
    this.elClass = [...this.elClass, "home-page-container", homePageContainer.homePageContainer];
  }

  render() {
    return this.renderChildren();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      HomePageContainer: Partial<HomePageContainer>;
    }
  }
}
