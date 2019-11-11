import { st } from "springtype/core";
import { tsx } from "springtype/web/vdom";
import { MwcListItemText } from "../component/list/mwc-list-item-text/mwc-list-item-text";
import { MwcListItem } from "../component/list/mwc-list-item/mwc-list-item";
import { HomePage } from "./home-page";
import { ButtonPage } from "./page/button-page";
import { CheckboxPage } from "./page/checkbox-page";
import { DrawerPage } from "./page/drawer-page";
import { GridLayoutPage } from "./page/grid-layout-page";
import { ListPage } from "./page/list-page";
import { SnackbarPage } from "./page/snackbar";
import { TabBarPage } from "./page/tabbar-page";
import { TextAreaPage } from "./page/text-area-page";
import { TextFieldPage } from "./page/text-field-page";
import { TypographyPage } from "./page/typography-page";


const drawerItems: Array<{route: string, text: string, activated?: boolean}> = [
    {route: CheckboxPage.ROUTE, text: 'Checkbox', activated: true},
    {route: ButtonPage.ROUTE, text: 'Button'},
    {route: TextFieldPage.ROUTE, text: 'TextField'},
    {route: TextAreaPage.ROUTE, text: 'TextArea'},
    {route: TypographyPage.ROUTE, text: 'Typography'},
    {route: GridLayoutPage.ROUTE, text: 'Grid Layout'},
    {route: DrawerPage.ROUTE, text: 'Drawer'},
    {route: ListPage.ROUTE, text: 'List'},
    {route: TabBarPage.ROUTE, text: 'Tab Bar'},
    {route: SnackbarPage.ROUTE, text: 'Snackbar'},
];

export const getDrawerListItems = (homepage: HomePage) => {
    return drawerItems.map(drawerItem => <MwcListItem onClick={() => {
        st.router.navigate(drawerItem.route);
        homepage.drawerOpen = false;
    }} autoWrapText={false} activated={drawerItem.activated || false}>
        <MwcListItemText>{drawerItem.text}</MwcListItemText>
    </MwcListItem>);
};