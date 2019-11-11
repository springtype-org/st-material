import { st } from "springtype/core";
import { component } from "springtype/web/component";
import { PATH_DEFAULT, PATH_WILDCARD, Route, RouteList } from "springtype/web/router";
import { tsx } from "springtype/web/vdom";
import { MwcTopBar } from "../../component/mwc-top-bar/mwc-top-bar";
import { MwcTypography } from "../../component/typography/mwc-typography/mwc-typography";
import { ButtonPage } from "./button-page";
import { CheckboxPage } from "./checkbox-page";
import {TextFieldPage} from "./text-field-page";
import {MwcH6} from "../../component/typography/mwc-h6/mwc-h6";
import {MwcTextField} from "../../component/mwc-textfield/mwc-text-field";
import {MwcTextFieldVariant} from "../../component/mwc-textfield/mwc-text-field-variant";

@component()
export class HomePage extends st.component {
  render() {
    return (
      <MwcTypography>
        <MwcTopBar title="Playground"></MwcTopBar>
        <br />
        <br />
        <br />
        <br />
        {/* TODO: Make this Tabs or smth. nice */}
        <ul>
          <li>
              <a href={'/#' + CheckboxPage.ROUTE}>Checkbox</a>
          </li>
          <li>
           <a href={'/#' + ButtonPage.ROUTE}>Button</a>
          </li>
            <li>
            <a href={'/#' + TextFieldPage.ROUTE}>TextField</a>
          </li>
        </ul>
        <br />
        <RouteList>
          <Route path={[PATH_DEFAULT, PATH_WILDCARD, CheckboxPage.ROUTE]} component={<CheckboxPage />} />
          <Route path={ButtonPage.ROUTE} component={<ButtonPage />} />
          <Route path={TextFieldPage.ROUTE} component={<TextFieldPage/>} />
        </RouteList>
      </MwcTypography>
    );
  }
}
