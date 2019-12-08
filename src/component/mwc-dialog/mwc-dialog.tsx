import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface";
import {tsx} from "springtype/web/vdom";

export interface IMwcDialogAttrs {
    title?: string;
}

@component
export class MwcDialog extends st.component<IMwcDialogAttrs> implements ILifecycle, IMwcDialogAttrs {
    static SLOT_NAME_CONTENT = "content";
    static SLOT_NAME_BUTTONS = "buttons";

    @attr
    title: string;

    class = ["mdc-dialog"];

    render() {

        return [
            <div class="mdc-dialog__container">
                <div class="mdc-dialog__surface">
                    {this.title ? <h2 class="mdc-dialog__title">{this.title}</h2>
                        : <fragment/>}
                    <div class="mdc-dialog__content" id="my-dialog-content">
                        {this.renderSlot(MwcDialog.SLOT_NAME_CONTENT)}
                    </div>
                    <footer class="mdc-dialog__actions">
                        {this.renderSlot(MwcDialog.SLOT_NAME_BUTTONS)}
                    </footer>
                </div>
            </div>,
            <div class="mdc-dialog__scrim" onClick={() => {
                this.close()
            }}/>,
        ];
    }

    open() {
        try {
            this.el.classList.add('mdc-dialog--open');
        } catch (e) {
        }
    }

    close() {
        this.el.classList.remove('mdc-dialog--open');
    }


}
