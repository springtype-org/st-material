import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";

export interface IMwcSnackbarAttrs {
    stacked?: boolean;
    leading?: boolean;
    label?: string;
}

@component
export class MwcSnackbar extends st.component<IMwcSnackbarAttrs> implements ILifecycle {
    @attr
    label: string;

    @attr
    leading: boolean;

    @attr
    stacked: boolean;

    @attr
    duration: number = 5000;

    timeoutProcess: NodeJS.Timeout;

    onAfterElCreate() {
        const classes = [...this.elClass, "mdc-snackbar"];

        if (this.leading) {
            classes.push("mdc-snackbar--leading");
        }

        if (this.stacked) {
            classes.push("mdc-snackbar--stacked");
        }
        this.elClass = classes;
    }

    render() {
        return (
            <div class="mdc-snackbar__surface">
                <div class="mdc-snackbar__label" role="status" aria-live="polite">
                    {this.label}
                </div>
                <div class="mdc-snackbar__actions">{this.renderChildren()}</div>
            </div>
        );
    }

    open() {
        this.el.classList.add('mdc-snackbar--open');
        this.addTimeout();
    }

    close() {
        this.el.classList.remove('mdc-snackbar--open');
    }

    addTimeout() {
        if (this.duration > 0) {

            if (this.timeoutProcess) {
                clearTimeout(this.timeoutProcess);
            }
            this.timeoutProcess = setTimeout(() => {
                this.close()
            }, this.duration);
        }
    }
}