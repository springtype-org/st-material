import { st } from "springtype/core";
import { component } from "springtype/web/component";
import * as homePageContainer from "./home-page-container.tss.scss";

@component
export class HomePageContainer extends st.component {
  onAfterElCreate() {
    this.class = [...this.class, "home-page-container", homePageContainer.homePageContainer];
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
