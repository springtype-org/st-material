import {attr, component} from "springtype/web/component";
import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {tsx} from "springtype/web/vdom";

export interface IMwcLinearProgressAttrs {
    reverse?: boolean;
}

@component
export class MwcLinearProgress extends st.component<IMwcLinearProgressAttrs> {

    @ref
    elRef: HTMLElement;

    @ref
    progressRef: HTMLElement;

    @ref
    progressBufferRef: HTMLElement;

    @attr
    reverse: boolean = false;

    render() {
        return (
            <div role="progressbar" class="mdc-linear-progress" ref={{elRef: this}}>
                <div class="mdc-linear-progress__buffering-dots"/>
                <div class="mdc-linear-progress__buffer" ref={{progressBufferRef: this}}/>
                <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" ref={{progressRef: this}}>
                    <span class="mdc-linear-progress__bar-inner"/>
                </div>
                <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span class="mdc-linear-progress__bar-inner"/>
                </div>
            </div>
        );
    }

    progress(progress: number) {
        this.progressRef.setAttribute("style", `transform: scaleX(${progress})`)
    }

    buffer(buffer: number) {
        this.progressBufferRef.setAttribute("style", `transform: scaleX(${buffer})`)
    }

    onAfterRender(): void {
        if (this.reverse) {
            this.elRef.classList.add('mdc-linear-progress--reversed');
        } else {
            this.elRef.classList.remove('mdc-linear-progress--reversed');
        }
    }


}