import "testcafe";
import {getScreenshotDirectory} from "./function/getscreenshotdirectory";
import {compare} from "./function/compare";

fixture`Textfield trailing icon`.page("../dist/textfield-icon-trailing/index.html");

test('Textfield trailing icon screenshots', async t => {
    const screenshotPath = getScreenshotDirectory(t.browser.name, 'textfield');

    const cropFilledButtonOption = {includeMargins: true, crop: {bottom: 71, right: 280}};
    const cropOutlinedButtonOption = {includeMargins: true, crop: {right: 280}};

    //filled
    await compare(t, '#div_filled', screenshotPath + 'filled_trailing_icon__normal.png', cropFilledButtonOption);
    await compare(t.hover('#filled'), '#div_filled', screenshotPath + 'filled_trailing_icon__hover.png', cropFilledButtonOption);
    await compare(t.click('#filled'), '#div_filled', screenshotPath + 'filled_trailing_icon__focused.png', cropFilledButtonOption);
    await compare(t.typeText('#filled', '<3 springtype'), '#div_filled', screenshotPath + 'filled_trailing_icon__text_focused.png', cropFilledButtonOption);
    await compare(t.click('#outlined'), '#div_filled', screenshotPath + 'filled_trailing_icon__text_blur.png', cropFilledButtonOption);

    //outlined
    await compare(t.click('#filled'), '#div_outlined', screenshotPath + 'outlined_trailing_icon__normal.png', cropOutlinedButtonOption);
    await compare(t.hover('#outlined'), '#div_outlined', screenshotPath + 'outlined_trailing_icon__hover.png', cropOutlinedButtonOption);
    await compare(t.click('#outlined'), '#div_outlined', screenshotPath + 'outlined_trailing_icon__focused.png', cropOutlinedButtonOption);
    await compare(t.typeText('#outlined', '<3 springtype'), '#div_outlined', screenshotPath + 'outlined_trailing_icon__text_focused.png', cropOutlinedButtonOption);
    await compare(t.click('#filled'), '#div_outlined', screenshotPath + 'outlined_trailing_icon__text_blur.png', cropOutlinedButtonOption);
});
