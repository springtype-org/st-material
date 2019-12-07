import {tsx} from "springtype/web/vdom";
import {MwcListItemIcon} from "../component/mwc-list/mwc-list-item-icon/mwc-list-item-icon";
import {MwcListItem} from "../component/mwc-list/mwc-list-item/mwc-list-item";
import {ButtonPage} from "./page/button-page";
import {CardPage} from "./page/card-page";
import {CheckboxPage} from "./page/checkbox-page";
import {DialogPage} from "./page/dialog-page";
import {DrawerPage} from "./page/drawer-page";
import {GridLayoutPage} from "./page/grid-layout-page";
import {ListPage} from "./page/list-page";
import {RadioButtonPage} from "./page/radio-button-page";
import {SelectPage} from "./page/select-page";
import {SnackbarPage} from "./page/snackbar-page";
import {TabBarPage} from "./page/tabbar-page";
import {TextAreaPage} from "./page/text-area-page";
import {TextFieldPage} from "./page/text-field-page";
import {TypographyPage} from "./page/typography-page";
import {LinearProgressPage} from "./page/linear-progress-page";

const drawerItems: Array<{ route: string | Array<string>; text: any }> = [
    {
        route: [CheckboxPage.ROUTE, "/"],
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="check_box"/>
                Checkbox
            </fragment>
        ),
    },
    {
        route: RadioButtonPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="radio_button_checked"/>
                Radio Button
            </fragment>
        ),
    },
    {
        route: ButtonPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="add_circle_outline"/>
                Button
            </fragment>
        ),
    },
    {
        route: TextFieldPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="drag_handle"/>
                TextField
            </fragment>
        ),
    },
    {
        route: TextAreaPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="format_align_justify"/>
                TextArea
            </fragment>
        ),
    },
    {
        route: TypographyPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="text_fields"/>
                Typography
            </fragment>
        ),
    },
    {
        route: SelectPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="select_all"/>
                Select
            </fragment>
        ),
    },
    {
        route: GridLayoutPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="grid_on"/>
                Grid Layout
            </fragment>
        ),
    },
    {
        route: DrawerPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="menu_book"/>
                Drawer
            </fragment>
        ),
    },
    {
        route: ListPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="list"/>
                List
            </fragment>
        ),
    },
    {
        route: TabBarPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="tab"/>
                Tab Bar
            </fragment>
        ),
    },
    {
        route: SnackbarPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="chat_bubble_outline"/>
                Snackbar
            </fragment>
        ),
    },
    {
        route: DialogPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="chat"/>
                Dialog
            </fragment>
        ),
    },
    {
        route: CardPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="vertical_split"/>
                Card
            </fragment>
        ),
    },
    {
        route: LinearProgressPage.ROUTE,
        text: (
            <fragment>
                <MwcListItemIcon graphic={true} type="linear_scale"/>
                Linear Progress
            </fragment>
        ),
    },
];

export const getDrawerListItems = (onDrawerItemClick: (evt: MouseEvent, route: string) => void) => {
    return drawerItems.map(drawerItem => {
        const route = Array.isArray(drawerItem.route) ? drawerItem.route[0]: drawerItem.route;
        return (
            <MwcListItem
                onClick={(evt: MouseEvent) => {onDrawerItemClick(evt, route)}}
                autoWrapText={false}>
                {drawerItem.text}
            </MwcListItem>
        );
    });
};
