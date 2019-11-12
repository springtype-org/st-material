import { tsx } from "springtype/web/vdom";
import { MwcTopBar } from "./mwc-top-bar";
import { MwcTopBarVariant } from "./mwc-top-bar-variant";

export default (component: MwcTopBar) => {
  const fixedBodyClasses = [];
  const appBarClasses = ["mdc-top-app-bar", "app-bar"];
  switch (component.variant) {
    case MwcTopBarVariant.STANDARD:
      fixedBodyClasses.push("mdc-top-app-bar--fixed-adjust");
      break;
    case MwcTopBarVariant.SHORT_ONLY:
    case MwcTopBarVariant.SHORT:
      appBarClasses.push("mdc-top-app-bar--short", "mdc-top-app-bar--short-has-action-item");
      fixedBodyClasses.push("mdc-top-app-bar--short-fixed-adjust");
      break;
    case MwcTopBarVariant.PROMINENT:
      appBarClasses.push("mdc-top-app-bar--prominent");
      fixedBodyClasses.push("mdc-top-app-bar--prominent-fixed-adjust");
      break;
  }
  if (component.scrolled && component.variant === MwcTopBarVariant.SHORT) {
    appBarClasses.push("mdc-top-app-bar--short-collapsed");
  }

  if (component.scrolled && component.fixed) {
    appBarClasses.push("mdc-top-app-bar--fixed-scrolled");
  }

  if (component.variant === MwcTopBarVariant.SHORT_ONLY) {
    appBarClasses.push("mdc-top-app-bar--short-collapsed");
  }

  //add padding to top-app-bar borders
  fixedBodyClasses.push("mdc-top-app-bar--fixed-adjust--body");

  if (component.dense) {
    appBarClasses.push("mdc-top-app-bar mdc-top-app-bar--dense");
  }

  const section = [];

  if (component.showMenuButton) {
    section.push(
      <a href="javascript:void(0)" class="material-icons mdc-top-app-bar__navigation-icon">
        {component.menuIcon}
      </a>,
    );
  }
  section.push(<span class="mdc-top-app-bar__title">{component.title}</span>);

  return (
    <div>
      <header id={component.headerId} class={appBarClasses}>
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">{section}</section>
          {component.virtualNode.slotChildren[MwcTopBar.SLOT_NAME_TRAILING_ICONS] && (
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              {component.renderSlot(MwcTopBar.SLOT_NAME_TRAILING_ICONS)}
            </section>
          )}
        </div>
      </header>
      <div class={fixedBodyClasses}>
        <div>{component.renderSlot(MwcTopBar.SLOT_NAME_BODY)}</div>
      </div>
    </div>
  );
};
