import { MDCDialog } from "@material/dialog";
import { st } from "springtype/core";
import { attr, component } from "springtype/web/component";
import { ILifecycle } from "springtype/web/component/interface";
import { tsx } from "springtype/web/vdom";

export interface MwcDialogAttrs {
  title?: string;
}

@component
export class MwcDialog extends st.component<MwcDialogAttrs> implements ILifecycle, MwcDialogAttrs {
  static SLOT_NAME_CONTENT = "content";
  static SLOT_NAME_BUTTONS = "buttons";

  @attr
  title: string;

  mdcComponent: MDCDialog;

  onAfterElCreate() {
    this.elClass = ["mdc-dialog", ...(this.elClass as Array<string>)];
  }

  render() {
    const surfaceElements = [];

    if (this.title) {
      surfaceElements.push(<h2 class="mdc-dialog__title">{this.title}</h2>);
    }

    surfaceElements.push(
      <div class="mdc-dialog__content" id="my-dialog-content">
        {this.renderSlot(MwcDialog.SLOT_NAME_CONTENT)}
      </div>,
    );

    surfaceElements.push(<footer class="mdc-dialog__actions">{this.renderSlot(MwcDialog.SLOT_NAME_BUTTONS)}</footer>);

    return [
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">{surfaceElements}</div>
      </div>,
      <div class="mdc-dialog__scrim"></div>,
    ];
  }

  onAfterRender() {
    this.mdcComponent = new MDCDialog(this.el);
  }

  open() {
    try {
      this.mdcComponent.open();
    } catch (e) {}
  }

  close() {
    this.mdcComponent.close();
  }

  onDisconnect() {
    this.mdcComponent.destroy();
  }
}
