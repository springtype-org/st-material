import { st } from "springtype/core";
import { ref } from "springtype/core/ref";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

export interface IMwcDrawerAppContentAttrs {
  fixed?: boolean;
}

@component({tag:'div'})
export class MwcDrawerAppContent extends st.component<IMwcDrawerAppContentAttrs>
  implements ILifecycle, IMwcDrawerAppContentAttrs {

  @attr
  fixed: boolean = false;

  @ref
  contentRef: HTMLElement;

  render() {
    const classes = ["mdc-drawer-app-content"];

    if (this.fixed) {
      classes.push("mdc-top-app-bar--fixed-adjust");
    }

    return (
      <div class={classes} ref={{ contentRef: this }}>
        {this.renderChildren()}
      </div>
    );
  }
}