import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
//go to the page https://the-internet-5chk.onrender.com/
await page.goto('https://the-internet-5chk.onrender.com/');

//pause for 3 seconds
await page.waitForTimeout(3000);

let actualTitle = await page.title()

console.log(actualTitle)
});




test('getting the current url of the page', async ({ page }) => {
await page.goto('https://the-internet-5chk.onrender.com/');

//pause for 3 seconds
await page.waitForTimeout(3000);

let actualUrl = await page.url();
console.log(actualUrl);
});


test("Set the window size", async ({ page }) => {

    await page.goto('https://the-internet-5chk.onrender.com/');

    page.setViewportSize({ width: 1000, height: 1080 });

    //pause for 3 seconds
    await page.waitForTimeout(3000);
});