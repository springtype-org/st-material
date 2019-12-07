import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface/ilifecycle";
import { tsx } from "springtype/web/vdom";

export interface IMwcListItemIconAttrs {
  type?: string;
  meta?: boolean;
  graphic?: boolean;
}

@component
export class MwcListItemIcon extends st.component<IMwcListItemIconAttrs> implements ILifecycle {
  @attr
  type: string;

  @attr
  meta: boolean;

  @attr
  graphic: boolean;

  onAfterElCreate() {

    const classes = [...this.class, "material-icons"];

    if (this.meta) {
      classes.push("mdc-list-item__meta");
    }

    if (this.graphic) {
      classes.push("mdc-list-item__graphic");
    }
    this.class = classes;
  }

  render() {
    return <fragment />;
  }

  onAfterRender() {
    this.el.innerText = this.type;
  }
}