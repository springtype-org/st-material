import { MDCDialog } from "@material/dialog";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { AttrType } from "springtype/web/component/trait/attr";
import { tsx } from "springtype/web/vdom";

@component()
export class MwcDialog extends st.component implements ILifecycle {
  static SLOT_NAME_CONTENT = "content";
  static SLOT_NAME_BUTTONS = "buttons";

  @attr(AttrType.DOM_INTRANSPARENT)
  class: string | Array<string>;

  @attr(AttrType.DOM_INTRANSPARENT)
  title: string;

  mdcComponent: MDCDialog;

  render() {
    this.class = Array.isArray(this.class) ? this.class : [this.class];

    const classes = ["mdc-dialog", ...this.class];

    this.el.setAttribute("class", classes.join(" "));

    const surfaceElements = [];

    if (this.title) {
      surfaceElements.push(<h2 class="mdc-dialog__title">{this.title}</h2>);
    }

    surfaceElements.push(
      <div class="mdc-dialog__content" id="my-dialog-content">
      {this.renderSlot('content')}
      </div>,
    );

    console.log('has buttons?', this.slotChildren);

    surfaceElements.push(
      <footer class="mdc-dialog__actions">
        {this.renderSlot('buttons')}
      </footer>,
    );

    const elements = [
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">{surfaceElements}</div>
      </div>,
      <div class="mdc-dialog__scrim"></div>,
    ];

    return elements;
  }

  onAfterRender() {
    this.mdcComponent = new MDCDialog(this.el);
  }

  open() {
    this.mdcComponent.open();
  }

  close() {
    this.mdcComponent.close();
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MwcDialog: Partial<MwcDialog>;
    }
  }
}
