import "testcafe";
import {getScreenshotDirectory} from "./function/getscreenshotdirectory";
import {compareImage} from "./function/compareImage";
import {writeImage} from "./function/writeimage";
import {compare} from "./function/compare";

fixture`Textfield disabled`.page("../dist/textfield-disabled/index.html");

test('Textfield disabled screenshot', async t => {
    const screenshotPath = getScreenshotDirectory(t.browser.name, 'textfield');
    const cropFilledButtonOption = {includeMargins: true, crop: {bottom: 71, right: 247}};
    const cropOutlinedButtonOption = {includeMargins: true, crop: {right: 247}};

    //filled
    await compare(t, '#div_filled', screenshotPath + 'filled_disabled__normal.png', cropFilledButtonOption);

    await compare(t.click('#filled'), '#div_outlined', screenshotPath + 'outlined_disabled__normal.png', cropOutlinedButtonOption);
});