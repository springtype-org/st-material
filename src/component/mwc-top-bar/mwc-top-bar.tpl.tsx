import { tsx } from "springtype/web/vdom";
import { MwcTopBar } from "./mwc-top-bar";
import { MwcTopBarVariant } from "./mwc-top-bar-variant";
import * as mwcTopBar from "./mwc-top-bar.tss.scss";

export default (component: MwcTopBar) => {
  const fixedBodyClasses = [];
  const fixedClasses = ["mdc-top-app-bar"];
  switch (component.variant) {
    case MwcTopBarVariant.STANDARD:
      fixedBodyClasses.push("mdc-top-app-bar--fixed-adjust");
      break;
    case MwcTopBarVariant.SHORT_ONLY:
    case MwcTopBarVariant.SHORT:
      fixedClasses.push("mdc-top-app-bar--short", "mdc-top-app-bar--short-has-action-item");
      fixedBodyClasses.push("mdc-top-app-bar--short-fixed-adjust");
      break;
    case MwcTopBarVariant.PROMINENT:
      fixedClasses.push("mdc-top-app-bar--prominent");
      fixedBodyClasses.push("mdc-top-app-bar--prominent-fixed-adjust");
      break;
  }
  if (component.scrolled && component.variant === MwcTopBarVariant.SHORT) {
    fixedClasses.push("mdc-top-app-bar--short-collapsed");
  }

  if (component.scrolled && component.fixed) {
    fixedClasses.push("mdc-top-app-bar--fixed-scrolled");
  }

  if (component.variant === MwcTopBarVariant.SHORT_ONLY) {
    fixedClasses.push("mdc-top-app-bar--short-collapsed");
  }

  //add padding to top-app-bar borders
  fixedBodyClasses.push("mdc-top-app-bar--fixed-adjust--body", mwcTopBar.mdcTopAppBarFixedAdjustBody);

  if (component.dense) {
    fixedClasses.push("mdc-top-app-bar mdc-top-app-bar--dense");
  }

  let trailingIconButtons = "";
  if (component.trailingIconSlot) {
    trailingIconButtons = (
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        {component.trailingIconSlot.children}
      </section>
    );
  }

  return (
    <div>
      <header id={component.headerId} class={fixedClasses} style="top: 0px;">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            {component.renderSlot(MwcTopBar.SLOT_NAME_MENU_ICON_BUTTON)}
            <span class="mdc-top-app-bar__title">{component.title}</span>
          </section>
          {trailingIconButtons}
        </div>
      </header>
      <div class={fixedBodyClasses}>
        <div>{component.renderSlot(MwcTopBar.SLOT_NAME_TOP_BAR_BODY)}</div>
      </div>
    </div>
  );
};
