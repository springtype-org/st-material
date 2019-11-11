import {MwcListItem} from "../component/list/mwc-list-item/mwc-list-item";
import {st} from "springtype/core";
import {CheckboxPage} from "./page/checkbox-page";
import {MwcListItemText} from "../component/list/mwc-list-item-text/mwc-list-item-text";
import {ButtonPage} from "./page/button-page";
import {TextFieldPage} from "./page/text-field-page";
import {TypographyPage} from "./page/typography-page";
import {TextAreaPage} from "./page/text-area-page";
import {GridLayoutPage} from "./page/grid-layout-page";
import {DrawerPage} from "./page/drawer-page";
import {ListPage} from "./page/list-page";
import {tsx} from "springtype/web/vdom";
import {HomePage} from "./home-page";


const drawerItems: Array<{route: string, text: string, activated?: boolean}> = [
    {route: CheckboxPage.ROUTE, text: 'Checkbox', activated: true},
    {route: ButtonPage.ROUTE, text: 'Button'},
    {route: TextFieldPage.ROUTE, text: 'TextField'},
    {route: TextAreaPage.ROUTE, text: 'TextArea'},
    {route: TypographyPage.ROUTE, text: 'Typography'},
    {route: GridLayoutPage.ROUTE, text: 'Grid Layout'},
    {route: DrawerPage.ROUTE, text: 'Drawer'},
    {route: ListPage.ROUTE, text: 'List'},
];

export const getDrawerListItems = (homepage: HomePage) => {
    return drawerItems.map(drawerItem => <MwcListItem onClick={() => {
        st.router.navigate(drawerItem.route);
        homepage.drawerOpen = false;
    }} autoWrapText={false} activated={drawerItem.activated || false}>
        <MwcListItemText>{drawerItem.text}</MwcListItemText>
    </MwcListItem>);
};