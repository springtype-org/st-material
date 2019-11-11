import { MDCTabBar } from "@material/tab-bar";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcTabBar extends st.component implements ILifecycle {

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  focusOnActivate: boolean = true;

  @attr(AttrType.DOM_INTRANSPARENT)
  useAutomaticActivation: boolean = true;

  protected mdcComponent: MDCTabBar;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-tab-bar", ...this.class];

    this.el.setAttribute("class", classes.join(" "));
    this.el.style.display = "block";

    return (
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area">
          <div class="mdc-tab-scroller__scroll-content">
            {this.virtualSlotChildren.default}
          </div>
        </div>
      </div>
    );
  }
   onAfterInitialRender(): void {

    this.mdcComponent = new MDCTabBar(this.el);
    
    this.el.addEventListener('MDCTabBar:activated', () => {
      console.log('activatd')
    })

    this.mdcComponent.focusOnActivate = this.focusOnActivate;
    this.mdcComponent.useAutomaticActivation = this.useAutomaticActivation;

  }

  activateTab(index: number): void {
    this.mdcComponent.activateTab(index);
  }

  scrollIntoView(index: number): void {
    this.mdcComponent.scrollIntoView(index);
  }

  onDisconnect() {
    this.mdcComponent.destroy();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcTabBar: Partial<MwcTabBar>;
    }
  }
}
