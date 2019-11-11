import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { AttrType } from "springtype/web/component/trait/attr";
import * as homePageContainer from "./home-page-container.tss.scss";

@component()
export class HomePageContainer extends st.component {
    @attr(AttrType.DOM_INTRANSPARENT)
    class: string | Array<string>;

    render() {
        this.class = Array.isArray(this.class) ? this.class : [this.class];

        const classes = ['home-page-container', homePageContainer.homePageContainer, ...this.class];

        this.el.setAttribute("class", classes.join(" "));

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
