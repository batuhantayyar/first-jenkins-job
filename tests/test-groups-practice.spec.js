import {test} from '@playwright/test';

test.describe("Practice.cydeo", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet-5chk.onrender.com");
    });

    test.afterEach(async () => {
        console.log("After Each is executed");
    });

    test("title of page", async ({ page }) => {
        console.log(await page.title());

        await page.waitForTimeout(3000);

    });

    test("url of page", async ({ page }) => {
        console.log(await page.url());

        await page.waitForTimeout(3000);
    });

});
