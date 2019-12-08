import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {tsx} from "springtype/web/vdom";
import {ref} from "springtype/core/ref";

export interface IMwcTabAttrs {
    ripple?: boolean;
    active?: boolean;
    icon?: string;
    label?: string;
}

@component()
export class MwcTab extends st.component<IMwcTabAttrs> implements ILifecycle {
    @ref
    rippleRef: HTMLElement;

    @ref
    indicatorRef: HTMLElement;

    @attr
    icon: string;

    @attr
    label: string = "";

    class = ['mdc-tab'];

    activate(active: boolean, evt?: MouseEvent | TouchEvent) {
        if (active) {
            this.el.classList.add("mdc-tab--active");
            this.indicatorRef.classList.add("mdc-tab-indicator--active");
            this.rippleRef.classList.add("mdc-ripple-upgraded--foreground-activation");
            this.el.setAttribute('aria-selected', 'true');
            this.el.setAttribute('tabindex', "0");
        } else {
            this.el.classList.remove("mdc-tab--active");
            this.rippleRef.classList.remove("mdc-ripple-upgraded--foreground-activation");
            this.indicatorRef.classList.remove("mdc-tab-indicator--active");
            this.el.setAttribute('aria-selected', 'false');
            this.el.setAttribute('tabindex', "-1");
        }
    }

    onAfterElCreate(): void {
        this.el.setAttribute('style', "display: block; outline: none");
        this.el.setAttribute('role', "tab");
        this.el.setAttribute('aria-selected', 'false');

        this.el.addEventListener("focus", () => {
            this.rippleRef.classList.add("mdc-ripple-upgraded--background-focused")
        });
        this.el.addEventListener("blur", () => {
            this.rippleRef.classList.remove("mdc-ripple-upgraded--background-focused")
        });
    }

    render() {
        return (
            <fragment>

               <span class="mdc-tab__content">
                   {this.icon
                       ? <span class="mdc-tab__icon material-icons" aria-hidden="true">{this.icon}</span>
                       : <fragment/>
                   }
                   <span class="mdc-tab__text-label">{this.label}</span>
                </span>
                <span class="mdc-tab-indicator" ref={{indicatorRef: this}}>
                     <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"/>
                </span>
                <span ref={{rippleRef: this}} class={["mdc-tab__ripple", "mdc-ripple-upgraded"]}/>
            </fragment>
        );
    }

    getNormalizedEventCoords(evt?: MouseEvent | TouchEvent) {
        /*

                    this.rippleRef.setAttribute("style", "--mdc-ripple-fg-size: 124px; " +
                        "--mdc-ripple-fg-scale:1.2; " +
                        "--mdc-ripple-fg-translate-start: " + 0+ "px, -" + 0+ "px; " +
                        "--mdc-ripple-fg-translate-end: " + 0 + "px, -" + 35+ "px; ");
                  setTimeout(() => {
                            this.rippleRef.removeAttribute('style');
                            this.rippleRef.classList.remove("mdc-ripple-upgraded--foreground-activation");
                        }, 250
                    );

        */
        const clientRect = this.el.getBoundingClientRect();
        const pageOffset = {x: window.pageXOffset, y: window.pageYOffset};
        if (!evt) {
            return {x: 0, y: 0};
        }
        const x = pageOffset.x;
        const y = pageOffset.y;
        const documentX = x + clientRect.left;
        const documentY = y + clientRect.top;
        let normalizedX;
        let normalizedY;
        // Determine touch point relative to the ripple container.
        if (evt.type === 'touchstart') {
            var touchEvent = evt;
            //@ts-ignore
            normalizedX = touchEvent.changedTouches[0].pageX - documentX;
            //@ts-ignore
            normalizedY = touchEvent.changedTouches[0].pageY - documentY;
        } else {
            var mouseEvent = evt;
            //@ts-ignore
            normalizedX = mouseEvent.pageX - documentX;
            //@ts-ignore
            normalizedY = mouseEvent.pageY - documentY;
        }
        return {x: normalizedX, y: normalizedY};
    }
}