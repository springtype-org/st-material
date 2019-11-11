import {MDCTab} from "@material/tab";
import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {AttrType} from "springtype/web/component/trait/attr";
import {tsx} from "springtype/web/vdom";

@component()
export class MwcTab extends st.component implements ILifecycle {
    @attr(AttrType.DOM_INTRANSPARENT)
    ripple: boolean = true;

    @attr(AttrType.DOM_INTRANSPARENT)
    class: string | Array<string>;

    @attr(AttrType.DOM_INTRANSPARENT)
    active: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    tabIndex: number = 0;

    @attr(AttrType.DOM_INTRANSPARENT)
    icon: string;

    @attr(AttrType.DOM_INTRANSPARENT)
    label: string = "Untitled";

    protected mdcComponent: MDCTab;

    render() {
        this.class = Array.isArray(this.class) ? this.class : [this.class];

        const classes = ["mdc-tab", ...this.class];

        if (this.active) {
            classes.push("mdc-tab--active");
        }

        this.el.setAttribute("class", classes.join(" "));
        this.el.setAttribute("role", "tab");
        this.el.setAttribute("aria-selected", "false");
        this.el.style.display = "block";
        this.el["tabindex"] = this.tabIndex;

        const elements = [];
        const tabContent = [];

        if (this.icon) {
            tabContent.push(
                <span class="mdc-tab__icon material-icons" aria-hidden="true">
          {this.icon}
        </span>);
        }

        tabContent.push(<span class="mdc-tab__text-label">{this.label}</span>);

        elements.push(<span class="mdc-tab__content">{tabContent}</span>);

        //always add indicator
        elements.push(this.getIndicator());

        if (this.ripple) {
            elements.push(<span class="mdc-tab__ripple"/>);
        }

        return elements;
    }

    private getIndicator() {
        const indicatorClasses = ["mdc-tab-indicator"];

        if (this.active) {
            indicatorClasses.push("mdc-tab-indicator--active");
        }
        return <span class={indicatorClasses}>
          <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
        </span>

    }

    onAfterInitialRender(): void {
        //@ts-ignore
        this.mdcComponent = new MDCTab(this.el);

    }

}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            MwcTab: Partial<MwcTab>;
        }
    }
}
