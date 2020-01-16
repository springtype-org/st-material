import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {ILifecycle} from "springtype/web/component/interface";
import {ROUTES} from "./routes";
import {MwcList, MwcListItem} from "../component/mwc-list";
import {MwcTypography} from "../component/mwc-typography";
import {
    MwcDrawer,
    MwcDrawerAppContent,
    MwcDrawerContent,
    MwcDrawerHeader,
    MwcDrawerSubtitle,
    MwcDrawerTitle
} from "../component/mwc-drawer";
import {getDrawerListItems} from "./getdrawerlistitems";
import {MwcTopBar} from "../component/mwc-top-bar";
import {MwcTopBarVariant} from "../component/mwc-top-bar/mwc-top-bar-variant";
import {MwcLayoutGrid} from "../component/mwc-layout";

@component
export class HomePage extends st.component implements ILifecycle {

    @ref
    drawer!: MwcDrawer;

    @ref
    topBar!: MwcTopBar;

    @ref
    appContent!: MwcDrawerAppContent;
    @ref
    outerREf!: HTMLElement;

    drawerAndTopBarFixed: boolean = true;

    selectedListItem!: MwcListItem;

    render() {
        return (
            <MwcTypography ref={{outerREf: this}}>
                <MwcDrawer ref={{drawer: this}} variant="modal" fixed={this.drawerAndTopBarFixed}>
                    <MwcDrawerHeader>
                        <MwcDrawerTitle>Material Design for SpringType</MwcDrawerTitle>
                        <MwcDrawerSubtitle>{process.env.ST_MATERIAL_VERSION}</MwcDrawerSubtitle>
                    </MwcDrawerHeader>
                    <MwcDrawerContent>
                        <MwcList tag={'nav'}>{getDrawerListItems((evt, route) => {
                            this.onDrawerItemClick(evt, route)
                        })}</MwcList>
                    </MwcDrawerContent>

                </MwcDrawer>
                <MwcDrawerAppContent fixed={false}>
                    <MwcTopBar
                        ref={{topBar: this}}
                        title="Material Design Components for springtype"
                        variant={MwcTopBarVariant.SHORT}
                        fixed={this.drawerAndTopBarFixed}
                    />
                    <MwcDrawerAppContent fixed={this.drawerAndTopBarFixed} ref={{appContent: this}}>
                        <MwcLayoutGrid style={{maxWidth: '1024px'}} >
                            {ROUTES}
                        </MwcLayoutGrid>
                    </MwcDrawerAppContent>
                </MwcDrawerAppContent>
            </MwcTypography>
        );
    }

    onDrawerItemClick(evt: MouseEvent, route: string) {
        if (this.selectedListItem) {
            this.selectedListItem.select(false);
        }
        this.selectedListItem = (evt.target as any).$stComponent as MwcListItem;
        this.selectedListItem.select(true);
        this.drawer.doClose();
        st.route = {path: route};
    }

    onAfterRender() {
        console.log('render after', this.outerREf, this.topBar, this.appContent);
        this.topBar.mdcComponent.setScrollTarget(this.appContent.contentRef);
        this.topBar.mdcComponent.listen("MDCTopAppBar:nav", () => {
            this.drawer.doToggle();
        });
    }
}
