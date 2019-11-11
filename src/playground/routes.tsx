import {PATH_DEFAULT, PATH_WILDCARD, Route, RouteList} from "springtype/web/router";
import {CheckboxPage} from "./page/checkbox-page";
import {ButtonPage} from "./page/button-page";
import {TextFieldPage} from "./page/text-field-page";
import {TextAreaPage} from "./page/text-area-page";
import {TypographyPage} from "./page/typography-page";
import {GridLayoutPage} from "./page/grid-layout-page";
import {DrawerPage} from "./page/drawer-page";
import {ListPage} from "./page/list-page";
import {tsx} from "springtype/web/vdom";

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
</RouteList>;