import {st} from "springtype/core";
import {attr, component} from "springtype/web/component";
import {PATH_DEFAULT, PATH_WILDCARD, Route, RouteList} from "springtype/web/router";
import {tsx} from "springtype/web/vdom";
import {MwcTopBar} from "../component/mwc-top-bar/mwc-top-bar";
import {MwcTypography} from "../component/typography/mwc-typography/mwc-typography";
import {ButtonPage} from "./page/button-page";
import {CheckboxPage} from "./page/checkbox-page";
import {DrawerPage} from "./page/drawer-page";
import {GridLayoutPage} from "./page/grid-layout-page";
import {ListPage} from "./page/list-page";
import {TextAreaPage} from "./page/text-area-page";
import {TextFieldPage} from "./page/text-field-page";
import {TypographyPage} from "./page/typography-page";
import {MwcTopBarVariant} from "../component/mwc-top-bar/mwc-top-bar-variant";
import {MwcDrawer} from "../component/drawer/mwc-drawer/mwc-drawer";
import {MwcDrawerHeader} from "../component/drawer/mwc-drawer-header/mwc-drawer-header";
import {MwcDrawerTitle} from "../component/drawer/mwc-drawer-title/mwc-drawer-title";
import {MwcDrawerSubtitle} from "../component/drawer/mwc-drawer-subtitle/mwc-drawer-subtitle";
import {MwcDrawerContent} from "../component/drawer/mwc-drawer-content/mwc-drawer-content";
import {MwcList} from "../component/list/mwc-list/mwc-list";
import {MwcListItem} from "../component/list/mwc-list-item/mwc-list-item";
import {MwcListItemText} from "../component/list/mwc-list-item-text/mwc-list-item-text";
import {MwcDrawerAppContent} from "../component/drawer/mwc-drawer-app-content/mwc-drawer-app-content";
import {AttrType} from "springtype/web/component/trait/attr";
import * as homePage from "./home-page.tss.scss"

@component()
export class HomePage extends st.component {
    @attr(AttrType.DOM_INTRANSPARENT)
    drawerOpen: boolean = false;

    @attr(AttrType.DOM_INTRANSPARENT)
    drawerAndTopBarFixed: boolean = true;

    render() {
        const fixedIconButtonsClass = ['material-icons', 'mdc-top-app-bar__action-item mdc-icon-button'];
        const fixedMenuButtonClass = ['mdc-icon-button', 'material-icons','mdc-top-app-bar__navigation-icon'];
        const drawerRootClasses = [];
        if (this.drawerAndTopBarFixed && this.drawerOpen) {
            drawerRootClasses.push('drawer-open-padding-fix', homePage.drawerOpenPaddingFix);
        }
        return (
            <MwcTypography>
                <div>
                    <MwcDrawer open={this.drawerOpen}>
                        <MwcDrawerHeader>
                            <MwcDrawerTitle>Mail Web Components</MwcDrawerTitle>
                            <MwcDrawerSubtitle>springtype</MwcDrawerSubtitle>
                        </MwcDrawerHeader>

                        <MwcDrawerContent>
                            <MwcList>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(CheckboxPage.ROUTE);
                                    this.drawerOpen = false;
                                }} activated={true} autoWrapText={false}>
                                    <MwcListItemText>Checkbox</MwcListItemText>
                                </MwcListItem>

                                <MwcListItem onClick={() => {
                                    st.router.navigate(ButtonPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>Button</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(TextFieldPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>TextField</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(TypographyPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>Typography</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(TextAreaPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>TextArea</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(GridLayoutPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>Grid Layout</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(DrawerPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>Drawer</MwcListItemText>
                                </MwcListItem>
                                <MwcListItem onClick={() => {
                                    st.router.navigate(ListPage.ROUTE);
                                    this.drawerOpen = false;
                                }} autoWrapText={false}>
                                    <MwcListItemText>List</MwcListItemText>
                                </MwcListItem>
                            </MwcList>
                        </MwcDrawerContent>
                    </MwcDrawer>
                    <MwcDrawerAppContent>
                        <div class={drawerRootClasses}>
                            <MwcTopBar title="Playground" variant={MwcTopBarVariant.STANDARD}
                                       fixed={this.drawerAndTopBarFixed}>
                                <template slot={MwcTopBar.SLOT_NAME_MENU_ICON_BUTTON}>
                                    <button onClick={() => this.drawerOpen = !this.drawerOpen}
                                            class={fixedMenuButtonClass}>menu
                                    </button>
                                </template>
                                <template slot={MwcTopBar.SLOT_NAME_TRAILING_ICONS}>
                                    <button class={fixedIconButtonsClass} aria-label="Download">file_download</button>
                                    <button class={fixedIconButtonsClass} aria-label="Print this page">print</button>
                                    <button class={fixedIconButtonsClass} aria-label="Bookmark this page">bookmark
                                    </button>
                                </template>
                                <template slot={MwcTopBar.SLOT_NAME_TOP_BAR_BODY}>
                                    <RouteList>
                                        <Route path={[PATH_DEFAULT, PATH_WILDCARD, CheckboxPage.ROUTE]}
                                               component={<CheckboxPage/>}/>
                                        <Route path={ButtonPage.ROUTE} component={<ButtonPage/>}/>
                                        <Route path={TextFieldPage.ROUTE} component={<TextFieldPage/>}/>
                                        <Route path={TextAreaPage.ROUTE} component={<TextAreaPage/>}/>
                                        <Route path={TypographyPage.ROUTE} component={<TypographyPage/>}/>
                                        <Route path={GridLayoutPage.ROUTE} component={<GridLayoutPage/>}/>
                                        <Route path={DrawerPage.ROUTE} component={<DrawerPage/>}/>
                                        <Route path={ListPage.ROUTE} component={<ListPage/>}/>
                                    </RouteList>
                                </template>
                            </MwcTopBar></div>
                    </MwcDrawerAppContent>
                </div>
            </MwcTypography>
        );
    }
}
