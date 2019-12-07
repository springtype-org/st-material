import {PATH_START, PATH_WILDCARD, Route, RouteList} from "springtype/web/router";
import {tsx} from "springtype/web/vdom";
import {ButtonPage} from "./page/button-page";
import {CheckboxPage} from "./page/checkbox-page";
import {DialogPage} from "./page/dialog-page";
import {DrawerPage} from "./page/drawer-page";
import {GridLayoutPage} from "./page/grid-layout-page";
import {ListPage} from "./page/list-page";
import {SnackbarPage} from "./page/snackbar-page";
import {TabBarPage} from "./page/tabbar-page";
import {TextAreaPage} from "./page/text-area-page";
import {TextFieldPage} from "./page/text-field-page";
import {TypographyPage} from "./page/typography-page";
import {RadioButtonPage} from "./page/radio-button-page";
import {SelectPage} from "./page/select-page";
import {CardPage} from "./page/card-page";
import {LinearProgressPage} from "./page/linear-progress-page";

export const ROUTES = (
    <RouteList>
        <Route path={[CheckboxPage.ROUTE, PATH_START, PATH_WILDCARD]}>
            <CheckboxPage/>
        </Route>
        <Route path={ButtonPage.ROUTE}>
            <ButtonPage/>
        </Route>
        <Route path={TextFieldPage.ROUTE}>
            <TextFieldPage/>
        </Route>
        <Route path={TextAreaPage.ROUTE}>
            <TextAreaPage/>
        </Route>
        <Route path={TypographyPage.ROUTE}>
            <TypographyPage/>
        </Route>
        <Route path={GridLayoutPage.ROUTE}>
            <GridLayoutPage/>
        </Route>
        <Route path={DrawerPage.ROUTE}>
            <DrawerPage/>
        </Route>
        <Route path={ListPage.ROUTE}>
            <ListPage/>
        </Route>
        <Route path={TabBarPage.ROUTE}>
            <TabBarPage/>
        </Route>
        <Route path={SnackbarPage.ROUTE}>
            <SnackbarPage/>
        </Route>
        <Route path={DialogPage.ROUTE}>
            <DialogPage/>
        </Route>
        <Route path={RadioButtonPage.ROUTE}>
            <RadioButtonPage/>
        </Route>
        <Route path={SelectPage.ROUTE}>
            <SelectPage/>
        </Route>
        <Route path={CardPage.ROUTE}>
            <CardPage/>
        </Route>
        <Route path={LinearProgressPage.ROUTE}>
            <LinearProgressPage/>
        </Route>
    </RouteList>
);
