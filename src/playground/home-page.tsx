import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { PATH_DEFAULT, PATH_WILDCARD, Route, RouteList } from "springtype/web/router";
import { tsx } from "springtype/web/vdom";
import { MwcTopBar } from "../component/mwc-top-bar/mwc-top-bar";
import { MwcTypography } from "../component/typography/mwc-typography/mwc-typography";
import { ButtonPage } from "./page/button-page";
import { CheckboxPage } from "./page/checkbox-page";
import { DrawerPage } from "./page/drawer-page";
import { GridLayoutPage } from "./page/grid-layout-page";
import { ListPage } from "./page/list-page";
import { TextAreaPage } from "./page/text-area-page";
import { TextFieldPage } from "./page/text-field-page";
import { TypographyPage } from "./page/typography-page";

@component()
export class HomePage extends st.component {
  render() {
    return (
      <MwcTypography>
        <MwcTopBar title="Playground"/>
        <br />
        <br />
        <br />
        <br />
        {/* TODO: Make this Tabs or smth. nice */}
        <ul>
          <li>
            <a href={"/#" + CheckboxPage.ROUTE}>Checkbox</a>
          </li>
          <li>
            <a href={"/#" + ButtonPage.ROUTE}>Button</a>
          </li>
          <li>
            <a href={"/#" + TextFieldPage.ROUTE}>TextField</a>
          </li>
          <li>
            <a href={"/#" + TypographyPage.ROUTE}>Typography</a>
          </li>
            <li>
            <a href={"/#" + TextAreaPage.ROUTE}>TextAreaPage</a>
          </li>
          <li>
            <a href={"/#" + GridLayoutPage.ROUTE}>Grid Layout</a>
          </li>
          <li>
            <a href={"/#" + DrawerPage.ROUTE}>Drawer</a>
          </li>
          <li>
            <a href={"/#" + ListPage.ROUTE}>List</a>
          </li>
        </ul>
        <br />
        <RouteList>
          <Route path={[PATH_DEFAULT, PATH_WILDCARD, CheckboxPage.ROUTE]} component={<CheckboxPage />} />
          <Route path={ButtonPage.ROUTE} component={<ButtonPage />} />
          <Route path={TextFieldPage.ROUTE} component={<TextFieldPage />} />
          <Route path={TextAreaPage.ROUTE} component={<TextAreaPage />} />
          <Route path={TypographyPage.ROUTE} component={<TypographyPage />} />
          <Route path={GridLayoutPage.ROUTE} component={<GridLayoutPage />} />
          <Route path={DrawerPage.ROUTE} component={<DrawerPage />} />
          <Route path={ListPage.ROUTE} component={<ListPage />} />
        </RouteList>
      </MwcTypography>
    );
  }
}
