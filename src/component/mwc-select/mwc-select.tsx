import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {attr, component, event} from "springtype/web/component";
import {ILifecycle} from "springtype/web/component/interface/ilifecycle";
import {IEvent, IEventListener} from "springtype/web/component/interface";
import {MwcList, MwcListItem} from "../mwc-list";
import {tsx} from "springtype/web/vdom";
import {IElement, IVirtualNode} from "springtype/web/vdom/interface";
import {IVirtualNodeAttributes} from "springtype/web/vdom/interface/ivirtual-node";

export interface ISelectEventDetails {
    detail: {
        value: string;
        index: number;
    };
}

export interface IMwcSelectAttrs {
    name?: string;
    label?: string;
    ripple?: boolean;
    disabled?: boolean;
    value?: string;
    onMwcSelect?: IEventListener<ISelectEventDetails>;
}

export interface MwcSelectEvent extends IEvent<ISelectEventDetails> {
}

@component
export class MwcSelect extends st.component<IMwcSelectAttrs> implements ILifecycle {

    static SLOT_NAME_LIST_ITEMS: string = "mwc-select-items-slot";

    @ref
    selectRef: HTMLElement;

    @ref
    innerSelectRef: HTMLSelectElement;

    @ref
    selectLabelRef: HTMLElement;

    @ref
    selectLineRippleRef: HTMLElement;

    @ref
    selectMenuRef: HTMLElement;

    @ref
    selectTextRef: HTMLElement;

    @ref
    optionListRef: MwcList;

    @event
    onMwcSelect: IEventListener<ISelectEventDetails>;

    @attr
    name: string = "";

    @attr
    label: string = "";

    @attr
    ripple: boolean = true;

    @attr
    disabled: boolean = false;

    @attr
    value: string = "";

    selectedValue: any = null;
    selectedOpen: boolean = false;

    render(): IVirtualNode<IVirtualNodeAttributes> | Array<IVirtualNode> {
        const classes = ["mdc-select"];

        if (this.disabled) {
            classes.push("mdc-select--disabled");
        }

        return (
            <div ref={{selectRef: this}} class={classes} onClick={() => {
                this.selectedOpen ? this.close() : this.open()
            }} onFocus={() => {
                this.selectRef.classList.add('mdc-select--focused')
            }} onBlur={() => {
                this.selectRef.classList.remove('mdc-select--focused')
            }} tabIndex={-1} style="outline: none">
                <div class="mdc-select__anchor">
                    <select name={this.name} style="display:none;" ref={{innerSelectRef: this}}/>
                    <i class="mdc-select__dropdown-icon"/>
                    <div class="mdc-select__selected-text" aria-disabled={this.disabled} aria-expanded="true"
                         ref={{selectTextRef: this}}/>
                    <span class="mdc-floating-label" ref={{selectLabelRef: this}}>{this.label}</span>
                    <div class="mdc-line-ripple" ref={{selectLineRippleRef: this}}/>
                </div>

                <div class="mdc-select__menu mdc-menu mdc-menu-surface" ref={{selectMenuRef: this}} onClick={(evt) => {
                    this.onItemSelect(evt)
                }}>
                    <MwcList>{this.renderSlot(MwcSelect.SLOT_NAME_LIST_ITEMS)}</MwcList>
                </div>
            </div>
        );
    }


    open() {
        this.selectedOpen = true;
        this.selectRef.focus();
        this.selectRef.classList.add('mdc-select--activated');
        this.selectMenuRef.classList.add('mdc-menu-surface--open');
        this.selectLineRippleRef.classList.add('mdc-line-ripple--active');
        this.selectLabelRef.classList.add('mdc-floating-label--float-above');
    }

    close() {
        this.selectedOpen = false;
        this.selectRef.classList.remove('mdc-select--activated');
        this.selectMenuRef.classList.remove('mdc-menu-surface--open');
        if (this.selectedValue === null) {
            this.selectLabelRef.classList.remove('mdc-floating-label--float-above');
        }

    }

    onItemSelect(evt: MouseEvent) {
        const element: IElement = evt.target as IElement;
        const selectedListItem: MwcListItem = element.$stComponent;

        //@ts-ignore
        for (let i = 0; i < selectedListItem.parent.INTERNAL.childComponents.length; i++) {
            //@ts-ignore
            const listItem: MwcListItem = selectedListItem.parent.INTERNAL.childComponents[i];
            if (selectedListItem !== listItem) {
                listItem.select(false)
            }
        }
        selectedListItem.select(true);
        const value = component['data-value'];
        this.selectedValue = value;
        this.innerSelectRef = value;
        this.selectTextRef.innerText = element.innerText;
    }
}