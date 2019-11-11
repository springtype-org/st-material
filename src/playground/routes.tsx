import { PATH_DEFAULT, PATH_WILDCARD, Route, RouteList } from "springtype/web/router";
import { tsx } from "springtype/web/vdom";
import { ButtonPage } from "./page/button-page";
import { CheckboxPage } from "./page/checkbox-page";
import { DialogPage } from "./page/dialog-page";
import { DrawerPage } from "./page/drawer-page";
import { GridLayoutPage } from "./page/grid-layout-page";
import { ListPage } from "./page/list-page";
import { SnackbarPage } from "./page/snackbar-page";
import { TabBarPage } from "./page/tabbar-page";
import { TextAreaPage } from "./page/text-area-page";
import { TextFieldPage } from "./page/text-field-page";
import { TypographyPage } from "./page/typography-page";
import {HomePageContainer} from "./home-page-container";
import {RadioButtonPage} from "./page/radio-button-page";

export const ROUTES = <RouteList>
    <Route path={[PATH_DEFAULT, PATH_WILDCARD, CheckboxPage.ROUTE]}
           component={<HomePageContainer><CheckboxPage/></HomePageContainer>}/>
    <Route path={ButtonPage.ROUTE} component={<HomePageContainer><ButtonPage/></HomePageContainer>}/>
    <Route path={TextFieldPage.ROUTE} component={<HomePageContainer><TextFieldPage/></HomePageContainer>}/>
    <Route path={TextAreaPage.ROUTE} component={<HomePageContainer><TextAreaPage/></HomePageContainer>}/>
    <Route path={TypographyPage.ROUTE} component={<HomePageContainer><TypographyPage/></HomePageContainer>}/>
    <Route path={GridLayoutPage.ROUTE} component={<HomePageContainer><GridLayoutPage/></HomePageContainer>}/>
    <Route path={DrawerPage.ROUTE} component={<HomePageContainer><DrawerPage/></HomePageContainer>}/>
    <Route path={ListPage.ROUTE} component={<HomePageContainer><ListPage/></HomePageContainer>}/>
    <Route path={TabBarPage.ROUTE} component={<HomePageContainer><TabBarPage/></HomePageContainer>}/>
    <Route path={SnackbarPage.ROUTE} component={<HomePageContainer><SnackbarPage/></HomePageContainer>}/>
    <Route path={DialogPage.ROUTE} component={<HomePageContainer><DialogPage/></HomePageContainer>}/>
    <Route path={RadioButtonPage.ROUTE} component={<HomePageContainer><RadioButtonPage/></HomePageContainer>}/>
</RouteList>;