import {st} from "springtype/core";
import {ref} from "springtype/core/ref";
import {component} from "springtype/web/component";
import {tsx} from "springtype/web/vdom";
import {MwcDrawer} from "../component/mwc-drawer/mwc-drawer/mwc-drawer";
import {MwcTopBar} from "../component/mwc-top-bar/mwc-top-bar";
import {MwcTypography} from "../component/mwc-typography/mwc-typography/mwc-typography";
import {getDrawerListItems} from "./getdrawerlistitems";
import {MwcList} from "../component/mwc-list/mwc-list/mwc-list";
import {MwcTopBarVariant} from "../component/mwc-top-bar/mwc-top-bar-variant";
import {MwcDrawerAppContent} from "../component/mwc-drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import {MwcDrawerContent} from "../component/mwc-drawer/mwc-drawer-content/mwc-drawer-content";
import {MwcDrawerSubtitle} from "../component/mwc-drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import {MwcDrawerHeader} from "../component/mwc-drawer/mwc-drawer-header/mwc-drawer-header";
import {MwcDrawerTitle} from "../component/mwc-drawer/mwc-drawer-title/mwc-drawer-title";
import {ILifecycle} from "springtype/web/component/interface";
import {HomePageContainer} from "./home-page-container";
import {ROUTES} from "./routes";
import {MwcListItem} from "../component/mwc-list";

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
                <MwcDrawer ref={{drawer: this}} variant={"modal"} fixed={this.drawerAndTopBarFixed}>
                    <MwcDrawerHeader>
                        <MwcDrawerTitle>Material Design for SpringType</MwcDrawerTitle>
                        <MwcDrawerSubtitle>{process.env.ST_MATERIAL_VERSION}</MwcDrawerSubtitle>
                    </MwcDrawerHeader>
                    <MwcDrawerContent>
                        <MwcList tag={'nav'}>{getDrawerListItems((evt,route) => {
                            this.onDrawerItemClick(evt,route)
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
                        <HomePageContainer>
                            {ROUTES}
                        </HomePageContainer>
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
        console.log('route',route)
        st.route = {path: route};
    }

    onAfterRefChange(refName: string, refValue: any): void {
        console.log('ref change', refName, refValue);
    }


    onAfterRender() {
        console.log('render after', this.outerREf, this.topBar, this.appContent)
        this.topBar.mdcComponent.setScrollTarget(this.appContent.contentRef);
        this.topBar.mdcComponent.listen("MDCTopAppBar:nav", () => {
            console.log("nav happened!");
            this.drawer.doToggle();
        });
    }
}
