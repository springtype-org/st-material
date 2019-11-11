import { PATH_DEFAULT, PATH_WILDCARD, Route, RouteList } from "springtype/web/router";
import { tsx } from "springtype/web/vdom";
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

export const ROUTES = <RouteList>
    <Route path={[PATH_DEFAULT, PATH_WILDCARD, CheckboxPage.ROUTE]}
           component={<CheckboxPage/>}/>
    <Route path={ButtonPage.ROUTE} component={<ButtonPage/>}/>
    <Route path={TextFieldPage.ROUTE} component={<TextFieldPage/>}/>
    <Route path={TextAreaPage.ROUTE} component={<TextAreaPage/>}/>
    <Route path={TypographyPage.ROUTE} component={<TypographyPage/>}/>
    <Route path={GridLayoutPage.ROUTE} component={<GridLayoutPage/>}/>
    <Route path={DrawerPage.ROUTE} component={<DrawerPage/>}/>
    <Route path={ListPage.ROUTE} component={<ListPage/>}/>
    <Route path={TabBarPage.ROUTE} component={<TabBarPage/>}/>
    <Route path={SnackbarPage.ROUTE} component={<SnackbarPage/>}/>
</RouteList>;