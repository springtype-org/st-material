import { st } from "springtype/core";
import { tsx } from "springtype/web/vdom";
import { MwcListItemIcon } from "../component/list/mwc-list-item-icon/mwc-list-item-icon";
import { MwcListItemText } from "../component/list/mwc-list-item-text/mwc-list-item-text";
import { MwcListItem } from "../component/list/mwc-list-item/mwc-list-item";
import { HomePage } from "./home-page";
import { ButtonPage } from "./page/button-page";
import { CardPage } from "./page/card-page";
import { CheckboxPage } from "./page/checkbox-page";
import { DialogPage } from "./page/dialog-page";
import { DrawerPage } from "./page/drawer-page";
import { GridLayoutPage } from "./page/grid-layout-page";
import { ListPage } from "./page/list-page";
import { RadioButtonPage } from "./page/radio-button-page";
import { SelectPage } from "./page/select-page";
import { SnackbarPage } from "./page/snackbar-page";
import { TabBarPage } from "./page/tabbar-page";
import { TextAreaPage } from "./page/text-area-page";
import { TextFieldPage } from "./page/text-field-page";
import { TypographyPage } from "./page/typography-page";
import {LinearProgressPage} from "./page/linear-progress-page";

const drawerItems: Array<{ route: string | Array<string>, text: any }> = [
    {
        route: [CheckboxPage.ROUTE, "/"], text: <fragment>
            <MwcListItemIcon type="check_box"/>
            <MwcListItemText>Checkbox</MwcListItemText>
        </fragment>
    },
    {
        route: RadioButtonPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="radio_button_checked"/>
            <MwcListItemText>Radio Button</MwcListItemText>
        </fragment>
    },
    {
        route: ButtonPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="add_circle_outline"/>
            <MwcListItemText>Button</MwcListItemText>
        </fragment>
    },
    {
        route: TextFieldPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="drag_handle"/>
            <MwcListItemText>TextField</MwcListItemText>
        </fragment>
    },
    {
        route: TextAreaPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="format_align_justify"/>
            <MwcListItemText>TextArea</MwcListItemText>
        </fragment>
    },
    {
        route: TypographyPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="text_fields"/>
            <MwcListItemText>Typography</MwcListItemText>
        </fragment>
    },
    {
        route: SelectPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="select_all"/>
            <MwcListItemText>Select</MwcListItemText>
        </fragment>
    },
    {
        route: GridLayoutPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="grid_on"/>
            <MwcListItemText>Grid Layout</MwcListItemText>
        </fragment>
    },
    {
        route: DrawerPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="menu_book"/>
            <MwcListItemText>Drawer</MwcListItemText>
        </fragment>
    },
    {
        route: ListPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="list"/>
            <MwcListItemText>List</MwcListItemText>
        </fragment>
    },
    {
        route: TabBarPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="tab"/>
            <MwcListItemText>Tab Bar</MwcListItemText>
        </fragment>
    },
    {
        route: SnackbarPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="chat_bubble_outline"/>
            <MwcListItemText>Snackbar</MwcListItemText>
        </fragment>
    },
    {
        route: DialogPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="chat"/>
            <MwcListItemText>Dialog</MwcListItemText>
        </fragment>
    },
    {
        route: CardPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="vertical_split"/>
            <MwcListItemText>Card</MwcListItemText>
        </fragment>
    }, {
        route: LinearProgressPage.ROUTE, text: <fragment>
            <MwcListItemIcon type="linear_scale"/>
            <MwcListItemText>Linear Progress</MwcListItemText>
        </fragment>
    },

];

export const getDrawerListItems = (homepage: HomePage) => {
    return drawerItems.map(drawerItem => {
        let route: Array<string>;
        if (Array.isArray(drawerItem.route)) {
            route = drawerItem.route;
        } else {
            route = [drawerItem.route];
        }

        return <MwcListItem onClick={() => {
            st.router.navigate(route[0]);
            homepage.drawer.close();

        }} autoWrapText={false} activated={route.indexOf('/' + window.location.hash) > -1 || route.indexOf(window.location.hash) > -1}>{drawerItem.text}
        </MwcListItem>
    });
};